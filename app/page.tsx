'use client'
import { Button } from '@radix-ui/themes'
import { useState, useRef } from 'react'

function RealtimeRTCButton() {
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState('start')
  const peerRef = useRef<RTCPeerConnection>(null)
  const mediaStreamRef = useRef<MediaStream>(null)

  async function play() {
    // see https://platform.openai.com/docs/guides/realtime#connection-details
    // see https://platform.openai.com/docs/guides/realtime-conversations#handling-audio-with-webrtc
    const tokenResponse = await fetch('/api/session')
    const data = await tokenResponse.json()
    const EPHEMERAL_KEY = data.client_secret.value
    const peer = new RTCPeerConnection()
    const audioEl = document.createElement('audio')
    audioEl.autoplay = true
    peer.ontrack = (e) => (audioEl.srcObject = e.streams[0])
    const audioDevice = await navigator.mediaDevices.getUserMedia({
      audio: true
    })
    mediaStreamRef.current = audioDevice
    peer.addTrack(audioDevice.getTracks()[0])
    const channel = peer.createDataChannel('oai-events')
    channel.addEventListener('open', () => {
      setLoading(false)
      setText('stop')
      peerRef.current = peer
    })
    channel.addEventListener('message', (e) => {
      console.log(e)
    })
    channel.addEventListener('close', (e) => {
      audioDevice.getTracks().forEach((track) => {
        track.stop()
      })
    })
    // Start the session using the Session Description Protocol (SDP)
    const offer = await peer.createOffer()
    await peer.setLocalDescription(offer)
    const baseUrl = 'https://api.openai.com/v1/realtime'
    const model = 'gpt-4o-realtime-preview'
    const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
      method: 'POST',
      body: offer.sdp,
      headers: {
        Authorization: `Bearer ${EPHEMERAL_KEY}`,
        'Content-Type': 'application/sdp'
      }
    })

    peer.addEventListener('connectionstatechange', (e) => {
      console.log(peer.connectionState)
    })
    peer.addEventListener('signalingstatechange', (e) => {
      console.log(peer.signalingState)
    })

    await peer.setRemoteDescription({
      type: 'answer',
      sdp: await sdpResponse.text()
    })
  }

  async function stop() {
    if (!peerRef.current) return
    peerRef.current.close()
    peerRef.current = null
    setText('start')
  }

  return (
    <Button
      loading={loading}
      onClick={(e) => {
        if (peerRef.current) {
          stop()
          return
        }

        if (loading) return
        setLoading(true)
        play()
      }}
    >
      {text}
    </Button>
  )
}

export default function Page() {
  return (
    <>
      <RealtimeRTCButton />
    </>
  )
}
