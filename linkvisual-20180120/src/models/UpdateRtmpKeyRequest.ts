// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtmpKeyRequest extends $dara.Model {
  deviceName?: string;
  iotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  productKey?: string;
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

