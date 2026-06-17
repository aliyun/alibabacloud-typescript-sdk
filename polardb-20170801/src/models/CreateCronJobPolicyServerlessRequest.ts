// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCronJobPolicyServerlessRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable no-activity suspension. Valid values:
   * 
   * - **true**: Enables the feature.
   * 
   * - **false** (default): Disables the feature.
   * 
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * The Cron expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 0 13 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the task. Use the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-23T01:01:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of read-only column store nodes. Valid values: 0 to 15.
   * 
   * @example
   * 1
   */
  scaleApRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only column store nodes. Valid values: 0 to 15.
   * 
   * @example
   * 1
   */
  scaleApRoNumMin?: string;
  /**
   * @remarks
   * The maximum number of PCUs. The value must be from 1 to 32.
   * 
   * @example
   * 3
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum number of PolarDB Capacity Units (PCUs). The value must be from 0.25 to 32 and must be less than or equal to the value of ScaleMax.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The maximum number of read-only nodes. Valid values: 0 to 15. The value must be greater than or equal to the value of ScaleRoNumMin.
   * 
   * @example
   * 4
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
   * The period of inactivity in minutes before the cluster is automatically paused. The value must be a multiple of 5 and range from 5 to 1440.
   * 
   * @example
   * 10
   */
  secondsUntilAutoPause?: string;
  /**
   * @remarks
   * The CPU utilization percentage that triggers a scale-up. Valid values: 40 to 100.
   * 
   * @example
   * 60
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @remarks
   * The CPU utilization percentage that triggers a scale-down. Valid values: 10 to 100. The value of ServerlessRuleCpuEnlargeThreshold minus the value of this parameter must be 30 or greater.
   * 
   * @example
   * 30
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @remarks
   * The scaling sensitivity. Valid values:
   * 
   * - normal: standard
   * 
   * - flexible: flexible
   * 
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @remarks
   * The start time of the task. Use the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2020-11-14T00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowShutDown: 'AllowShutDown',
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowShutDown: 'string',
      cronExpression: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

