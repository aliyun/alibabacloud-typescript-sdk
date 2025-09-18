// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpsNoticeResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"cveId\\":\\"CVE-2021-4034\\"}
   */
  attributes?: string;
  /**
   * @example
   * Availability
   */
  category?: string;
  /**
   * @example
   * message
   */
  content?: string;
  /**
   * @example
   * notice-2338d3835bxxxxx
   */
  noticeId?: string;
  /**
   * @example
   * 1B3AD3CC-E938-5042-A771-7FD9A2FE03F3
   */
  requestId?: string;
  /**
   * @example
   * service-c2d118c9193e49xxxxxx
   */
  serviceId?: string;
  /**
   * @example
   * 2
   */
  serviceInstanceCount?: string;
  serviceName?: string;
  serviceVersions?: string[];
  /**
   * @example
   * Critical
   */
  severity?: string;
  /**
   * @example
   * Solutions
   */
  solutions?: string;
  /**
   * @example
   * 2024-11-18T02:05:00Z
   */
  startTime?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * ServiceInstanceUpgrade
   */
  type?: string;
  /**
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

