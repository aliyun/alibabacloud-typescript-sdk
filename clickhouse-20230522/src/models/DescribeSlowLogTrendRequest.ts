// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogTrendRequest extends $dara.Model {
  computingGroupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd hh:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2023-06-07 10:03:00
   */
  endTime?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * clickhouse
   */
  product?: string;
  /**
   * @remarks
   * The execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  queryDurationMs?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the yyyy-MM-dd hh:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2023-04-13 17:48:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      product: 'Product',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingGroupId: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
      product: 'string',
      queryDurationMs: 'string',
      regionId: 'string',
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

