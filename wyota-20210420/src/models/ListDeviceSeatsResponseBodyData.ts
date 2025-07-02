// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeviceSeatsResponseBodyDataDeviceSeatDTOList } from "./ListDeviceSeatsResponseBodyDataDeviceSeatDtolist";


export class ListDeviceSeatsResponseBodyData extends $dara.Model {
  deviceSeatDTOList?: ListDeviceSeatsResponseBodyDataDeviceSeatDTOList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deviceSeatDTOList: 'DeviceSeatDTOList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSeatDTOList: { 'type': 'array', 'itemType': ListDeviceSeatsResponseBodyDataDeviceSeatDTOList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceSeatDTOList)) {
      $dara.Model.validateArray(this.deviceSeatDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

