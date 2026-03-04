// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeProductionsRequest extends $dara.Model {
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * Token
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

