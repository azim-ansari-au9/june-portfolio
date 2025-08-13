import React, { useEffect, useRef } from 'react';

function AdSlot({
  className,
  style,
  slot = '0000000000',
  format = 'auto',
  responsive = 'true',
  layout,
  layoutKey,
  client = 'ca-pub-REPLACE_ME'
}) {
  const adRef = useRef(null);

  useEffect(() => {
    // Do not initialize if publisher id is not set
    if (!client || client.includes('REPLACE_ME')) return;

    const adEl = adRef.current;
    if (!adEl) return;

    // Prevent double initialization (React StrictMode / re-renders)
    const alreadyInitialized = adEl.getAttribute('data-adsbygoogle-status') === 'done';
    if (alreadyInitialized) return;

    try {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-underscore-dangle
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      // Silently ignore in dev/local or if adblocker is active
    }
  }, [client]);

  // If client is not configured, avoid rendering the ins entirely
  if (!client || client.includes('REPLACE_ME')) {
    return null;
  }

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle${className ? ` ${className}` : ''}`}
      style={style || { display: 'block', margin: '24px 0' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      {...(layout ? { 'data-ad-layout': layout } : {})}
      {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
    />
  );
}

export default AdSlot; 