// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsTablesResponseBodyDataObjectList } from "./ListMmsTablesResponseBodyDataObjectList";


export class ListMmsTablesResponseBodyData extends $dara.Model {
  objectList?: ListMmsTablesResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
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
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsTablesResponseBodyDataObjectList },
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

