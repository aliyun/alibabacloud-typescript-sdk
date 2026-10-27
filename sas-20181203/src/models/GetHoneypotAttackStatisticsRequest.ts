// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotAttackStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time in the timestamp format.
   * 
   * @example
   * 1675058931215
   */
  endTimeStamp?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query. Default value: 20. If this parameter is left empty, 20 entries are returned by default. Do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of risk levels.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * The IP address of the attack source.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.92.139.**
   */
  srcIp?: string;
  /**
   * @remarks
   * The start time in the timestamp format.
   * 
   * @example
   * 1681624877761
   */
  startTimeStamp?: number;
  /**
   * @remarks
   * The type of statistics for the attack source. Valid values:
   * 
   * - **TOP_ATTACKED_AGENT**: The top 5 probes that are attacked most frequently.
   * - **TOP_ATTACKED_IP**: The top 5 IP addresses that are attacked most frequently.
   * - **ATTACK_EVENT_TYPE**: The intrusion event type.
   * - **ATTACK_HONEYPOT_TYPE**: The type of the attacked honeypot.
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

