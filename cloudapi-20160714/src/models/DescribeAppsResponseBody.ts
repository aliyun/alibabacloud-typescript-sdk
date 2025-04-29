// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppsResponseBodyApps } from "./DescribeAppsResponseBodyApps";


export class DescribeAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned app information. It is an array consisting of AppItem data.
   */
  apps?: DescribeAppsResponseBodyApps;
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: DescribeAppsResponseBodyApps,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apps && typeof (this.apps as any).validate === 'function') {
      (this.apps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

