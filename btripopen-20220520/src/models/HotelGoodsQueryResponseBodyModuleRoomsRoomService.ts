// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelGoodsQueryResponseBodyModuleRoomsRoomService extends $dara.Model {
  /**
   * @example
   * #000000
   */
  color?: string;
  desc?: string;
  /**
   * @example
   * #4AA900
   */
  highlightColorColor?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      desc: 'desc',
      highlightColorColor: 'highlight_color_color',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      desc: 'string',
      highlightColorColor: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

