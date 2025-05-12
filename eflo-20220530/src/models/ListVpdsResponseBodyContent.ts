// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVpdsResponseBodyContentData } from "./ListVpdsResponseBodyContentData";


export class ListVpdsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVpdsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries that are returned.
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
      data: { 'type': 'array', 'itemType': ListVpdsResponseBodyContentData },
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

