// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules } from "./CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules";


export class CreateAppInstanceGroupRequestNodePool extends $dara.Model {
  maxIdleAppInstanceAmount?: number;
  /**
   * @example
   * 10
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
  nodeInstanceType?: string;
  recurrenceSchedules?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules[];
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
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
      maxIdleAppInstanceAmount: 'MaxIdleAppInstanceAmount',
      maxScalingAmount: 'MaxScalingAmount',
      nodeAmount: 'NodeAmount',
      nodeCapacity: 'NodeCapacity',
      nodeInstanceType: 'NodeInstanceType',
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
      nodeCapacity: 'number',
      nodeInstanceType: 'string',
      recurrenceSchedules: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules },
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

