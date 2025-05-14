// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDeviceListResponseBodyDeviceListDeviceUnionIds } from "./QueryDeviceListResponseBodyDeviceListDeviceUnionIds";


export class QueryDeviceListResponseBodyDeviceList extends $dara.Model {
  /**
   * @example
   * https://XXXXXX
   */
  deviceIconUrl?: string;
  deviceName?: string;
  /**
   * @example
   * jMR2********ojVJXk=
   */
  deviceOpenId?: string;
  deviceUnionIds?: QueryDeviceListResponseBodyDeviceListDeviceUnionIds[];
  /**
   * @example
   * 1
   */
  online?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIconUrl: 'DeviceIconUrl',
      deviceName: 'DeviceName',
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIconUrl: 'string',
      deviceName: 'string',
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': QueryDeviceListResponseBodyDeviceListDeviceUnionIds },
      online: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceUnionIds)) {
      $dara.Model.validateArray(this.deviceUnionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

