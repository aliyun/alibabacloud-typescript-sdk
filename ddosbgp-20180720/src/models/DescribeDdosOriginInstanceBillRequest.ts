// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosOriginInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The end timestamp of the query. Unit: milliseconds. The time span cannot exceed 30 days.
   * 
   * @example
   * 1711382399410
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether to display billing details. Valid values:
   * - **true**: Displays billing information.
   * - **false**: Displays only global instance information without billing details.
   * 
   * @example
   * false
   */
  isShowList?: boolean;
  /**
   * @remarks
   * The start timestamp of the query. Unit: milliseconds.
   * 
   * @example
   * 1711209600410
   */
  startTime?: number;
  /**
   * @remarks
   * The bill type. Valid values:
   * - **flow_cn**: clean traffic bill for EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * - **flow_ov**: clean traffic bill for EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * - **standard_assets_flow_cn**: clean traffic bill for Regular Alibaba Cloud services in the Chinese mainland.
   * - **standard_assets_flow_ov**: clean traffic bill for Regular Alibaba Cloud services outside the Chinese mainland.
   * - **function**: feature activation bill.
   * - **ip_count**: protected IP address count bill.
   * - **monthly_summary**: monthly summary bill.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isShowList: 'IsShowList',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      isShowList: 'boolean',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

