// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tool } from "./Tool";


export class ListToolsOutputV2 extends $dara.Model {
  /**
   * @remarks
   * 当前页的工具详细信息列表
   */
  items?: Tool[];
  /**
   * @remarks
   * 当前页码，从 1 开始
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页返回的工具数量
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 符合条件的工具总数
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Tool },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

