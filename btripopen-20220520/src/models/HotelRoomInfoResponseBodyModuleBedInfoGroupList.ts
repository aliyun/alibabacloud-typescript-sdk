// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelRoomInfoResponseBodyModuleBedInfoGroupListBedInfos } from "./HotelRoomInfoResponseBodyModuleBedInfoGroupListBedInfos";


export class HotelRoomInfoResponseBodyModuleBedInfoGroupList extends $dara.Model {
  bedInfos?: HotelRoomInfoResponseBodyModuleBedInfoGroupListBedInfos[];
  static names(): { [key: string]: string } {
    return {
      bedInfos: 'bed_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfos: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleBedInfoGroupListBedInfos },
    };
  }

  validate() {
    if(Array.isArray(this.bedInfos)) {
      $dara.Model.validateArray(this.bedInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

