// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListErsResponseBodyContentData } from "./ListErsResponseBodyContentData";


export class ListErsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * lingjun hub information list.
   */
  data?: ListErsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
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
      data: { 'type': 'array', 'itemType': ListErsResponseBodyContentData },
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

