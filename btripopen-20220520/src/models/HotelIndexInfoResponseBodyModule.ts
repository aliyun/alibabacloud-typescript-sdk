// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelIndexInfoResponseBodyModuleItems } from "./HotelIndexInfoResponseBodyModuleItems";


export class HotelIndexInfoResponseBodyModule extends $dara.Model {
  items?: HotelIndexInfoResponseBodyModuleItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 182873
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageSize: 'page_size',
      pageToken: 'page_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': HotelIndexInfoResponseBodyModuleItems },
      pageSize: 'number',
      pageToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

