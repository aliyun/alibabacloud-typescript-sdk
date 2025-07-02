// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUnbindDevicesResponseBodyDataDevices } from "./ListUnbindDevicesResponseBodyDataDevices";


export class ListUnbindDevicesResponseBodyData extends $dara.Model {
  devices?: ListUnbindDevicesResponseBodyDataDevices[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ListUnbindDevicesResponseBodyDataDevices },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

