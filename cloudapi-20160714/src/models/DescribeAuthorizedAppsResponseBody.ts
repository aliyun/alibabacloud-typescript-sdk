// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAuthorizedAppsResponseBodyAuthorizedApps } from "./DescribeAuthorizedAppsResponseBodyAuthorizedApps";


export class DescribeAuthorizedAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorized applications.
   */
  authorizedApps?: DescribeAuthorizedAppsResponseBodyAuthorizedApps;
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
      authorizedApps: 'AuthorizedApps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApps: DescribeAuthorizedAppsResponseBodyAuthorizedApps,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.authorizedApps && typeof (this.authorizedApps as any).validate === 'function') {
      (this.authorizedApps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

