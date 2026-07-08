// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventDetailResponseBodyThreatEventDetail extends $dara.Model {
  /**
   * @remarks
   * The time of the most recent attack. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1749916800000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of attacks that were blocked in the security event.
   * 
   * @example
   * 20
   */
  eventBlock?: string;
  /**
   * @remarks
   * The total number of attacks in the security event.
   * 
   * @example
   * 20
   */
  eventCnt?: string;
  /**
   * @remarks
   * The filter condition for viewing logs. The value is a JSON object in the string format.
   * 
   * @example
   * {"end_ts": 1766637714, "start_ts": 1764096746, "condition": {"real_client_ip": ["78.153.140.179", "78.153.140.203", "78.153.140.177", "78.153.140.178", "78.153.140.151"]}}
   */
  eventCondition?: string;
  /**
   * @remarks
   * The threat intelligence associated with the event. The value is a JSON array in the string format.
   * 
   * @example
   * ["CVE-2020-14882","DDoS Attack"]
   */
  eventIntelligence?: string;
  /**
   * @remarks
   * The severity level of the event. Valid values:
   * 
   * - **critical**: Critical severity.
   * 
   * - **high**: High severity.
   * 
   * - **medium**: Medium severity.
   * 
   * - **low**: Low severity.
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
   * XX.XX.XX.XX
   */
  eventSrc?: string;
  /**
   * @remarks
   * The country of the source IP address of the attack.
   * 
   * @example
   * GB
   */
  eventSrcCountry?: string;
  /**
   * @remarks
   * The region of the source IP address of the attack.
   * 
   * @example
   * GB-ENG
   */
  eventSrcRegion?: string;
  /**
   * @remarks
   * The security suggestion. Valid values:
   * 
   * - **ProtectInterface**: The attack target appears to be a backend management address. If the address has specific access patterns, configure custom rules in the access control module to restrict access.
   * 
   * - **BlockArea**: Monitor the attack source region. If the attack source region is different from your normal business regions, configure a location blacklist or an IP address blacklist in the access control module to restrict access.
   * 
   * - **SwitchBlock**: The current protection rule is in Alert mode. To ensure business security, switch to Block mode. Before you switch, check for false positives.
   * 
   * - **FixBug**: Check the attack target for security vulnerabilities. If any vulnerabilities exist, fix them promptly to prevent exploitation.
   * 
   * - **SwitchStrict**: If it does not affect your normal business, change the policies of modules, such as protection rules and scan protection, to a stricter mode. Before you change the policies, check for false positives.
   * 
   * - **ProtectFile**: Check the target domain name for sensitive files or paths to prevent them from being detected and exploited.
   * 
   * - **BlockIP**: The source IP address has a high degree of maliciousness. Keep monitoring it. If it does not affect your normal business, use an IP address blacklist to block access from the malicious IP address.
   * 
   * - **KeepConcerned**: No threats are found. Continue to monitor the situation.
   * 
   * @example
   * FixBug
   */
  eventSuggest?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * - **MultipleDomainDirscan**: A directory and file scan for multiple domain names.
   * 
   * - **SingleDomainDirscan**: A directory and file scan for a single domain name.
   * 
   * - **MultipleDomainWebscan**: A web vulnerability scan for multiple domain names.
   * 
   * - **SingleDomainWebscan**: A web vulnerability scan for a single domain name.
   * 
   * - **MultipleDomainWebattack**: A web vulnerability attack on multiple domain names.
   * 
   * - **SingleDomainWebattack**: A web vulnerability attack on a single domain name.
   * 
   * - **SingleURLWebattack**: A web vulnerability attack on a specific URL.
   * 
   * - **SingleURLSqlattack**: An SQL injection attack on a specific URL.
   * 
   * - **SingleURLXssattack**: A cross-site scripting (XSS) attack on a specific URL.
   * 
   * - **WebshellUpload**: An attempt to upload backdoor trojans.
   * 
   * - **RandomVulnTest**: A random web vulnerability probe.
   * 
   * @example
   * MultipleDomainWebattack
   */
  eventTag?: string;
  /**
   * @remarks
   * Indicates whether the event is a persistent attack. Valid values:
   * 
   * - **0**: The event is not a persistent attack.
   * 
   * - **1**: The event is a persistent attack.
   * 
   * @example
   * 1
   */
  isPersistent?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventBlock: 'EventBlock',
      eventCnt: 'EventCnt',
      eventCondition: 'EventCondition',
      eventIntelligence: 'EventIntelligence',
      eventLevel: 'EventLevel',
      eventSrc: 'EventSrc',
      eventSrcCountry: 'EventSrcCountry',
      eventSrcRegion: 'EventSrcRegion',
      eventSuggest: 'EventSuggest',
      eventTag: 'EventTag',
      isPersistent: 'IsPersistent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      eventBlock: 'string',
      eventCnt: 'string',
      eventCondition: 'string',
      eventIntelligence: 'string',
      eventLevel: 'string',
      eventSrc: 'string',
      eventSrcCountry: 'string',
      eventSrcRegion: 'string',
      eventSuggest: 'string',
      eventTag: 'string',
      isPersistent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeThreatEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B1****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the security event.
   */
  threatEventDetail?: DescribeThreatEventDetailResponseBodyThreatEventDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      threatEventDetail: 'ThreatEventDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threatEventDetail: DescribeThreatEventDetailResponseBodyThreatEventDetail,
    };
  }

  validate() {
    if(this.threatEventDetail && typeof (this.threatEventDetail as any).validate === 'function') {
      (this.threatEventDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

