// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllEndEntityInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  list?: { [key: string]: any }[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 443C05A8-6C16-52B5-BB97-5D8798F7A49A
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      maxResults: 'number',
      nextToken: 'string',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
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

