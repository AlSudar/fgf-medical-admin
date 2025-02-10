export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 80),
  url: "http://api.fgfmed.ru",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
