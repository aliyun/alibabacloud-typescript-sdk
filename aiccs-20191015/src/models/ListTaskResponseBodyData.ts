// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskResponseBodyDataRecord } from "./ListTaskResponseBodyDataRecord";


export class ListTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  record?: ListTaskResponseBodyDataRecord[];
  /**
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskResponseBodyDataRecord },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

