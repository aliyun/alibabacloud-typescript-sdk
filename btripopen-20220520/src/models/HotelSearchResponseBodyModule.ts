// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelSearchResponseBodyModuleItems } from "./HotelSearchResponseBodyModuleItems";


export class HotelSearchResponseBodyModule extends $dara.Model {
  count?: number;
  items?: HotelSearchResponseBodyModuleItems[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      items: { 'type': 'array', 'itemType': HotelSearchResponseBodyModuleItems },
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

