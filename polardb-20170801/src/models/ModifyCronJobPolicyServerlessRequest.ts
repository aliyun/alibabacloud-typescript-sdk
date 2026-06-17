// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCronJobPolicyServerlessRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable No-activity Suspension. Valid values:
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
   * pc-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-12T15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * 8006e51c-dab3-4602-bc69-4f728002c6ce
   */
  jobId?: string;
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
   * The maximum number of PCUs. Valid values: 1 to 32.
   * 
   * @example
   * 12
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum number of PolarDB Capacity Units (PCUs). Valid values: 0.25 to 32. This value must be less than or equal to the value of ScaleMax.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The maximum number of read-only nodes for scaling. Valid values: 0 to 15.
   * 
   * @example
   * 4
   */
  scaleRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only nodes for scaling. Valid values: 0 to 15.
   * 
   * @example
   * 2
   */
  scaleRoNumMin?: string;
  /**
   * @remarks
   * The detection period for No-activity Suspension. Unit: minutes. Valid values: 5 to 1440. The value must be a multiple of 5.
   * 
   * @example
   * 10
   */
  secondsUntilAutoPause?: string;
  /**
   * @remarks
   * The CPU utilization threshold for a scale-up. Unit: percent. Valid values: 40 to 100.
   * 
   * @example
   * 80
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @remarks
   * The CPU utilization threshold for a scale-down. Unit: percent. Valid values: 10 to 100. The value of ServerlessRuleCpuEnlargeThreshold minus the value of this parameter must be greater than or equal to 30.
   * 
   * @example
   * 25
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @remarks
   * The scaling sensitivity. Valid values:
   * 
   * - normal
   * 
   * - flexible
   * 
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @remarks
   * The start time. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2020-09-23T01:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowShutDown: 'AllowShutDown',
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      jobId: 'JobId',
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
      jobId: 'string',
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

