// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterServerlessConfRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable No-activity Suspension. Default value: false. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * Cycle policy ID.
   * 
   * @example
   * 143f8e9f-2566-4dff-be47-bed79f28fc78
   */
  crontabJobId?: string;
  /**
   * @remarks
   * The ID of the serverless cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp10gr51qasnl****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies an immediate or scheduled task to modify parameters and restart the cluster. Valid values:
   * 
   * *   false: scheduled task
   * *   true: immediate task
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The latest start time for upgrading the specifications within the scheduled time period. Specify the time in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * > * The value of this parameter must be at least 30 minutes later than the value of PlannedStartTime.
   * >*   If you specify PlannedStartTime but do not specify PlannedEndTime, the latest start time of the task is set to a value that is calculated by using the following formula: `PlannedEndTime value + 30 minutes`. For example, if you set PlannedStartTime to `2021-01-14T09:00:00Z` and you do not specify PlannedEndTime, the latest start time of the task is set to `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest start time of the scheduled task for adding the read-only node. The scheduled task specifies that the task is run in the required period. Specify the time in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * > *   The earliest start time of the scheduled task can be a point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a point in time between `2021-01-14T09:00:00Z` and `2021-01-15T09:00:00Z`.
   * >*   If you leave this parameter empty, the task for adding the read-only node is immediately run by default.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of stable AP read-only nodes. Valid values: 0 to 7.
   * 
   * @example
   * 1
   */
  scaleApRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of stable AP read-only nodes. Valid values: 0 to 7.
   * 
   * @example
   * 1
   */
  scaleApRoNumMin?: string;
  /**
   * @remarks
   * The maximum number of PCUs per node for scaling. Valid values: 1 PCU to 32 PCUs.
   * 
   * @example
   * 10
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum number of PCUs per node for scaling. Valid values: 1 PCU to 31 PCUs.
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
   * 2
   */
  scaleRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only nodes for scaling. Valid values: 0 to 15.
   * 
   * @example
   * 1
   */
  scaleRoNumMin?: string;
  /**
   * @remarks
   * The detection period for No-activity Suspension. Valid values: 5 to 1440. Unit: minutes. The detection duration must be a multiple of 5 minutes.
   * 
   * @example
   * 10
   */
  secondsUntilAutoPause?: string;
  /**
   * @remarks
   * CPU burst threshold
   * 
   * @example
   * 80
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @remarks
   * CPU downscale threshold
   * 
   * @example
   * 50
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @remarks
   * Elastic sensitivity. Values: - normal: standard - flexible: sensitive
   * 
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @remarks
   * Asynchronous task ID.
   * 
   * @example
   * 143f8e9f-2566-4dff-be47-bed79f28fc78
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      allowShutDown: 'AllowShutDown',
      crontabJobId: 'CrontabJobId',
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
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
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowShutDown: 'string',
      crontabJobId: 'string',
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
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
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

