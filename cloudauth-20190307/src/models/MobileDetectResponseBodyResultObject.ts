// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MobileDetectResponseBodyResultObjectItems } from "./MobileDetectResponseBodyResultObjectItems";


export class MobileDetectResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 2
   */
  chargeCount?: string;
  items?: MobileDetectResponseBodyResultObjectItems[];
  static names(): { [key: string]: string } {
    return {
      chargeCount: 'ChargeCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeCount: 'string',
      items: { 'type': 'array', 'itemType': MobileDetectResponseBodyResultObjectItems },
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

