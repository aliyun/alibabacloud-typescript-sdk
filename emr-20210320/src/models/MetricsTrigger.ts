// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TriggerCondition } from "./TriggerCondition";
import { TimeConstraint } from "./TimeConstraint";


export class MetricsTrigger extends $dara.Model {
  /**
   * @remarks
   * 多指标逻辑关系。默认：Or。取值范围：
   * - And:与
   * - Or：或
   * 
   * @example
   * Or
   */
  conditionLogicOperator?: string;
  /**
   * @remarks
   * 指标触发条件列表。
   */
  conditions?: TriggerCondition[];
  /**
   * @remarks
   * 冷却时间。 单位为秒
   * 
   * @example
   * 300
   */
  coolDownInterval?: number;
  /**
   * @remarks
   * 统计次数。
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
  /**
   * @remarks
   * 时间限制。
   */
  timeConstraints?: TimeConstraint[];
  /**
   * @remarks
   * 统计窗口。单位为秒。
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

