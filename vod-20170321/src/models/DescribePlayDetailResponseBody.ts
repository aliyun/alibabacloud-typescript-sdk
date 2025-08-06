// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayDetailResponseBodyBaseInfos extends $dara.Model {
  appName?: string;
  bps?: string;
  broadcastPace?: string;
  clientIP?: string;
  codec?: string;
  decodeStuckTime?: string;
  definition?: string;
  firstFrameDuration?: string;
  fps?: string;
  isHardDecode?: string;
  mdat?: string;
  moov?: string;
  network?: string;
  networkDuration?: string;
  networkStuckTime?: string;
  os?: string;
  playTs?: string;
  playerLoadDuration?: string;
  playerPreDealDuration?: string;
  playerReadyDuration?: string;
  sdkVersion?: string;
  sessionId?: string;
  status?: string;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bps: 'Bps',
      broadcastPace: 'BroadcastPace',
      clientIP: 'ClientIP',
      codec: 'Codec',
      decodeStuckTime: 'DecodeStuckTime',
      definition: 'Definition',
      firstFrameDuration: 'FirstFrameDuration',
      fps: 'Fps',
      isHardDecode: 'IsHardDecode',
      mdat: 'Mdat',
      moov: 'Moov',
      network: 'Network',
      networkDuration: 'NetworkDuration',
      networkStuckTime: 'NetworkStuckTime',
      os: 'Os',
      playTs: 'PlayTs',
      playerLoadDuration: 'PlayerLoadDuration',
      playerPreDealDuration: 'PlayerPreDealDuration',
      playerReadyDuration: 'PlayerReadyDuration',
      sdkVersion: 'SdkVersion',
      sessionId: 'SessionId',
      status: 'Status',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bps: 'string',
      broadcastPace: 'string',
      clientIP: 'string',
      codec: 'string',
      decodeStuckTime: 'string',
      definition: 'string',
      firstFrameDuration: 'string',
      fps: 'string',
      isHardDecode: 'string',
      mdat: 'string',
      moov: 'string',
      network: 'string',
      networkDuration: 'string',
      networkStuckTime: 'string',
      os: 'string',
      playTs: 'string',
      playerLoadDuration: 'string',
      playerPreDealDuration: 'string',
      playerReadyDuration: 'string',
      sdkVersion: 'string',
      sessionId: 'string',
      status: 'string',
      terminalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayDetailResponseBody extends $dara.Model {
  baseInfos?: DescribePlayDetailResponseBodyBaseInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baseInfos: 'BaseInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseInfos: { 'type': 'array', 'itemType': DescribePlayDetailResponseBodyBaseInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baseInfos)) {
      $dara.Model.validateArray(this.baseInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

