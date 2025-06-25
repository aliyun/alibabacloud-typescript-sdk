// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules } from "./ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules";


export class ModifyNodePoolAttributeRequestNodePoolStrategy extends $dara.Model {
  maxIdleAppInstanceAmount?: number;
  /**
   * @example
   * 10
   */
  maxScalingAmount?: number;
  /**
   * @remarks
   * 购买资源的数量。取值范围：1~100。
   * 
   * > 
   * - 若为包年包月资源，则该参数不可修改。
   * - 若为按量付费资源，则当弹性模式（`StrategyType`）为固定数量（`NODE_FIXED`）或自动扩缩容（`NODE_SCALING_BY_USAGE`）时该参数可修改。
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * 策略执行周期列表。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
   */
  recurrenceSchedules?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules[];
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
   * @remarks
   * 策略失效日期。格式为：yyyy-MM-dd。失效日期与生效日期的间隔必须介于7天到1年之间（含7天和1年）。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
   * 
   * @example
   * 2023-01-19
   */
  strategyDisableDate?: string;
  /**
   * @remarks
   * 策略生效日期。格式为：yyyy-MM-dd。该日期必须大于或等于当前日期。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
   * 
   * @example
   * 2023-01-05
   */
  strategyEnableDate?: string;
  strategyType?: string;
  /**
   * @remarks
   * 是否开启资源预热策略。`StrategyType`（弹性模式）设为`NODE_SCALING_BY_SCHEDULE`（定时扩缩容）时，该字段必填。
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

