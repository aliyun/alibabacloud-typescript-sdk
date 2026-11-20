// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventDetailResponseBodyThreatEventDetail extends $dara.Model {
  /**
   * @remarks
   * The most recent attack time. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1749916800000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of blocked attacks.
   * 
   * @example
   * 20
   */
  eventBlock?: string;
  /**
   * @remarks
   * The total number of attacks.
   * 
   * @example
   * 20
   */
  eventCnt?: string;
  /**
   * @remarks
   * The filter condition for the log query feature. The value is a string converted from a **JSON** structure constructed with a series of parameters.
   * 
   * @example
   * {"end_ts": 1766637714, "start_ts": 1764096746, "condition": {"real_client_ip": ["78.153.140.179", "78.153.140.203", "78.153.140.177", "78.153.140.178", "78.153.140.151"]}}
   */
  eventCondition?: string;
  /**
   * @remarks
   * The threat intelligence associated with the event. The value is a string converted from a **JSON** array.
   * 
   * @example
   * ["CVE-2020-14882","DDoS Attack"]
   */
  eventIntelligence?: string;
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
   * The attack source IP addresses.
   * > A security event may have multiple attack source IP addresses. This operation returns only one.
   * 
   * @example
   * XX.XX.XX.XX
   */
  eventSrc?: string;
  /**
   * @remarks
   * The country to which the attack source IP addresses belong.
   * 
   * @example
   * GB
   */
  eventSrcCountry?: string;
  /**
   * @remarks
   * The region to which the attack source IP addresses belong.
   * 
   * @example
   * GB-ENG
   */
  eventSrcRegion?: string;
  /**
   * @remarks
   * The security suggestion. Valid values:
   * 
   * - **ProtectInterface**: The Attack Target is suspected to be a backend management address. If the address has fixed access characteristics, configure custom rules in the access control module to restrict access.
   * - **BlockArea**: Monitor the source region of the attack. If the attack source differs from the normal regional distribution of your service, configure Location Blacklist or IP blacklist rules in the access control module to restrict access.
   * - **SwitchBlock**: The current rule protection is in alerting mode. To ensure service security, switch to block mode. Before switching, check for false positives.
   * - **FixBug**: Check whether the Attack Target has a security vulnerability. If the security vulnerability exists, fix it promptly to prevent exploitation by attackers.
   * - **SwitchStrict**: If normal service is not affected, adjust the policy of modules such as rule protection and scan protection to a stricter pattern. Before adjusting the policy, check for false positives.
   * - **ProtectFile**: Check whether sensitive files or paths exist under the target domain name to prevent detection and exploitation by attackers.
   * - **BlockIP**: The source IP address of the attack is highly malicious. Monitor the IP address. If normal service is not affected, block access from the malicious IP address by using an IP blacklist.
   * - **KeepConcerned**: No risks are detected. Continue to monitor the event.
   * 
   * @example
   * FixBug
   */
  eventSuggest?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * - **MultipleDomainDirscan**: directory and file scanning targeting multiple domain names
   * - **SingleDomainDirscan**: directory and file scanning targeting a single domain name
   * - **MultipleDomainWebscan**: web vulnerability scanning targeting multiple domain names
   * - **SingleDomainWebscan**: web vulnerability scanning targeting a single domain name
   * - **MultipleDomainWebattack**: web vulnerability attacks targeting multiple domain names
   * - **SingleDomainWebattack**: web vulnerability attacks targeting a single domain name
   * - **SingleURLWebattack**: web vulnerability attacks targeting a specific URL
   * - **SingleURLSqlattack**: SQL injection attacks targeting a specific URL
   * - **SingleURLXssattack**: XSS attacks targeting a specific URL
   * - **WebshellUpload**: attack behavior attempting to upload backdoor trojans
   * - **RandomVulnTest**: random web vulnerability detection behavior
   * 
   * @example
   * MultipleDomainWebattack
   */
  eventTag?: string;
  /**
   * @remarks
   * Indicates whether the attack event is a targeted persistent attack event. Valid values:
   * 
   * - **0**: non-persistent attack.
   * 
   * - **1**: persistent attack.
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
   * The ID of the request.
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

