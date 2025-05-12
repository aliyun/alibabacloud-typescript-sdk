// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVccRouteEntriesResponseBodyContentData } from "./ListVccRouteEntriesResponseBodyContentData";


export class ListVccRouteEntriesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * List of Lingjun Connection Route Entries
   */
  data?: ListVccRouteEntriesResponseBodyContentData[];
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
      data: { 'type': 'array', 'itemType': ListVccRouteEntriesResponseBodyContentData },
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

