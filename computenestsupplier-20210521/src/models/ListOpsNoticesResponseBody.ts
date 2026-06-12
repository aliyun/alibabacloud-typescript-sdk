// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpsNoticesResponseBodyOpsNotices extends $dara.Model {
  /**
   * @remarks
   * The O\\&M item properties.
   * 
   * @example
   * {"cveId":"CVE-2021-4034"}
   */
  attributes?: string;
  /**
   * @remarks
   * The category. Valid values:
   * 
   * - Availability
   * 
   * - Cost
   * 
   * - Performance
   * 
   * - Recovery
   * 
   * - Security
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * content
   */
  content?: string;
  /**
   * @remarks
   * The O\\&M notice ID.
   * 
   * @example
   * notice-1749693290
   */
  noticeId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * test
   */
  serviceName?: string;
  /**
   * @remarks
   * The service versions.
   */
  serviceVersions?: string[];
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * - Critical
   * 
   * - High
   * 
   * - Medium
   * 
   * - Low
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The solution.
   * 
   * @example
   * You need to upgrade service instance
   */
  solutions?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2022-10-12T02:03:37Z
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * - ServiceInstanceUpgrade: upgrade
   * 
   * - VulnerabilityFix: vulnerability
   * 
   * @example
   * Vulnerability
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      content: 'Content',
      noticeId: 'NoticeId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceVersions: 'ServiceVersions',
      severity: 'Severity',
      solutions: 'Solutions',
      startTime: 'StartTime',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      category: 'string',
      content: 'string',
      noticeId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceVersions: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: 'string',
      startTime: 'string',
      success: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceVersions)) {
      $dara.Model.validateArray(this.serviceVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsNoticesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next page of results. If this parameter is not returned, all results have been returned.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The O\\&M notices.
   */
  opsNotices?: ListOpsNoticesResponseBodyOpsNotices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      opsNotices: 'OpsNotices',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      opsNotices: { 'type': 'array', 'itemType': ListOpsNoticesResponseBodyOpsNotices },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opsNotices)) {
      $dara.Model.validateArray(this.opsNotices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

