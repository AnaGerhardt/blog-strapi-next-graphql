module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '97f657b3a80fec3b4fdc1d62b1e67ec2'),
  },
});
