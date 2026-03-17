// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotAttackStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Set the page number from which to start displaying the query results. The starting value is **1**. The default value is **1**, indicating that the display starts from the **1st** page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * End time, in timestamp format.
   * 
   * @example
   * 1675058931215
   */
  endTimeStamp?: number;
  /**
   * @remarks
   * Sets the language type for requests and received messages, default is **zh**. Values:
   * - **zh**: Chinese 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies the maximum number of data entries displayed per page for paginated queries. The default number of entries displayed per page is 20. If the pagesize parameter is empty, 20 entries will be returned by default. It is recommended that the pagesize value should not be empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of risk levels
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * Attacker\\"s IP
   * 
   * This parameter is required.
   * 
   * @example
   * 47.92.139.**
   */
  srcIp?: string;
  /**
   * @remarks
   * Start time, in timestamp format.
   * 
   * @example
   * 1681624877761
   */
  startTimeStamp?: number;
  /**
   * @remarks
   * The type of attack source statistics. Values:
   * - **TOP_ATTACKED_AGENT**: Top 5 most attacked probes. 
   * - **TOP_ATTACKED_IP**: Top 5 most attacked IP addresses.
   *  - **ATTACK_EVENT_TYPE**: Type of intrusion event. 
   * - **ATTACK_HONEYPOT_TYPE**: Type of compromised honeypot.
   * 
   * This parameter is required.
   * 
   * @example
   * TOP_ATTACKED_IP
   */
  statisticsType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTimeStamp: 'EndTimeStamp',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevelList: 'RiskLevelList',
      srcIp: 'SrcIp',
      startTimeStamp: 'StartTimeStamp',
      statisticsType: 'StatisticsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTimeStamp: 'number',
      lang: 'string',
      pageSize: 'number',
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      srcIp: 'string',
      startTimeStamp: 'number',
      statisticsType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskLevelList)) {
      $dara.Model.validateArray(this.riskLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

