export default () => ({
  port: +process.env.PORT || 3000,
  database: {
    uri: process.env.MONGOURI,
  },
});
