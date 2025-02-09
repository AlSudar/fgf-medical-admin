export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 80),
  url: "http://server.fgfmed.ru",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
