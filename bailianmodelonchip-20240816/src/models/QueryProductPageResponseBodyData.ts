// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryProductPageResponseBodyDataData } from "./QueryProductPageResponseBodyDataData";


export class QueryProductPageResponseBodyData extends $dara.Model {
  data?: QueryProductPageResponseBodyDataData[];
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryProductPageResponseBodyDataData },
      pageIndex: 'number',
      pageSize: 'number',
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

