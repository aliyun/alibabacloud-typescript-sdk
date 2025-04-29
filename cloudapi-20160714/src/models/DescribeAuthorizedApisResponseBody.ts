// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAuthorizedApisResponseBodyAuthorizedApis } from "./DescribeAuthorizedApisResponseBodyAuthorizedApis";


export class DescribeAuthorizedApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorized API set.
   */
  authorizedApis?: DescribeAuthorizedApisResponseBodyAuthorizedApis;
  /**
   * @remarks
   * The page number of the returned page.
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
      authorizedApis: 'AuthorizedApis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApis: DescribeAuthorizedApisResponseBodyAuthorizedApis,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.authorizedApis && typeof (this.authorizedApis as any).validate === 'function') {
      (this.authorizedApis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

