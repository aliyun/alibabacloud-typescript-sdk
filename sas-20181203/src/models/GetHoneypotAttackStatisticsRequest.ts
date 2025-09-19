// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotAttackStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp.
   * 
   * @example
   * 1675058931215
   */
  endTimeStamp?: number;
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
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page. We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk levels.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.92.139.**
   */
  srcIp?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp.
   * 
   * @example
   * 1681624877761
   */
  startTimeStamp?: number;
  /**
   * @remarks
   * The type of the attack source statistics. Valid values:
   * 
   * *   **TOP_ATTACKED_AGENT**: the top 5 probes that are attacked the most frequently
   * *   **TOP_ATTACKED_IP**: the top 5 IP addresses that are attacked the most frequently
   * *   **ATTACK_EVENT_TYPE**: the type of the intrusion event
   * *   **ATTACK_HONEYPOT_TYPE**: the type of the attacked honeypot
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

