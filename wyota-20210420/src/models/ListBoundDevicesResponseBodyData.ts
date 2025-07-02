// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBoundDevicesResponseBodyDataDevices } from "./ListBoundDevicesResponseBodyDataDevices";


export class ListBoundDevicesResponseBodyData extends $dara.Model {
  devices?: ListBoundDevicesResponseBodyDataDevices[];
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
      devices: { 'type': 'array', 'itemType': ListBoundDevicesResponseBodyDataDevices },
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

