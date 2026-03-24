// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventResponseBodyThreatEvents extends $dara.Model {
  /**
   * @remarks
   * The percentage of attack requests that were blocked by WAF.
   * 
   * @example
   * 100%
   */
  blockRate?: string;
  /**
   * @remarks
   * The time when the last attack occurred. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1768406400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the security event.
   * 
   * @example
   * f439994c8ab39f84eced33490f0c4388
   */
  eventId?: string;
  /**
   * @remarks
   * The severity level of the security event. Valid values:
   * 
   * - **critical**
   * 
   * - **high**
   * 
   * - **medium**
   * 
   * - **low**
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * > A security event may have multiple source IP addresses. This operation returns only one of them.
   * 
   * @example
   * 3.3.3.3
   */
  eventSrc?: string;
  /**
   * @remarks
   * The type of the security event. Valid values:
   * 
   * - **MultipleDomainDirscan**: a directory and file scan against multiple domain names.
   * 
   * - **SingleDomainDirscan**: a directory and file scan against a single domain name.
   * 
   * - **MultipleDomainWebscan**: a web vulnerability scan against multiple domain names.
   * 
   * - **SingleDomainWebscan**: a web vulnerability scan against a single domain name.
   * 
   * - **MultipleDomainWebattack**: a web vulnerability attack against multiple domain names.
   * 
   * - **SingleDomainWebattack**: a web vulnerability attack against a single domain name.
   * 
   * - **SingleURLWebattack**: a web vulnerability attack against a specific URL.
   * 
   * - **SingleURLSqlattack**: an SQL injection attack against a specific URL.
   * 
   * - **SingleURLXssattack**: an XSS attack against a specific URL.
   * 
   * - **WebshellUpload**: an attack that attempts to upload backdoor trojans.
   * 
   * - **RandomVulnTest**: a random web vulnerability probe.
   * 
   * @example
   * Event_InternalLoginWeakPasswd
   */
  eventTag?: string;
  /**
   * @remarks
   * The protected object that is the target of the attack.
   * 
   * > A security event may have multiple protected objects as targets. This operation returns only one of them.
   * 
   * @example
   * test.aliyundemo.com-waf
   */
  eventTarget?: string;
  static names(): { [key: string]: string } {
    return {
      blockRate: 'BlockRate',
      endTime: 'EndTime',
      eventId: 'EventId',
      eventLevel: 'EventLevel',
      eventSrc: 'EventSrc',
      eventTag: 'EventTag',
      eventTarget: 'EventTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRate: 'string',
      endTime: 'number',
      eventId: 'string',
      eventLevel: 'string',
      eventSrc: 'string',
      eventTag: 'string',
      eventTarget: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeThreatEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98106632-6865-5600-A834-3D909***
   */
  requestId?: string;
  /**
   * @remarks
   * The list of notable security events.
   */
  threatEvents?: DescribeThreatEventResponseBodyThreatEvents[];
  /**
   * @remarks
   * The total number of security events that match the query conditions.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      threatEvents: 'ThreatEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threatEvents: { 'type': 'array', 'itemType': DescribeThreatEventResponseBodyThreatEvents },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.threatEvents)) {
      $dara.Model.validateArray(this.threatEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

