// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotAlarmEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 10
   */
  currentPage?: number;
  /**
   * @remarks
   * The status of the alert event. Default value: **a**. Valid values:
   * 
   * *   **a**: all states
   * *   **y**: handled
   * *   **n**: unhandled
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.20.XX.XX
   */
  dstIp?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100. If you leave this parameter empty, 100 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty. We recommend that you set the value to a value no greater than 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk levels.
   */
  riskLevelList?: string[];
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 101.132.XX.XX
   */
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      dstIp: 'DstIp',
      pageSize: 'PageSize',
      riskLevelList: 'RiskLevelList',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      dstIp: 'string',
      pageSize: 'number',
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      srcIp: 'string',
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

