// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotAttackStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Minimum value: **1**. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time in timestamp format.
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
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned by default. > Specify a value for the paging parameter.
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
   * The start time in timestamp format.
   * 
   * @example
   * 1681624877761
   */
  startTimeStamp?: number;
  /**
   * @remarks
   * The type of attack source statistics information. Valid values:
   * 
   * - **TOP_ATTACKED_AGENT**: the top 5 probes by number of attacks.
   * - **TOP_ATTACKED_IP**: the top 5 IP addresses by number of attacks.
   * - **ATTACK_EVENT_TYPE**: the intrusion event type.
   * - **ATTACK_HONEYPOT_TYPE**: the type of the compromised honeypot.
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

