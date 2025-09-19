// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmgVulItemResponseBodyGroupedVulItems extends $dara.Model {
  /**
   * @remarks
   * The name of the urgent vulnerability.
   * 
   * @example
   * Changjietong T + SetupAccount/Upload.aspx file Upload vulnerability (CNVD-2022-60632)
   */
  aliasName?: string;
  /**
   * @remarks
   * The check method.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The introduction to the vulnerability.
   * 
   * @example
   * Chanjet T-Plus is an Internet business management software. There is an unauthorized access vulnerability in one of its interfaces disclosed on the Internet. Attackers can construct malicious requests to upload malicious files to execute arbitrary code and control the server.
   */
  description?: string;
  /**
   * @remarks
   * The timestamp when the urgent vulnerability was last detected. Unit: milliseconds.
   * 
   * @example
   * 1619286031000
   */
  gmtLastCheck?: number;
  /**
   * @remarks
   * The timestamp when the urgent vulnerability was last disclosed. Unit: milliseconds.
   * 
   * @example
   * 1618887687000
   */
  gmtPublish?: number;
  /**
   * @remarks
   * The name of the detection rule.
   * 
   * @example
   * scan:AVD-2021-179344
   */
  name?: string;
  /**
   * @remarks
   * The number of unhandled urgent vulnerabilities.
   * 
   * @example
   * 0
   */
  pendingCount?: number;
  /**
   * @remarks
   * The progress of the urgent vulnerability detection task. Valid values: 0 to 100.
   * 
   * >  This parameter is returned only when an urgent vulnerability is being detected.
   * 
   * @example
   * 50
   */
  progress?: number;
  /**
   * @remarks
   * Indicates whether the application protection feature is supported. Valid values:
   * *   **0**: no
   * *   **1**: yes
   * >  If this parameter is not returned, the application protection is not supported.
   * 
   * @example
   * 1
   */
  raspDefend?: number;
  /**
   * @remarks
   * The detection status of the urgent vulnerability. Valid values:
   * 
   * *   **10**: The urgent vulnerability is not detected.
   * *   **20**: The urgent vulnerability is being detected.
   * *   **30**: The urgent vulnerability detection is complete.
   * 
   * @example
   * 30
   */
  status?: number;
  /**
   * @remarks
   * The method that is used to detect the urgent vulnerability. Valid values:
   * 
   * *   **python**: The Version method is used. Security Center checks the software versions of your server to check whether disclosed vulnerabilities exist on your server.
   * *   **scan**: The Network Scan method is used. Security Center analyzes the access traffic to your server over the Internet to check whether vulnerabilities exist on your server.
   * 
   * @example
   * scan
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      checkType: 'CheckType',
      description: 'Description',
      gmtLastCheck: 'GmtLastCheck',
      gmtPublish: 'GmtPublish',
      name: 'Name',
      pendingCount: 'PendingCount',
      progress: 'Progress',
      raspDefend: 'RaspDefend',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      checkType: 'number',
      description: 'string',
      gmtLastCheck: 'number',
      gmtPublish: 'number',
      name: 'string',
      pendingCount: 'number',
      progress: 'number',
      raspDefend: 'number',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * An array that consists of the urgent vulnerabilities returned.
   */
  groupedVulItems?: DescribeEmgVulItemResponseBodyGroupedVulItems[];
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BC1868ED-A0E1-4D1C-BF7E-10DC0C34B3C3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the urgent vulnerabilities returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeEmgVulItemResponseBodyGroupedVulItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupedVulItems)) {
      $dara.Model.validateArray(this.groupedVulItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

