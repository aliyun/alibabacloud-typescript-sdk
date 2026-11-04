// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRtmpDeviceRequest extends $dara.Model {
  description?: string;
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productKey?: string;
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  subStreamName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
      subStreamName: 'SubStreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceName: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
      subStreamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

