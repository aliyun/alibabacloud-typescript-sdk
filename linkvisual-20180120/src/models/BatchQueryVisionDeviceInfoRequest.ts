// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryVisionDeviceInfoRequest extends $dara.Model {
  deviceNameList?: string[];
  iotIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNameList: 'DeviceNameList',
      iotIdList: 'IotIdList',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNameList: { 'type': 'array', 'itemType': 'string' },
      iotIdList: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceNameList)) {
      $dara.Model.validateArray(this.deviceNameList);
    }
    if(Array.isArray(this.iotIdList)) {
      $dara.Model.validateArray(this.iotIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

