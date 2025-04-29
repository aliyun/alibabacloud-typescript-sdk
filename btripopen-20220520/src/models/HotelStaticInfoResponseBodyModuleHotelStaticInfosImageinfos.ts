// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelStaticInfoResponseBodyModuleHotelStaticInfosImageinfos extends $dara.Model {
  desc?: string;
  tag?: number;
  /**
   * @example
   * https://img.alicdn.com/imgextra/i3/6000000000003/O1CN01xkZQR41BtPxK1PQCb_!!6000000000003-0-hotel.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      tag: 'tag',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
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

