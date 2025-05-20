// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeviceInfoResponseBodyDataRecordList } from "./GetDeviceInfoResponseBodyDataRecordList";


export class GetDeviceInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the device.
   * 
   * @example
   * pn_69873
   */
  deviceId?: string;
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * Main transformer 4#
   */
  deviceName?: string;
  /**
   * @remarks
   * The level 1 meter type.
   * 
   * @example
   * Electric meter
   */
  firstTypeName?: string;
  /**
   * @remarks
   * The device parameters.
   */
  recordList?: GetDeviceInfoResponseBodyDataRecordList[];
  /**
   * @remarks
   * The level 2 meter type.
   * 
   * @example
   * Gateway meter
   */
  secondTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'deviceId',
      deviceName: 'deviceName',
      firstTypeName: 'firstTypeName',
      recordList: 'recordList',
      secondTypeName: 'secondTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      firstTypeName: 'string',
      recordList: { 'type': 'array', 'itemType': GetDeviceInfoResponseBodyDataRecordList },
      secondTypeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordList)) {
      $dara.Model.validateArray(this.recordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

