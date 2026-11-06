// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * 单页最大记录数，取值范围 1 至 100，默认 20。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 查询下一页时传入上一次 ListAgentVersions 响应返回的 nextToken；首次查询不传。
   * 
   * @example
   * YWdlbnQtdmVyc2lvbnM6MjA
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
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

