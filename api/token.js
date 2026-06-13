const { RtcTokenBuilder, RtcRole } = require('agora-access-token');

const APP_ID = 'a3a80917a1fa413cb2ebdc88733ac507';
const APP_CERTIFICATE = 'a8975bc797ea437cbf24fd404fe17c60';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const channelName = req.query.channel;
  if(!channelName) {
    return res.status(400).json({ error: 'Channel required' });
  }

  const currentTime = Math.floor(Date.now() / 1000);
  const expireTime = currentTime + 3600;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    channelName,
    0,
    RtcRole.PUBLISHER,
    expireTime
  );

  return res.status(200).json({ token });
}
