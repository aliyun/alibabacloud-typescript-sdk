// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimilarSecurityEventsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 5
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
   * 5
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

export class DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse extends $dara.Model {
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * Trojan
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * *   Suspicious Process
   * *   Webshell
   * *   Unusual Logon
   * *   Malicious Software
   * *   Sensitive File Tampering
   * *   Unusual Network Connection
   * *   Other
   * *   Suspicious Account
   * *   Cloud threat detection
   * *   Precision defense
   * *   Application Whitelist
   * *   Persistence
   * *   Web Application Threat Detection
   * *   Malicious scripts
   * *   Malicious Network Activity
   * *   K8s Abnormal Behavior
   * *   Website backdoor (local engine)
   * *   Exploit
   * *   Image Scan
   * *   Trusted exception
   * 
   * For more information about alert types, see [Overview](https://help.aliyun.com/document_detail/68388.html).
   * 
   * @example
   * Malicious Software
   */
  eventType?: string;
  /**
   * @remarks
   * The timestamp generated when the alert event was last detected. Unit: milliseconds.
   * 
   * @example
   * 1648544361480
   */
  lastTime?: number;
  /**
   * @remarks
   * The timestamp generated when the alert event was first detected. Unit: milliseconds.
   * 
   * @example
   * 1648457961000
   */
  occurrenceTime?: number;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 158661
   */
  securityEventId?: number;
  /**
   * @remarks
   * The UUID of the server that was affected by the alert event.
   * 
   * @example
   * qweeqq-13232-daweq-w****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      lastTime: 'LastTime',
      occurrenceTime: 'OccurrenceTime',
      securityEventId: 'SecurityEventId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      lastTime: 'number',
      occurrenceTime: 'number',
      securityEventId: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeSimilarSecurityEventsResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9F4217C8-763F-51EF-84D4-5535E072B2D8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the alert events that are triggered by the same rule or of the same alert type.
   */
  securityEventsResponse?: DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      securityEventsResponse: 'SecurityEventsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeSimilarSecurityEventsResponseBodyPageInfo,
      requestId: 'string',
      securityEventsResponse: { 'type': 'array', 'itemType': DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.securityEventsResponse)) {
      $dara.Model.validateArray(this.securityEventsResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

