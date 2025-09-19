// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulAutoRepairConfigResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
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
   * The number of entries returned per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 11
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

export class ListVulAutoRepairConfigResponseBodyVulAutoRepairConfigList extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)
   */
  aliasName?: string;
  /**
   * @remarks
   * The configuration ID of the vulnerability.
   * 
   * @example
   * 37338
   */
  id?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * anolisos:8.4:ANSA-2022:0001
   */
  name?: string;
  /**
   * @remarks
   * The reason why the vulnerability can be automatically fixed.
   * 
   * @example
   * The vulnerability fix is risk-free and can be configured to automate the fix.
   */
  reason?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      id: 'number',
      name: 'string',
      reason: 'string',
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

export class ListVulAutoRepairConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListVulAutoRepairConfigResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3B3F3A90-46A5-4023-A2D8-D68B14262F96
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * An array consisting of the existing configurations of vulnerabilities that can be automatically fixed.
   */
  vulAutoRepairConfigList?: ListVulAutoRepairConfigResponseBodyVulAutoRepairConfigList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
      vulAutoRepairConfigList: 'VulAutoRepairConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: ListVulAutoRepairConfigResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      vulAutoRepairConfigList: { 'type': 'array', 'itemType': ListVulAutoRepairConfigResponseBodyVulAutoRepairConfigList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.vulAutoRepairConfigList)) {
      $dara.Model.validateArray(this.vulAutoRepairConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

