// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFullRequestStatResultByInstanceIdResponseBodyDataResultList } from "./GetFullRequestStatResultByInstanceIdResponseBodyDataResultList";


export class GetFullRequestStatResultByInstanceIdResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The full request data.
   */
  list?: GetFullRequestStatResultByInstanceIdResponseBodyDataResultList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetFullRequestStatResultByInstanceIdResponseBodyDataResultList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

