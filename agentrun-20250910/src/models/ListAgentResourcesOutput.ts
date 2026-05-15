// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentResource } from "./AgentResource";


export class ListAgentResourcesOutput extends $dara.Model {
  /**
   * @remarks
   * 智能体资源的列表
   */
  items?: AgentResource[];
  /**
   * @remarks
   * 当前页码，从 1 开始计数
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页返回的记录数量
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 符合条件的资源总数
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
      items: { 'type': 'array', 'itemType': AgentResource },
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

