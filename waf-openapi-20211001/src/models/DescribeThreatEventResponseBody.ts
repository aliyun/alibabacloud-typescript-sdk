// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventResponseBodyThreatEvents extends $dara.Model {
  /**
   * @remarks
   * The percentage of blocked requests.
   * 
   * @example
   * 100%
   */
  blockRate?: string;
  /**
   * @remarks
   * The most recent Attack Time. The format is a UNIX timestamp in UTC. Unit: seconds.
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
   * The severity level of the event. Valid values:
   * 
   * - **critical**: critical.
   * - **high**: high.
   * - **medium**: medium.
   * - **low**: low.
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The Attack Source IP Addresses.
   * > A security event may involve multiple source IP addresses. This operation returns only one source IP address.
   * 
   * @example
   * 3.3.3.3
   */
  eventSrc?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * - **MultipleDomainDirscan**: folder and file scanning targeting multiple domain names.
   * - **SingleDomainDirscan**: folder and file scanning targeting a single domain name.
   * - **MultipleDomainWebscan**: web vulnerability scanning targeting multiple domain names.
   * - **SingleDomainWebscan**: web vulnerability scanning targeting a single domain name.
   * - **MultipleDomainWebattack**: web vulnerability attacks targeting multiple domain names.
   * - **SingleDomainWebattack**: web vulnerability attacks targeting a single domain name.
   * - **SingleURLWebattack**: web vulnerability attacks targeting a specific URL.
   * - **SingleURLSqlattack**: SQL injection attacks targeting a specific URL.
   * - **SingleURLXssattack**: XSS attacks targeting a specific URL.
   * - **WebshellUpload**: attempts to upload backdoor trojans.
   * - **RandomVulnTest**: random web vulnerability probing.
   * 
   * @example
   * Event_InternalLoginWeakPasswd
   */
  eventTag?: string;
  /**
   * @remarks
   * The protected object of the Attack Target.
   * > A security event may involve multiple protected objects targeted by the attack. This operation returns only one protected object.
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
   * The ID of the request.
   * 
   * @example
   * 98106632-6865-5600-A834-3D909***
   */
  requestId?: string;
  /**
   * @remarks
   * The list of noteworthy security events.
   */
  threatEvents?: DescribeThreatEventResponseBodyThreatEvents[];
  /**
   * @remarks
   * The total number of queried events.
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

