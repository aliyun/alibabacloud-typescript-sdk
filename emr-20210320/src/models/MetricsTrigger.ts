// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TriggerCondition } from "./TriggerCondition";
import { TimeConstraint } from "./TimeConstraint";


export class MetricsTrigger extends $dara.Model {
  /**
   * @remarks
   * The logical relationship between multiple metrics. Valid values:
   * 
   * *   And
   * *   Or (default)
   * 
   * @example
   * Or
   */
  conditionLogicOperator?: string;
  /**
   * @remarks
   * The trigger conditions for the metric.
   */
  conditions?: TriggerCondition[];
  /**
   * @remarks
   * The cooldown interval. Unit: seconds. Valid values: 0 to 10800.
   * 
   * @example
   * 300
   */
  coolDownInterval?: number;
  /**
   * @remarks
   * The number of times that the statistics are collected. This parameter is required. Valid values: 1 to 5.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The limits on time.
   */
  timeConstraints?: TimeConstraint[];
  /**
   * @remarks
   * The time window for statistics. This parameter is required. Unit: seconds. Valid values: 30 to 1800.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      conditionLogicOperator: 'ConditionLogicOperator',
      conditions: 'Conditions',
      coolDownInterval: 'CoolDownInterval',
      evaluationCount: 'EvaluationCount',
      timeConstraints: 'TimeConstraints',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionLogicOperator: 'string',
      conditions: { 'type': 'array', 'itemType': TriggerCondition },
      coolDownInterval: 'number',
      evaluationCount: 'number',
      timeConstraints: { 'type': 'array', 'itemType': TimeConstraint },
      timeWindow: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.timeConstraints)) {
      $dara.Model.validateArray(this.timeConstraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

