# LP Boilerplate


## Setup
require node version
*  node 10.0.0~

install command
```
$ npm install
```

## Command
### Markup (pug + scss & webserver)
pug,scssのみ使用する場合はこれ
```
$ npm start
```

### Development(Markup + TypeScript)
上記に併せTSも書く場合はこれ
```
$ npm dev
```

### test files generate
with sourceMap
```
$ npm build
```

### production files generate
no sourceMap
```
$ npm release
```

