// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupListBedInfos } from "./HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupListBedInfos";


export class HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupList extends $dara.Model {
  bedInfos?: HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupListBedInfos[];
  static names(): { [key: string]: string } {
    return {
      bedInfos: 'bed_Infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfos: { 'type': 'array', 'itemType': HotelStaticInfoResponseBodyModuleHotelStaticInfosRoomInfosBedInfoGroupListBedInfos },
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

