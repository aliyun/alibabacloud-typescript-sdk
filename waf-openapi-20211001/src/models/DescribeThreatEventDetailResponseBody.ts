// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventDetailResponseBodyThreatEventDetail extends $dara.Model {
  /**
   * @example
   * 1749916800000
   */
  endTime?: number;
  /**
   * @example
   * 20
   */
  eventBlock?: string;
  /**
   * @example
   * 20
   */
  eventCnt?: string;
  /**
   * @example
   * {"end_ts": 1766637714, "start_ts": 1764096746, "condition": {"real_client_ip": ["78.153.140.179", "78.153.140.203", "78.153.140.177", "78.153.140.178", "78.153.140.151"]}}
   */
  eventCondition?: string;
  /**
   * @example
   * ["CVE-2020-14882","DDoS Attack"]
   */
  eventIntelligence?: string;
  /**
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @example
   * XX.XX.XX.XX
   */
  eventSrc?: string;
  /**
   * @example
   * GB
   */
  eventSrcCountry?: string;
  /**
   * @example
   * GB-ENG
   */
  eventSrcRegion?: string;
  /**
   * @example
   * FixBug
   */
  eventSuggest?: string;
  /**
   * @example
   * MultipleDomainWebattack
   */
  eventTag?: string;
  /**
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
   * @example
   * D7861F61-5B61-46CE-A47C-6B1****
   */
  requestId?: string;
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

