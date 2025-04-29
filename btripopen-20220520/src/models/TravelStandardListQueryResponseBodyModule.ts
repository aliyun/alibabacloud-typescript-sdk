// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TravelStandardListQueryResponseBodyModuleItems } from "./TravelStandardListQueryResponseBodyModuleItems";


export class TravelStandardListQueryResponseBodyModule extends $dara.Model {
  items?: TravelStandardListQueryResponseBodyModuleItems[];
  /**
   * @example
   * 30
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': TravelStandardListQueryResponseBodyModuleItems },
      totalSize: 'number',
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

