// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcludeSystemPathResponseBodyExcludePaths extends $dara.Model {
  /**
   * @remarks
   * The operating system of the server. Valid values:
   * - **linux**: Linux.
   * - **windows**: Windows.
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * @example
   * /bin/
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      os: 'Os',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      os: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of system excluded directories on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in the paged query when paging is used.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of system excluded folders returned per page in the paged query when paging is used.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of system excluded directories.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of system excluded directories.
   */
  excludePaths?: DescribeExcludeSystemPathResponseBodyExcludePaths[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeExcludeSystemPathResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * FBBEB173-1F43-505F-A876-C03ECDF6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': DescribeExcludeSystemPathResponseBodyExcludePaths },
      pageInfo: DescribeExcludeSystemPathResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludePaths)) {
      $dara.Model.validateArray(this.excludePaths);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

