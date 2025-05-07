// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListXTelephonesResponseBodyDataList } from "./ListXtelephonesResponseBodyDataList";


export class ListXTelephonesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 数据集合
   */
  list?: ListXTelephonesResponseBodyDataList[];
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 符合查询条件的总数量
   * 
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListXTelephonesResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
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

