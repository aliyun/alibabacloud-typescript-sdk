// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpsNoticesResponseBodyOpsNotices extends $dara.Model {
  /**
   * @example
   * {"cveId":"CVE-2021-4034"}
   */
  attributes?: string;
  /**
   * @example
   * Security
   */
  category?: string;
  /**
   * @example
   * content
   */
  content?: string;
  /**
   * @example
   * notice-1749693290
   */
  noticeId?: string;
  /**
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  /**
   * @example
   * test
   */
  serviceName?: string;
  serviceVersions?: string[];
  /**
   * @example
   * High
   */
  severity?: string;
  /**
   * @example
   * You need to upgrade service instance
   */
  solutions?: string;
  /**
   * @example
   * 2022-10-12T02:03:37Z
   */
  startTime?: string;
  /**
   * @example
   * True
   */
  success?: string;
  /**
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
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  opsNotices?: ListOpsNoticesResponseBodyOpsNotices[];
  /**
   * @example
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
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

