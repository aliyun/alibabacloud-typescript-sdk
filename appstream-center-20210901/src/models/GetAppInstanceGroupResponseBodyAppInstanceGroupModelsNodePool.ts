// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules } from "./GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules";


export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool extends $dara.Model {
  /**
   * @example
   * 2
   */
  amount?: number;
  maxIdleAppInstanceAmount?: number;
  /**
   * @example
   * 8
   */
  maxScalingAmount?: number;
  /**
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @example
   * 2
   */
  nodeCapacity?: number;
  /**
   * @example
   * appstreaming.vgpu.4c8g.2g
   */
  nodeInstanceType?: string;
  /**
   * @example
   * rg-g6922kced36hx****
   */
  nodePoolId?: string;
  nodeTypeName?: string;
  /**
   * @example
   * 1
   */
  nodeUsed?: number;
  recurrenceSchedules?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules[];
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 8
   */
  scalingNodeAmount?: number;
  /**
   * @example
   * 4
   */
  scalingNodeUsed?: number;
  /**
   * @example
   * 2
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 2022-09-08
   */
  strategyDisableDate?: string;
  /**
   * @example
   * 2022-08-01
   */
  strategyEnableDate?: string;
  /**
   * @example
   * NODE_FIXED
   */
  strategyType?: string;
  /**
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
      recurrenceSchedules: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules },
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

