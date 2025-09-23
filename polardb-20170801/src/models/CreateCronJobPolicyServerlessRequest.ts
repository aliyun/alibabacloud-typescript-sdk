// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCronJobPolicyServerlessRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0 0 13 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1
   */
  scaleApRoNumMax?: string;
  /**
   * @example
   * 1
   */
  scaleApRoNumMin?: string;
  /**
   * @example
   * 3
   */
  scaleMax?: string;
  /**
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @example
   * 4
   */
  scaleRoNumMax?: string;
  /**
   * @example
   * 2
   */
  scaleRoNumMin?: string;
  /**
   * @example
   * 10
   */
  secondsUntilAutoPause?: string;
  /**
   * @example
   * 60
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @example
   * 30
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
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

