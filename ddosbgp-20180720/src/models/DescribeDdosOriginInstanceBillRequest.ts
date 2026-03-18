// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosOriginInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp. Unit: milliseconds. The time span between StartTime and EndTime cannot exceed 30 days.
   * 
   * @example
   * 1711382399410
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether to display the bill details. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isShowList?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1711209600410
   */
  startTime?: number;
  /**
   * @remarks
   * The bill type. Valid values:
   * 
   * *   **flow_cn**: the bill for the clean bandwidth of elastic IP addresses (EIPs) with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * *   **flow_ov**: the bill for the clean bandwidth of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * *   **standard_assets_flow_cn**: the bill for the clean bandwidth of regular Alibaba Cloud services in the Chinese mainland.
   * *   **standard_assets_flow_ov**: the bill for the clean bandwidth of regular Alibaba Cloud services outside the Chinese mainland.
   * *   **function**: the bill for the basic fee.
   * *   **ip_count**: the bill for protected IP addresses.
   * *   **monthly_summary**: the monthly summary bill.
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

