// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RateLimitRule } from "./RateLimitRule";


export class ListRateLimitRulesOutput extends $dara.Model {
  /**
   * @remarks
   * 限流规则列表
   */
  items?: RateLimitRule[];
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页记录数
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 符合条件的限流规则总数
   * 
   * @example
   * 10
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
      items: { 'type': 'array', 'itemType': RateLimitRule },
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

