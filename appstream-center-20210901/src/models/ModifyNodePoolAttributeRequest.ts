// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods extends $dara.Model {
  /**
   * @remarks
   * The resource count.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The end time. Format: HH:mm.
   * 
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time. Format: HH:mm.
   * 
   * @example
   * 12:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
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

export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules extends $dara.Model {
  /**
   * @remarks
   * The type of the policy execution cycle. You must specify both `RecurrenceType` and `RecurrenceValues`.
   * 
   * @example
   * weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The list of values for the policy execution cycle.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The list of time periods for the policy execution cycle. Requirements for time period settings:
   * 
   * - You can add up to three time periods.
   * - Time periods must not overlap.
   * - The interval between time periods must be at least 5 minutes.
   * - Each time period must be at least 15 minutes long.
   * - All time periods combined must not span across days.
   */
  timerPeriods?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods },
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    if(Array.isArray(this.timerPeriods)) {
      $dara.Model.validateArray(this.timerPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequestNodePoolStrategy extends $dara.Model {
  /**
   * @remarks
   * The maximum number of idle sessions. When this value is specified, automatic scale-out is triggered only when the session usage exceeds `ScalingUsageThreshold` and the number of idle sessions in the current delivery group is less than `MaxIdleAppInstanceAmount`. Otherwise, the idle sessions in the delivery group are considered sufficient, and no automatic scale-out is performed. This parameter can be used to flexibly control elastic scale-out behavior and reduce costs.
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources that can be created during scale-out. This parameter is required when `StrategyType` is set to `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * The number of purchased resources. Valid values: 1 to 100.
   * 
   * > 
   * - If the resources are subscription resources, this parameter cannot be modified.
   * - If the resources are pay-as-you-go resources, this parameter can be modified when the scaling mode (`StrategyType`) is set to fixed quantity (`NODE_FIXED`) or automatic scaling (`NODE_SCALING_BY_USAGE`).
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The list of policy execution cycles. This parameter is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
   */
  recurrenceSchedules?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules[];
  /**
   * @remarks
   * The maximum duration (in minutes) that a resource without session connections is retained. When no sessions are connected to a resource, a countdown starts based on the duration specified here. The resource is scaled in when the countdown ends. Valid values: 5 to 120. Default value: 5. The following exceptions apply:
   * 
   * - If scale-in would trigger automatic scale-out again, the scale-in is not performed to avoid repeated scale-in and scale-out operations.
   * - If automatic scale-out is triggered by an increase in sessions during this period, the resource is not scaled in as originally planned, and the countdown restarts.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of resources created per scale-out operation. Valid values: 1 to 10. This parameter is required when `StrategyType` is set to `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper threshold of session usage (%). Automatic scale-out is triggered when the session usage exceeds this threshold. The session usage is calculated by using the following formula: `Session usage = Current sessions ÷ (Total resources × Concurrent sessions per resource) × 100%`. This parameter is required when `StrategyType` is set to `NODE_SCALING_BY_USAGE`. Valid values: 0 to 100. Default value: 85.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The date when the policy expires. Format: yyyy-MM-dd. The interval between the expiration date and the effective date must be between 7 days and 1 year, inclusive. This parameter is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
   * 
   * @example
   * 2023-01-19
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The date when the policy takes effect. Format: yyyy-MM-dd. The date must be equal to or later than the current date. This parameter is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
   * 
   * @example
   * 2023-01-05
   */
  strategyEnableDate?: string;
  /**
   * @remarks
   * The scaling mode.
   * 
   * > 
   * - `NODE_FIXED` (fixed quantity): Applicable to subscription and pay-as-you-go resources.
   * - `NODE_SCALING_BY_USAGE` (automatic scaling): Applicable to subscription and pay-as-you-go resources.
   * - `NODE_SCALING_BY_SCHEDULE` (scheduled scaling): Applicable only to pay-as-you-go resources.
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Specifies whether to enable the resource prefetch policy. This parameter is required when `StrategyType` (scaling mode) is set to `NODE_SCALING_BY_SCHEDULE` (scheduled scaling).
   * 
   * @example
   * false
   */
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxIdleAppInstanceAmount: 'MaxIdleAppInstanceAmount',
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      strategyDisableDate: 'StrategyDisableDate',
      strategyEnableDate: 'StrategyEnableDate',
      strategyType: 'StrategyType',
      warmUp: 'WarmUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIdleAppInstanceAmount: 'number',
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      recurrenceSchedules: { 'type': 'array', 'itemType': ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      strategyDisableDate: 'string',
      strategyEnableDate: 'string',
      strategyType: 'string',
      warmUp: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceSchedules)) {
      $dara.Model.validateArray(this.recurrenceSchedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the delivery group. For more information about supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The number of concurrent sessions, which is the number of sessions that can be simultaneously connected to a single resource. If too many sessions are connected simultaneously, the application experience may degrade. The valid values vary depending on the resource specification. The valid values for each resource specification are as follows:
   * 
   * - appstreaming.general.4c8g: 1 to 2.
   * - appstreaming.general.8c16g: 1 to 4.
   * - appstreaming.vgpu.8c16g.4g: 1 to 4.
   * - appstreaming.vgpu.8c31g.16g: 1 to 4.
   * - appstreaming.vgpu.14c93g.12g: 1 to 6.
   * 
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The automatic scaling policy of the delivery group.
   */
  nodePoolStrategy?: ModifyNodePoolAttributeRequestNodePoolStrategy;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ew7va2g1wl3vm****
   */
  poolId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      nodeCapacity: 'NodeCapacity',
      nodePoolStrategy: 'NodePoolStrategy',
      poolId: 'PoolId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      nodeCapacity: 'number',
      nodePoolStrategy: ModifyNodePoolAttributeRequestNodePoolStrategy,
      poolId: 'string',
      productType: 'string',
    };
  }

  validate() {
    if(this.nodePoolStrategy && typeof (this.nodePoolStrategy as any).validate === 'function') {
      (this.nodePoolStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

