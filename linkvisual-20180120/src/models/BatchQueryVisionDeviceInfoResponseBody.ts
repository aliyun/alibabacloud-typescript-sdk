// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListGbDeviceInfo extends $dara.Model {
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

export class BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListRtmpDeviceInfo extends $dara.Model {
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

export class BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoList extends $dara.Model {
  description?: string;
  deviceType?: number;
  gbDeviceInfo?: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListGbDeviceInfo;
  iotId?: string;
  rtmpDeviceInfo?: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListRtmpDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceType: 'DeviceType',
      gbDeviceInfo: 'GbDeviceInfo',
      iotId: 'IotId',
      rtmpDeviceInfo: 'RtmpDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceType: 'number',
      gbDeviceInfo: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListGbDeviceInfo,
      iotId: 'string',
      rtmpDeviceInfo: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoListRtmpDeviceInfo,
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

export class BatchQueryVisionDeviceInfoResponseBodyData extends $dara.Model {
  deviceInfoList?: BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoList[];
  static names(): { [key: string]: string } {
    return {
      deviceInfoList: 'DeviceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoList: { 'type': 'array', 'itemType': BatchQueryVisionDeviceInfoResponseBodyDataDeviceInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfoList)) {
      $dara.Model.validateArray(this.deviceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryVisionDeviceInfoResponseBody extends $dara.Model {
  code?: string;
  data?: BatchQueryVisionDeviceInfoResponseBodyData;
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
      data: BatchQueryVisionDeviceInfoResponseBodyData,
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

