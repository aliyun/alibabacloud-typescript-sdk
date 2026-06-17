// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCronJobPolicyServerlessResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * A system parameter. Set the value to **ModifyDBClusterServerlessConf**.
   * 
   * @example
   * ModifyDBClusterServerlessConf
   */
  action?: string;
  /**
   * @remarks
   * Specifies whether to enable No-activity Suspension. Valid values:
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled (default)
   * 
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * The Cron expression for the scheduled task.
   * 
   * @example
   * 0 0 8 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the task. The time is in the yyyy-MM-ddTHH:mm:ssZ format and in UTC.
   * 
   * @example
   * 2024-12-04T02:25:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * 12eee3eb-60bd-40ac-a403-218e02eb99c7
   */
  jobId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 254752088000354
   */
  orderId?: string;
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
   * The maximum number of read-only IMCI nodes. Valid values: 1 to 15.
   * 
   * @example
   * 2
   */
  scaleApRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only IMCI nodes. Valid values: 0 to 15.
   * 
   * @example
   * 1
   */
  scaleApRoNumMin?: string;
  /**
   * @remarks
   * The maximum capacity. The value must be from 1 to 32. Unit: PCU.
   * 
   * @example
   * 9
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum capacity. The value must be from 0.25 to 32 and less than or equal to the maximum capacity. Unit: PolarDB Capacity Unit (PCU).
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The maximum number of read-only nodes. The value must be greater than or equal to the minimum value. Valid values: 0 to 15.
   * 
   * @example
   * 3
   */
  scaleRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only nodes. Valid values: 0 to 15.
   * 
   * @example
   * 2
   */
  scaleRoNumMin?: string;
  /**
   * @remarks
   * The detection period for No-activity Suspension. The value must be a multiple of 5. Valid values: 5 to 1440. Unit: minutes.
   * 
   * @example
   * 1200
   */
  secondsUntilAutoPause?: string;
  /**
   * @remarks
   * The CPU utilization threshold for scaling up. Valid values: 40 to 100. Unit: %.
   * 
   * @example
   * 70
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @remarks
   * The CPU utilization threshold for scaling down. Valid values: 10 to 100. Unit: %. The difference between the scale-up threshold and the scale-down threshold must be 30 or greater.
   * 
   * @example
   * 40
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @remarks
   * The elasticity sensitivity. Valid values:
   * 
   * - normal: standard
   * 
   * - flexible: sensitive
   * 
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @remarks
   * The start time of the task. The time is in the `yyyy-MM-ddTHH:mmZ` format and in UTC.
   * 
   * @example
   * 2020-06-09T18:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - **working**: The scheduled task is running.
   * 
   * - **finish**: The scheduled task is complete.
   * 
   * @example
   * 3
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      allowShutDown: 'AllowShutDown',
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      jobId: 'JobId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      scaleApRoNumMax: 'ScaleApRoNumMax',
      scaleApRoNumMin: 'ScaleApRoNumMin',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
      secondsUntilAutoPause: 'SecondsUntilAutoPause',
      serverlessRuleCpuEnlargeThreshold: 'ServerlessRuleCpuEnlargeThreshold',
      serverlessRuleCpuShrinkThreshold: 'ServerlessRuleCpuShrinkThreshold',
      serverlessRuleMode: 'ServerlessRuleMode',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      allowShutDown: 'string',
      cronExpression: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      jobId: 'string',
      orderId: 'string',
      regionId: 'string',
      scaleApRoNumMax: 'string',
      scaleApRoNumMin: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
      secondsUntilAutoPause: 'string',
      serverlessRuleCpuEnlargeThreshold: 'string',
      serverlessRuleCpuShrinkThreshold: 'string',
      serverlessRuleMode: 'string',
      startTime: 'string',
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

export class DescribeCronJobPolicyServerlessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of tasks.
   */
  items?: DescribeCronJobPolicyServerlessResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCronJobPolicyServerlessResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

