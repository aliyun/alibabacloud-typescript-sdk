// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine extends $dara.Model {
  /**
   * @remarks
   * The code of the parent line. No value is returned if no parent line exists.
   * 
   * @example
   * telecom
   */
  fatherCode?: string;
  /**
   * @remarks
   * The group number of the DNS request source.
   * 
   * @example
   * ISP
   */
  groupCode?: string;
  /**
   * @remarks
   * The group name of the DNS request source.
   * 
   * @example
   * Mainland China
   */
  groupName?: string;
  /**
   * @remarks
   * The code of the DNS request source.
   * 
   * @example
   * cn_telecom_hubei
   */
  lineCode?: string;
  /**
   * @remarks
   * The name of the DNS request source.
   * 
   * @example
   * South China
   */
  lineName?: string;
  /**
   * @remarks
   * The state of the line. Valid values:
   * 
   * *   **FORBIDDEN**: The line is unavailable.
   * *   **OPTIONAL**: The line is available.
   * 
   * @example
   * FORBIDDEN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

