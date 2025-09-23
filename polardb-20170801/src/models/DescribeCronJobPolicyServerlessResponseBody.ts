// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCronJobPolicyServerlessResponseBodyItems extends $dara.Model {
  /**
   * @example
   * ModifyDBClusterServerlessConf
   */
  action?: string;
  /**
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @example
   * 0 0 8 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @example
   * 2024-12-04T02:25:00Z
   */
  endTime?: string;
  /**
   * @example
   * 12eee3eb-60bd-40ac-a403-218e02eb99c7
   */
  jobId?: string;
  /**
   * @example
   * 254752088000354
   */
  orderId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2
   */
  scaleApRoNumMax?: string;
  /**
   * @example
   * 1
   */
  scaleApRoNumMin?: string;
  /**
   * @example
   * 9
   */
  scaleMax?: string;
  /**
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @example
   * 3
   */
  scaleRoNumMax?: string;
  /**
   * @example
   * 2
   */
  scaleRoNumMin?: string;
  /**
   * @example
   * 1200
   */
  secondsUntilAutoPause?: string;
  /**
   * @example
   * 70
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @example
   * 40
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @example
   * 2020-06-09T18:00:00Z
   */
  startTime?: string;
  /**
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
  items?: DescribeCronJobPolicyServerlessResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  /**
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

