// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules } from "./ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules";


export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool extends $dara.Model {
  /**
   * @remarks
   * The number of resources purchased when the delivery group was created.
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * The maximum number of idle sessions. After you specify a value for this parameter, auto scale-out is triggered only if the number of idle sessions in the delivery group is smaller than the specified value and the session usage exceeds the value specified for `ScalingUsageThreshold`. Otherwise, the system determines that idle sessions in the delivery group are sufficient and does not perform auto scale-out.`` You can use this parameter to flexibly manage auto scaling and reduce costs.
   * 
   * @example
   * 3
   */
  maxIdleAppInstanceAmount?: number;
  /**
   * @remarks
   * The maximum number of resources that can be created for scale-out.
   * 
   * @example
   * 8
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * The total number of subscription resources.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The maximum number of sessions that can be connected to a resource at the same time. If a resource connects to a large number of sessions at the same time, user experience can be compromised. The value range varies based on the resource specification. The following items describe the value ranges of different resource types:
   * 
   * *   appstreaming.general.4c8g: 1 to 2
   * *   appstreaming.general.8c16g: 1 to 4
   * *   appstreaming.vgpu.8c16g.4g: 1 to 4
   * *   appstreaming.vgpu.8c31g.16g: 1 to 4
   * *   appstreaming.vgpu.14c93g.12g: 1 to 6
   * 
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @remarks
   * The ID of the resource specification that you purchase.
   * 
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-g6922kced36hx****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * The name of the resource specification.
   */
  nodeTypeName?: string;
  /**
   * @remarks
   * The number of subscription resources that are in use.
   * 
   * @example
   * 1
   */
  nodeUsed?: number;
  /**
   * @remarks
   * The intervals at which the scaling policy is executed.
   */
  recurrenceSchedules?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  /**
   * @remarks
   * The duration for which no session is connected. Unit: minutes. If no session is connected in the resources after the specified duration elapses, auto scale-in is triggered. Default value: 5.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The total number of scalable resources.
   * 
   * @example
   * 8
   */
  scalingNodeAmount?: number;
  /**
   * @remarks
   * The number of scalable resources that are in use.
   * 
   * @example
   * 4
   */
  scalingNodeUsed?: number;
  /**
   * @remarks
   * The number of resources that are created each time resources are scaled out. Valid values: 1 to 10.
   * 
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit of session usage. If the session usage exceeds the specified upper limit, auto scale-out is triggered. The session usage is calculated by using the following formula: `Session usage = Number of current sessions/(Total number of resources × Number of concurrent sessions) × 100%`.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The expiration date of the scaling policy. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * The effective date of the scaling policy. Format: yyyy-MM-dd.
   * 
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @remarks
   * The type of the scaling policy.
   * 
   * >  `NODE_SCALING_BY_USAGE` is returned for this parameter only if ChargeType is set to `PrePaid`. `NODE_SCALING_BY_SCHEDULE` is returned for this parameter only if ChargeType is set to `PostPaid`.
   * 
   * Valid values:
   * 
   * *   NODE_FIXED: No scalable resources are used.
   * *   NODE_SCALING_BY_SCHEDULE: Scheduled scaling is used.
   * *   NODE_SCALING_BY_USAGE: Resources are scaled based on usage.
   * 
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
   * @remarks
   * Indicates whether resource prefetch is enabled.
   * 
   * @example
   * false
   */
  warmUp?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      maxIdleAppInstanceAmount: 'MaxIdleAppInstanceAmount',
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      nodeCapacity: 'NodeCapacity',
      nodeInstanceType: 'NodeInstanceType',
      nodePoolId: 'NodePoolId',
      nodeTypeName: 'NodeTypeName',
      nodeUsed: 'NodeUsed',
      recurrenceSchedules: 'RecurrenceSchedules',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingNodeAmount: 'ScalingNodeAmount',
      scalingNodeUsed: 'ScalingNodeUsed',
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
      amount: 'number',
      maxIdleAppInstanceAmount: 'number',
      maxScalingAmount: 'number',
      nodeAmount: 'number',
      nodeCapacity: 'number',
      nodeInstanceType: 'string',
      nodePoolId: 'string',
      nodeTypeName: 'string',
      nodeUsed: 'number',
      recurrenceSchedules: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules },
      scalingDownAfterIdleMinutes: 'number',
      scalingNodeAmount: 'number',
      scalingNodeUsed: 'number',
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

