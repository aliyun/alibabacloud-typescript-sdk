// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiGroupsResponseBodyApiGroupAttributes } from "./DescribeApiGroupsResponseBodyApiGroupAttributes";


export class DescribeApiGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned group set.
   */
  apiGroupAttributes?: DescribeApiGroupsResponseBodyApiGroupAttributes;
  /**
   * @remarks
   * The number of pages to return the results on.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6E46F10-F26C-4AA0-BB69-FE2743D9AE62
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiGroupAttributes: 'ApiGroupAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupAttributes: DescribeApiGroupsResponseBodyApiGroupAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiGroupAttributes && typeof (this.apiGroupAttributes as any).validate === 'function') {
      (this.apiGroupAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

