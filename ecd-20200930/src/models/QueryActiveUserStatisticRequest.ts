// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryActiveUserStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel type code. Valid values:
   * 
   * - 1 (default): Enterprise Edition.
   * - 3: Cloud Office.
   * - 10: Standard Edition.
   * - 20: Business Edition.
   * - 30: Education Business Edition.
   * - 40: Cloud Phone isolated resources.
   * - 50: AgentBay.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The end time of the query. The format is the same as StartTime. If the value is later than the current time, it is automatically truncated to the current time.
   * 
   * @example
   * 2020-12-01T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The workspace ID. If specified, only active users of cloud desktops in this workspace are counted.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The aggregation interval for statistics. Valid values:
   * 
   * - ONE_MINUTE: 1 minute.
   * - TWO_MINUTE: 2 minutes.
   * - FIVE_MINUTE (default): 5 minutes.
   * - ONE_HOUR: 1 hour.
   * - ONE_DAY: 1 day.
   * 
   * @example
   * FIVE_MINUTE
   */
  period?: string;
  /**
   * @remarks
   * The start time of the query. The following formats are supported:
   * 
   * - UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * - Standard format: yyyy-MM-dd HH:mm:ss.
   * 
   * The value cannot be earlier than 6 months before the current time or later than EndTime.
   * 
   * @example
   * 2020-11-30T06:32:31Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endTime: 'EndTime',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      endTime: 'string',
      officeSiteId: 'string',
      period: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

