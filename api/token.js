module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const appId = 'a3a80917a1fa413cb2ebdc88733ac507';
  const appCertificate = 'a8975bc797ea437cbf24fd404fe17c60';
  const channelName = req.query.channel || 'default';
  const uid = 0;
  const currentTime = Math.floor(Date.now() / 1000);
  const expireTime = currentTime + 3600;

  const { RtcTokenBuilder, RtcRole } = require('agora-access-token');
  const token = RtcTokenBuilder.buildTokenWithUid(
    appId, appCertificate, channelName,
    uid, RtcRole.PUBLISHER, expireTime
  );

  res.json({ token });
};
