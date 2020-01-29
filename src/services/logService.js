import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://018f03bf483d4d1d9cf5d89730215274@sentry.io/2019335",
    maxBreadcrumbs: 50,
    debug: true
  });
}
function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
