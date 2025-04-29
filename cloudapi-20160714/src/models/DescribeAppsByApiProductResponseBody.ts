// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppsByApiProductResponseBodyAuthorizedApps } from "./DescribeAppsByApiProductResponseBodyAuthorizedApps";


export class DescribeAppsByApiProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about authorized applications.
   */
  authorizedApps?: DescribeAppsByApiProductResponseBodyAuthorizedApps;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC866798-62D3-52F4-8AB5-CA149A53984F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 4
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
      authorizedApps: DescribeAppsByApiProductResponseBodyAuthorizedApps,
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

