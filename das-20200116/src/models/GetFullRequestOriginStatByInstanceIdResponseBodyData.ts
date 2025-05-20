// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFullRequestOriginStatByInstanceIdResponseBodyDataList } from "./GetFullRequestOriginStatByInstanceIdResponseBodyDataList";


export class GetFullRequestOriginStatByInstanceIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the full request data.
   */
  list?: GetFullRequestOriginStatByInstanceIdResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': GetFullRequestOriginStatByInstanceIdResponseBodyDataList },
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

