// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The probe IDs.
   */
  agentIdList?: string[];
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * 1259925
   */
  alarmEventId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   **y**: handled
   * *   **n**: unhandled
   * *   **a**: all statuses
   * 
   * @example
   * y
   */
  dealed?: string;
  /**
   * @remarks
   * The honeypot IDs.
   */
  honeypotIdList?: string[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the attacker profile.
   * 
   * @example
   * cd48604a-1694-4f03-ade0-ec6994c3*****
   */
  portraitId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F9CE167-58D5-5DA6-AA3B-923EED02****
   */
  requestId?: string;
  /**
   * @remarks
   * The risk levels.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 185.237.96.***
   */
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdList: 'AgentIdList',
      alarmEventId: 'AlarmEventId',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      honeypotIdList: 'HoneypotIdList',
      lang: 'Lang',
      pageSize: 'PageSize',
      portraitId: 'PortraitId',
      requestId: 'RequestId',
      riskLevelList: 'RiskLevelList',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdList: { 'type': 'array', 'itemType': 'string' },
      alarmEventId: 'number',
      currentPage: 'number',
      dealed: 'string',
      honeypotIdList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      pageSize: 'number',
      portraitId: 'string',
      requestId: 'string',
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      srcIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIdList)) {
      $dara.Model.validateArray(this.agentIdList);
    }
    if(Array.isArray(this.honeypotIdList)) {
      $dara.Model.validateArray(this.honeypotIdList);
    }
    if(Array.isArray(this.riskLevelList)) {
      $dara.Model.validateArray(this.riskLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

