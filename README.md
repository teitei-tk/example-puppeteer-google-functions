# example-puppeteer-google-functions

example Puppeteer on Google Cloud functions

## Usage

### Cloudfunctions for local

use cloud Functions local emulator

- https://cloud.google.com/functions/docs/emulator?hl=ja
- https://github.com/GoogleCloudPlatform/cloud-functions-emulator/

#### launch emulator

```bash
$ yarn start
```

#### deploy functions

```bash
$ yarn deploy
```

#### call functions

```bash
$ yarn call
$ yarn call --data='{"message":"Hello World"}' # with Payload.
```
