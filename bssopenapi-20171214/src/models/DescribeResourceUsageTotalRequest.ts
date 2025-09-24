// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceUsageTotalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account whose data you want to query. If you do not specify this parameter, the data of the current account and its linked accounts is queried. To query the data of a linked account, specify the ID of the linked account. You can specify only one account ID.
   * 
   * @example
   * 123745698925000
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format. The specified time is excluded from the time range. If you do not specify this parameter, this parameter is set to the current time.
   * 
   * @example
   * 2021-01-02 00:00:00
   */
  endPeriod?: string;
  /**
   * @remarks
   * The time granularity at which the data is queried. Valid values: MONTH, DAY, and HOUR.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  /**
   * @remarks
   * The type of the resource plan. Valid values: RI and SCU.
   * 
   * This parameter is required.
   * 
   * @example
   * RI
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format. The specified time is included in the time range.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-01-01 00:00:00
   */
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

