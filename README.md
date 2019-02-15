# example-puppeteer-google-functions

example Puppeteer on Google Cloud functions

## Usage

crawl 4gamer.net Daily Ranking Article Title.

```bash
$ yarn call
yarn run v1.10.1
$ yarn build && yarn deploy && yarn functions:call
$ tsc
$ yarn functions:deploy
$ functions deploy crawl --trigger-http --local-path=functions
....
$ functions call crawl
ExecutionId: aaaa-0000-1111-a1234
Result: { titles:
   [ '「ドラゴンクエストXI　過ぎ去りし時を求めて S」，新ストーリーは各キャラクターが主人公となるものに',
     '「ゼルダの伝説 夢をみる島」が，26年の時を経てNintendo Switchで生まれ変わる。2019年内に発売予定',
     'Nintendo Switch版「FFIX」が本日配信＆「FFVII」は3月26日に発売。さらに「チョコボの不思議なダンジョン エブリバディ！」のあらかじめDLもスタート',
     'キャラクターデザインは桂 正和氏。プラチナゲームズのNintendo Switch向け新作アクション「ASTRAL CHAIN」が2019年8月30日に発売',
     'あのドラクエがついに映画化！　3DCGアニメーション映画「ドラゴンクエスト　ユア・ストーリー」が8月2日に全国東映系の劇場で公開決定',
     '「大乱闘スマッシュブラザーズ SPECIAL」の新ファイターとなる「ペルソナ5」ジョーカーは2019年4月末までに配信。Ver.3.0へのアップデートも',
     '「ルーンファクトリー」最新作がNintendo Switch向けに制作決定。2019年7月25日にはSwitch版「ルーンファクトリー4」も発売',
     '「New スーパーマリオブラザーズ U デラックス」が累計40万本突破目前。新作は「アークオブアルケミスト」が登場の「週間販売ランキング＋」',
     'Switch向け新作「ドラえもん のび太の牧場物語」が発表。発売は2019年内を予定',
     '「ファイアーエムブレム 風花雪月」の発売日が7月26日に決定。アートブックなどが付属する豪華版「Fódlan Collection」の存在も明らかに',
     '本日発売「キャサリン・フルボディ」プレイレポート。“エンディング保証”は真実か――パズルが苦手なゲーマーがトライしてみた',
     'Nintendo Switch用メカアクション「DAEMON X MACHINA」の体験版が本日配信。発売は2019年夏を予定',
     '「Nintendo Direct」が2月14日朝7時より配信。「ファイアーエムブレム 風花雪月」を中心としたSwitchソフトの情報が公開へ',
     '週刊少年ジャンプ創刊50周年作品「JUMP FORCE」が本日発売。参戦キャラクターやストーリー，ゲームシステムをまとめて紹介',
     '「信長の野望･大志 with パワーアップキット」が本日発売。DL版は2月27日まで10％オフ',
     '［EVO Japan］国内最大級の格闘ゲームイベント「EVO Japan 2019」が本日13:00開幕。タイムスケジュールや注目選手をまとめて掲載',
     'スクウェア・エニックス/Tokyo RPG FactoryのNintendo Switch用新作「鬼ノ哭ク邦」が2019年夏に発売',
     '任天堂の公式サイトに「乙女ゲーム」の特集ページがオープン。Switch向け乙女ゲームの情報発信を開始',
     'PS Storeにて「5pb.ウィンターセール」が開催。「STEINS;GATE 0」や「メモリーズオフ」シリーズなど，全82タイトルが最大95％オフに',
     '「ポケモンGO」のバレンタインイベントが本日スタート。ピッピやハネッコといったピンク色のポケモンがいつもより多く出現',
     'ハクスラ系アクションRPG「ヴィクター・ヴラン オーバーキル エディション」（PS4/Switch）が本日発売。ローンチトレイラーも公開',
     'Nintendo Switch向け「スーパーマリオメーカー 2」が2019年6月に発売。ゲームスキンやギミックなどの新要素が大幅に増加',
     '「UNDERTALE」のToby Fox氏による新作「DELTARUNE：Chapter 1」がSwitchに登場。無料配信が2月28日から開始',
     '「バンドリ！ガールズバンドパーティ！」ユーザー数900万人突破＆バレンタイン記念キャンペーンが2月14日15：00にスタート。各バンドのQUOカードプレゼント企画も開催',
     '「ドラゴンクエストライバルズ」がNintendo Switch向けに登場。Nintendo Direct終了直後に配信スタート',
     '「ヴィクター・ヴラン オーバーキル エディション」プレイレポート。トレハンで手に入れた武器と華麗なアクションでモンスターを叩きのめせ！',
     'おっぱいを，育てて目指せ，Zカップ。正統派ローグライクRPG「オメガラビリンスZ D3P THE BEST」が本日発売',
     '本日発売の「JUMP FORCE」，追加要素を含むアップデートを同時配信。「動作の安定性向上」「ロード時間の短縮」などは継続して対応',
     '今度は終末だ！　衝撃のラストの“その後”を描くシリーズ最新作「ファークライ ニュードーン」のプレイレポートをお届け',
     '「実況パワフルプロ野球」がNintendo Switchで2019年発売。最大4人までの対戦・協力プレイに対応',
     'Nintendo Switch版「Dead By Daylight」が2019年秋に発売。サバイバーと殺人鬼，4対1で繰り広げる鬼ごっこホラー',
     '「真・三國無双8」，DLC「シーズンパス3」が配信開始＆追加コスチュームDLC第5弾が2月21日に配信決定',
     '五十嵐孝司氏の新作「Bloodstained: Ritual of the Night」，Switch版のほかPCやPS4，Xbox Oneでも2019年夏リリースへ',
     '「ウイニングイレブン 2019」，現役スター選手が手に入る「Playing is Believing（ウイイレやればわかる）キャンペーン」が開催＆トレイラーが公開',
     '横スクロールアクション「Bloodstained: Ritual of the Night」のNintendo Switch版が2019年夏に発売決定',
     '「TETRIS 99」がNintendo Switch Online加入者に向けて無料で配信開始。99人同時対戦のバトルロイヤルパズルゲーム',
     'パーティーゲーム「ディズニー ツムツム フェスティバル」が2019年に発売。オンラインの対戦や協力プレイが楽しめる',
     '47都道府県を舞台としたスマホ向けシミュレーションRPG「47 HEROINS」が本日配信スタート',
     '天変地異が文明を襲う！　「シヴィライゼーション VI」最新拡張パック「嵐の訪れ」プレイレポート。“黒死病”渦巻く「黒い死神」に挑む',
     'Android版「アイドルマスター シャイニーカラーズ」の事前登録受付がGoogle Playでスタート',
     'これは写真じゃないんです。チェルノブイリ原発事故を扱う新作サバイバルホラー「Chernobylite」の開発者ビデオダイアリーが公開',
     '「MONSTER HUNTER: WORLD」，イベントクエスト“依頼：森の精霊”が配信。報酬で「ウィッチャー3」のコラボ装備が生産可能に',
     '［EVO Japan］「DEAD OR ALIVE 6」に“不知火 舞”の参戦が決定。24キャラが使用できる体験版配信も',
     'PC版「Anthem」，Origin Access Premierメンバーのプレイ開始時間が2月16日0：00に延期',
     '「キャサリン・フルボディ」が本日発売＆各種DLCが配信開始。公式Twitterでは副島成記氏による描きおろしイラストも公開に',
     '「メトロ エクソダス」，先行プレイ動画やゲーム実況生放送，そしてストーリートレイラーなど，本日まとめて大公開',
     '「ドラゴンボールZ ドッカンバトル」の4周年記念生番組が2月14日に配信決定',
     'MOBA「Vainglory」（PC/Mac）早期アクセス版の無料配信がSteamで本日スタート。スマホ版とのクロスプレイにも対応',
     '橋本祐介氏がプラチナゲームズを退職。「ベヨネッタ」シリーズなどを手がけてきたクリエイター',
     '「レッド・デッド・オンライン」（β版），2月26日アップデートの内容が公開。法執行官と賞金首に関する新システムの導入も' ] }
✨  Done in 19.90s.
```

### Setup

#### Cloudfunctions for local

use cloud Functions local emulator

- https://cloud.google.com/functions/docs/emulator?hl=ja
- https://github.com/GoogleCloudPlatform/cloud-functions-emulator/

##### launch emulator

```bash
$ yarn start
```

##### deploy functions

```bash
$ yarn deploy
```

##### call functions

```bash
$ yarn call
$ yarn call --data='{"message":"Hello World"}' # with Payload.
```
