// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVisionDeviceInfoResponseBodyDataGbDeviceInfo extends $dara.Model {
  deviceProtocol?: number;
  gbId?: string;
  netProtocol?: number;
  nickName?: string;
  password?: string;
  subProductKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceProtocol: 'DeviceProtocol',
      gbId: 'GbId',
      netProtocol: 'NetProtocol',
      nickName: 'NickName',
      password: 'Password',
      subProductKey: 'SubProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceProtocol: 'number',
      gbId: 'string',
      netProtocol: 'number',
      nickName: 'string',
      password: 'string',
      subProductKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponseBodyDataRtmpDeviceInfo extends $dara.Model {
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  pushUrlSample?: string;
  streamName?: string;
  streamStatus?: number;
  static names(): { [key: string]: string } {
    return {
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
      pushUrlSample: 'PushUrlSample',
      streamName: 'StreamName',
      streamStatus: 'StreamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
      pushUrlSample: 'string',
      streamName: 'string',
      streamStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponseBodyData extends $dara.Model {
  description?: string;
  deviceType?: number;
  gbDeviceInfo?: QueryVisionDeviceInfoResponseBodyDataGbDeviceInfo;
  rtmpDeviceInfo?: QueryVisionDeviceInfoResponseBodyDataRtmpDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceType: 'DeviceType',
      gbDeviceInfo: 'GbDeviceInfo',
      rtmpDeviceInfo: 'RtmpDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceType: 'number',
      gbDeviceInfo: QueryVisionDeviceInfoResponseBodyDataGbDeviceInfo,
      rtmpDeviceInfo: QueryVisionDeviceInfoResponseBodyDataRtmpDeviceInfo,
    };
  }

  validate() {
    if(this.gbDeviceInfo && typeof (this.gbDeviceInfo as any).validate === 'function') {
      (this.gbDeviceInfo as any).validate();
    }
    if(this.rtmpDeviceInfo && typeof (this.rtmpDeviceInfo as any).validate === 'function') {
      (this.rtmpDeviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVisionDeviceInfoResponseBody extends $dara.Model {
  code?: string;
  data?: QueryVisionDeviceInfoResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryVisionDeviceInfoResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

