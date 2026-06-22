// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockFileChangeStatisticsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The number of attempts.
   * 
   * @example
   * 33
   */
  count?: number;
  /**
   * @remarks
   * The path of the file.
   * 
   * @example
   * /tmp
   */
  file?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      file: 'File',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      file: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockFileChangeStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of web tamper-proofing events.
   */
  list?: DescribeWebLockFileChangeStatisticsResponseBodyList[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 709A8C3D-A543-5B79-AB75-361B206F71D9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of web tamper-proofing events.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeWebLockFileChangeStatisticsResponseBodyList },
      pageSize: 'number',
      requestId: 'string',
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

