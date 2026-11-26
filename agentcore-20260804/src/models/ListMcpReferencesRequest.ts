// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpReferencesRequest extends $dara.Model {
  /**
   * @remarks
   * 单页数量，1～100，默认 20。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 上一页返回的分页令牌。
   * 
   * @example
   * next-token-123
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

