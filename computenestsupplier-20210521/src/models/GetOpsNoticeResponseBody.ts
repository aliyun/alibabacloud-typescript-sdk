// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpsNoticeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The non-public properties of the O\\&M item.
   * 
   * @example
   * {\\"cveId\\":\\"CVE-2021-4034\\"}
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
   * - Recovery: backup and recovery
   * 
   * - Security
   * 
   * @example
   * Availability
   */
  category?: string;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * message
   */
  content?: string;
  /**
   * @remarks
   * The ID of the notice.
   * 
   * @example
   * notice-2338d3835bxxxxx
   */
  noticeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B3AD3CC-E938-5042-A771-7FD9A2FE03F3
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c2d118c9193e49xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The number of service instances involved.
   * 
   * @example
   * 2
   */
  serviceInstanceCount?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * WordPress Community Edition
   */
  serviceName?: string;
  /**
   * @remarks
   * The list of published service versions.
   */
  serviceVersions?: string[];
  /**
   * @remarks
   * The severity of the O\\&M item. Valid values:
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
   * Critical
   */
  severity?: string;
  /**
   * @remarks
   * The solutions.
   * 
   * @example
   * Solutions
   */
  solutions?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2024-11-18T02:05:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. A value of **true** indicates success.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The type of the notice. Valid values:
   * 
   * - ServiceInstanceUpgrade: upgrade
   * 
   * - VulnerabilityFix: vulnerability
   * 
   * @example
   * ServiceInstanceUpgrade
   */
  type?: string;
  /**
   * @remarks
   * The number of users who received the notice.
   * 
   * @example
   * 1
   */
  userCount?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      content: 'Content',
      noticeId: 'NoticeId',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceInstanceCount: 'ServiceInstanceCount',
      serviceName: 'ServiceName',
      serviceVersions: 'ServiceVersions',
      severity: 'Severity',
      solutions: 'Solutions',
      startTime: 'StartTime',
      success: 'Success',
      type: 'Type',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      category: 'string',
      content: 'string',
      noticeId: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceInstanceCount: 'string',
      serviceName: 'string',
      serviceVersions: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: 'string',
      startTime: 'string',
      success: 'string',
      type: 'string',
      userCount: 'string',
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

