// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListZonesResponseBodyDataItems } from "./ListZonesResponseBodyDataItems";


export class ListZonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of availability zones.
   */
  items?: ListZonesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListZonesResponseBodyDataItems },
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

