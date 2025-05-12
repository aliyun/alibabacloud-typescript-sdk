// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListErRouteEntriesResponseBodyContentData } from "./ListErRouteEntriesResponseBodyContentData";


export class ListErRouteEntriesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun HUB Route Entry Information List
   */
  data?: ListErRouteEntriesResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErRouteEntriesResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

