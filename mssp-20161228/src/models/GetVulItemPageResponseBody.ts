// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulItemPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Vulnerability alias.
   * 
   * @example
   * RHSA-2024:4620: libndp 安全更新
   */
  aliasName?: string;
  /**
   * @remarks
   * Number of high-priority vulnerabilities to be fixed.
   * 
   * @example
   * 74
   */
  asapCount?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 1940494487193744
   */
  customerId?: string;
  /**
   * @remarks
   * Prefix for the CVE remediation advice URL.
   * 
   * @example
   * https://avd.aliyun.com/detail/
   */
  cveUrlPrefix?: string;
  /**
   * @remarks
   * Processing status.
   * 
   * @example
   * y
   */
  dealed?: string;
  /**
   * @remarks
   * Timestamp of the last discovery of the vulnerability.
   * 
   * @example
   * 2023-04-23 14:47:34
   */
  findTime?: string;
  /**
   * @remarks
   * Number of processed vulnerabilities.
   * 
   * @example
   * 20
   */
  handledCount?: number;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 353845
   */
  id?: number;
  /**
   * @remarks
   * Number of medium-priority vulnerabilities to be fixed.
   * 
   * @example
   * 10
   */
  laterCount?: number;
  /**
   * @remarks
   * Risk level
   * 
   * @example
   * later
   */
  level?: string;
  /**
   * @remarks
   * Vulnerability name.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20205002
   */
  name?: string;
  /**
   * @remarks
   * Number of low-priority vulnerabilities to be fixed.
   * 
   * @example
   * 8
   */
  nntfCount?: number;
  /**
   * @remarks
   * CVE number.
   * 
   * @example
   * CVE-2019-20907
   */
  related?: string;
  /**
   * @remarks
   * Number of related CVE numbers.
   * 
   * @example
   * 20
   */
  relatedCveCount?: number;
  /**
   * @remarks
   * Vulnerability type.
   * 
   * @example
   * sca
   */
  scanType?: string;
  /**
   * @remarks
   * Tags.
   * 
   * @example
   * Elevation of Privilege
   */
  tags?: string;
  /**
   * @remarks
   * Total number of fixed vulnerabilities.
   * 
   * @example
   * 50
   */
  totalFixCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      customerId: 'CustomerId',
      cveUrlPrefix: 'CveUrlPrefix',
      dealed: 'Dealed',
      findTime: 'FindTime',
      handledCount: 'HandledCount',
      id: 'Id',
      laterCount: 'LaterCount',
      level: 'Level',
      name: 'Name',
      nntfCount: 'NntfCount',
      related: 'Related',
      relatedCveCount: 'RelatedCveCount',
      scanType: 'ScanType',
      tags: 'Tags',
      totalFixCount: 'TotalFixCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      customerId: 'string',
      cveUrlPrefix: 'string',
      dealed: 'string',
      findTime: 'string',
      handledCount: 'number',
      id: 'number',
      laterCount: 'number',
      level: 'string',
      name: 'string',
      nntfCount: 'number',
      related: 'string',
      relatedCveCount: 'number',
      scanType: 'string',
      tags: 'string',
      totalFixCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulItemPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number for pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items to display per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records in the query result.
   * 
   * @example
   * 163
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetVulItemPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data returned by the interface.
   */
  data?: GetVulItemPageResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetVulItemPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request response.
   * 
   * This parameter is required.
   * 
   * @example
   * 02F8BBF3-2D61-5982-8911-EEB387BE3AF8
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful.
   * true: Call succeeded. false: Call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetVulItemPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetVulItemPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

