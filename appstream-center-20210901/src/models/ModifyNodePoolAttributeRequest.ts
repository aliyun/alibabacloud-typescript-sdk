// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods extends $dara.Model {
  /**
   * @remarks
   * The number of resources.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The end of the time period during which the scaling policy is executed. Format: HH:mm.
   * 
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time period during which the scaling policy is executed. Format: HH:mm.
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
   * The schedule type of the scaling policy. This parameter must be configured together with `RecurrenceValues`.``
   * 
   * Valid values:
   * 
   * *   weekly: The scaling policy is executed on specific days each week.
   * 
   * @example
   * weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The days of each week on which the scaling policy is executed.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The time periods during which the scaling policy can be executed. The time periods must meet the following requirements:
   * 
   * *   Up to three time periods can be added.
   * *   Time periods cannot be overlapped.
   * *   The interval between two consecutive time periods must be greater than or equal to 5 minutes.
   * *   Each time period must be greater than or equal to 15 minutes.
   * *   The total length of the time periods that you specify cannot be greater than a day.
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
   * The maximum number of idle sessions. After you specify a value for this parameter, auto scaling is triggered only if the number of idle sessions in the delivery group is smaller than the specified value and the session usage exceeds the value specified for `ScalingUsageThreshold`. Otherwise, the system determines that the idle sessions in the delivery group are sufficient and does not perform auto scaling.`` You can use this parameter to flexibly manage auto scaling and reduce costs.
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources that can be created for scale-out. This parameter is required only if you set `StrategyType` to `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * The number of resources to purchase. Valid values: 1 to 100.
   * 
   * > 
   * 
   * *   If you use subscription resources, you cannot modify this parameter.
   * *   If you use pay-as-you-go resources, you can modify this parameter only if you set `StrategyType` to `NODE_FIXED` or `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The intervals at which the scaling policy is executed. This parameter is required only if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
   */
  recurrenceSchedules?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules[];
  /**
   * @remarks
   * The maximum retention period of a resource to which no session is connected. If no session is connected to a resource, the resource is automatically scaled in after the specified retention period elapses. Valid values: 5 to 120. Default value: 5. Unit: minutes. If one of the following situations occurs, the resource is not scaled in.
   * 
   * *   If a scale-out is automatically triggered after the resource is scaled in, the scale-in is not executed. This prevents repeated scale-in and scale-out.
   * *   If a scale-out is automatically triggered due to an increase in the number of sessions during the specified period of time, the resource is not scaled in and the countdown restarts.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of resources that are created each time resources are scaled out. Valid values: 1 to 10. This parameter is required only if you set `StrategyType` to `NODE_SCALING_BY_USAGE`.
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit of session usage. If the session usage exceeds the specified upper limit, auto scaling is automatically triggered. The session usage is calculated by using the following formula: `Session usage = Number of current sessions/(Total number of resources × Number of concurrent sessions) × 100%`. This parameter is required only if you set `StrategyType` to `NODE_SCALING_BY_USAGE`. Valid values: 0 to 100. Default value: 85.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The expiration date of the scaling policy. Format: yyyy-MM-dd. The interval between the expiration date and the effective date must be from 7 days to 1 year. This parameter is required only if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
   * 
   * @example
   * 2023-01-19
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The effective date of the scaling policy. Format: yyyy-MM-dd. The date must be the same as or later than the current date. This parameter is required only if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
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
   * 
   * *   `NODE_FIXED`: no scaling. This value is applicable to pay-as-you-go resources and subscription resources.
   * *   `NODE_SCALING_BY_USAGE`: auto scaling. This value is applicable to pay-as-you-go resources and subscription resources.
   * *   `NODE_SCALING_BY_SCHEDULE`: scheduled scaling. This value is applicable only to pay-as-you-go resources.
   * 
   * Valid values:
   * 
   * *   NODE_FIXED: no scaling
   * *   NODE_SCALING_BY_SCHEDULE: scheduled scaling
   * *   NODE_SCALING_BY_USAGE: auto scaling
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Specifies whether to enable the warmup policy for resources. This parameter is required only if you set `StrategyType` to `NODE_SCALING_BY_SCHEDULE`.
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
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * Valid values:
   * 
   * *   cn-shanghai: China (Shanghai)
   * *   cn-hangzhou: China (Hangzhou)
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The auto scaling policy used by the delivery group.
   */
  nodePoolStrategy?: ModifyNodePoolAttributeRequestNodePoolStrategy;
  /**
   * @example
   * rg-ew7va2g1wl3vm****
   */
  poolId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
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

