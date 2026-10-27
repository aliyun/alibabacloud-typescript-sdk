// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryActiveUserStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel type code. Valid values:
   * 
   * - 1: Enterprise Edition. This is the default value.
   * - 3: Cloud Office.
   * - 10: Standard Edition.
   * - 20: Business Edition.
   * - 30: Education Business Edition.
   * - 40: Cloud phone isolated resources.
   * - 50: AgentBay.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The end time of the query. The format is the same as that of StartTime. If the specified time is later than the current time, it is automatically truncated to the current time.
   * 
   * @example
   * 2020-12-01T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The workspace ID. If specified, only active users of desktops in this workspace are counted.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The aggregation granularity of the statistics. Valid values:
   * 
   * - ONE_MINUTE: 1 minute.
   * - TWO_MINUTE: 2 minutes.
   * - FIVE_MINUTE: 5 minutes. This is the default value.
   * - ONE_HOUR: 1 hour.
   * - ONE_DAY: 1 day.
   * 
   * @example
   * FIVE_MINUTE
   */
  period?: string;
  /**
   * @remarks
   * The start time of the query. Two formats are supported:
   * 
   * - UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * - Standard format: yyyy-MM-dd HH:mm:ss.
   * 
   * The start time cannot be earlier than six months ago or later than the end time.
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

