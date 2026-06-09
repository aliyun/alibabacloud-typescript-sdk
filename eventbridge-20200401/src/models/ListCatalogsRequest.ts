// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsRequest extends $dara.Model {
  /**
   * @remarks
   * 每页返回的最大数据条数。不传时默认 10，最大 100
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 分页查询的起始Token。首次查询不传或传 "0"；后续翻页使用上一次响应中返回的 NextToken 值
   * 
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

