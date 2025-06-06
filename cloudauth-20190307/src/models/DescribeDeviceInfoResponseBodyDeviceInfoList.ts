// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo } from "./DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo";


export class DescribeDeviceInfoResponseBodyDeviceInfoList extends $dara.Model {
  deviceInfo?: DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo },
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfo)) {
      $dara.Model.validateArray(this.deviceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

