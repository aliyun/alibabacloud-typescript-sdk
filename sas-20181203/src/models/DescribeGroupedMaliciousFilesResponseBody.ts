// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1594907349000
   */
  firstScanTimestamp?: number;
  /**
   * @remarks
   * The number of affected images.
   * 
   * @example
   * 3
   */
  imageCount?: number;
  /**
   * @remarks
   * The timestamp generated when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1596533942000
   */
  latestScanTimestamp?: number;
  /**
   * @remarks
   * The severity of the malicious image sample. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The keyword of the malicious image sample.
   * 
   * @example
   * WEBSHELL_IMG
   */
  maliciousKey?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious image sample.
   * 
   * @example
   * d836968041f7683b5459****
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The name of the malicious image sample.
   * 
   * @example
   * testFile
   */
  maliciousName?: string;
  /**
   * @remarks
   * The handling status of the malicious image sample. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: handled
   * *   **2**: verifying
   * *   **3**: whitelisted
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      firstScanTimestamp: 'FirstScanTimestamp',
      imageCount: 'ImageCount',
      latestScanTimestamp: 'LatestScanTimestamp',
      level: 'Level',
      maliciousKey: 'MaliciousKey',
      maliciousMd5: 'MaliciousMd5',
      maliciousName: 'MaliciousName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstScanTimestamp: 'number',
      imageCount: 'number',
      latestScanTimestamp: 'number',
      level: 'string',
      maliciousKey: 'string',
      maliciousMd5: 'string',
      maliciousName: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
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

export class DescribeGroupedMaliciousFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the malicious image sample.
   */
  groupedMaliciousFileResponse?: DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeGroupedMaliciousFilesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8045E03E-6D91-4C53-9F22-5A1B84BB29D9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedMaliciousFileResponse: 'GroupedMaliciousFileResponse',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedMaliciousFileResponse: { 'type': 'array', 'itemType': DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse },
      pageInfo: DescribeGroupedMaliciousFilesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupedMaliciousFileResponse)) {
      $dara.Model.validateArray(this.groupedMaliciousFileResponse);
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

