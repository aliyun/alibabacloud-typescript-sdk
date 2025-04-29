// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelRoomInfoResponseBodyModuleRoomImages extends $dara.Model {
  bedInfos2?: string;
  tag?: number;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/6000000000003/O1CN01xkZQR41BtPxK1PQCb_!!6000000000003-0-hotel.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bedInfos2: 'bed_infos2',
      tag: 'tag',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfos2: 'string',
      tag: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

