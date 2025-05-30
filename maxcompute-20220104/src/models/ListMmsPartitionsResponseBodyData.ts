// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsPartitionsResponseBodyDataObjectList } from "./ListMmsPartitionsResponseBodyDataObjectList";


export class ListMmsPartitionsResponseBodyData extends $dara.Model {
  objectList?: ListMmsPartitionsResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1000
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsPartitionsResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

