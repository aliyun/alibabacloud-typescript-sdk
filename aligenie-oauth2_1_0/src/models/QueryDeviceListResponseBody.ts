// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDeviceListResponseBodyDeviceList } from "./QueryDeviceListResponseBodyDeviceList";


export class QueryDeviceListResponseBody extends $dara.Model {
  deviceList?: QueryDeviceListResponseBodyDeviceList[];
  /**
   * @example
   * 125****0946
   */
  encodeKey?: string;
  /**
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceList: 'DeviceList',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: { 'type': 'array', 'itemType': QueryDeviceListResponseBodyDeviceList },
      encodeKey: 'string',
      encodeType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceList)) {
      $dara.Model.validateArray(this.deviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

