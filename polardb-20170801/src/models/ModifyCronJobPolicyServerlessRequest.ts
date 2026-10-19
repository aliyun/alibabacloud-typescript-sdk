// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCronJobPolicyServerlessRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable No-activity Suspension. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false** (default): Disabled.
   * 
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * The cron expression.
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
   * Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-02-12T15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The scheduled task ID.
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
   * The maximum value. Valid values: 1 to 32. Unit: PCU.
   * 
   * @example
   * 12
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum value. Valid values: 0.25 to 32. The minimum value must be less than or equal to the maximum value. Unit: PCU.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The maximum number of read-only nodes for scaling. The value cannot be less than the minimum value. Valid values: 0 to 15.
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
   * The detection duration for No-activity Suspension. Valid values: 5 to 1440. Unit: minutes. The detection duration must be a multiple of 5 minutes.
   * 
   * @example
   * 10
   */
  secondsUntilAutoPause?: string;
  /**
   * @remarks
   * The CPU scale-up threshold. Valid values: 40 to 100. Unit: %.
   * 
   * @example
   * 80
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @remarks
   * The CPU scale-down threshold. Valid values: 10 to 100. Unit: %. The difference between the scale-up threshold and the scale-down threshold must be at least 30.
   * 
   * @example
   * 25
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @remarks
   * The scaling sensitivity. Valid values:
   * 
   * - normal: standard.
   * - flexible: sensitive.
   * 
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @remarks
   * The start time. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
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

