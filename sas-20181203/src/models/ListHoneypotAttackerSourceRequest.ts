// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotAttackerSourceRequest extends $dara.Model {
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
   * The end of the time range to query. This value is a timestamp.
   * 
   * @example
   * 1676945366221
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
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * An array that consists of risk levels.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * The source IP address of the attack.
   * 
   * @example
   * 175.136.230.***
   */
  srcIp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a timestamp.
   * 
   * @example
   * 1674007632124
   */
  startTimeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTimeStamp: 'EndTimeStamp',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevelList: 'RiskLevelList',
      srcIp: 'SrcIp',
      startTimeStamp: 'StartTimeStamp',
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

