// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSubnetsResponseBodyContentData } from "./ListSubnetsResponseBodyContentData";


export class ListSubnetsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun subnet information list
   */
  data?: ListSubnetsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
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
      data: { 'type': 'array', 'itemType': ListSubnetsResponseBodyContentData },
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

