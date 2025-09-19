// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotEventTrendRequest extends $dara.Model {
  /**
   * @remarks
   * End time, timestamp format.
   * 
   * @example
   * 1687831329169
   */
  endTimeStamp?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The risk levels of the alert events.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.91.254.***
   */
  srcIp?: string;
  /**
   * @remarks
   * Start time, timestamp format.
   * 
   * @example
   * 1683516557757
   */
  startTimeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimeStamp: 'EndTimeStamp',
      lang: 'Lang',
      riskLevelList: 'RiskLevelList',
      srcIp: 'SrcIp',
      startTimeStamp: 'StartTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeStamp: 'number',
      lang: 'string',
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      srcIp: 'string',
      startTimeStamp: 'number',
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

