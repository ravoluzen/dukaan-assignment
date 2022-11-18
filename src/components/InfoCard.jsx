import React from 'react'

export default function InfoCard({ className, imageUrl, headingText, description}) {
  return (
    <div className={className}>
        <img src={imageUrl} alt=""></img>
        <h3 style={{ color: "#1A181E", fontWeight: 1000, fontSize: "1.2rem"}}>{headingText}</h3>
        <p style={{ color: "#4D4D4D"}}>{description}</p>
    </div>
  )
}
