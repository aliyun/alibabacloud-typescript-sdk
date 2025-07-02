// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingRuleV1RuleParam } from "./ScalingRuleV1ruleParam";


export class ScalingRuleV1 extends $dara.Model {
  /**
   * @remarks
   * 调整类型。
   * 
   * @example
   * QUANTITY_CHANGE_IN_CAPACITY
   */
  adjustmentType?: string;
  /**
   * @remarks
   * 调整值,正数为扩容,负数为缩容。
   * 
   * @example
   * 1
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * 冷却时间,单位秒。
   * 
   * @example
   * 4
   */
  coolDownTime?: number;
  /**
   * @remarks
   * 规则名称。
   * 
   * @example
   * tule1
   */
  ruleName?: string;
  /**
   * @remarks
   * 规则参数。
   */
  ruleParam?: ScalingRuleV1RuleParam;
  /**
   * @remarks
   * 规则类型。
   * 
   * @example
   * BY_LOAD
   */
  ruleType?: string;
  /**
   * @remarks
   * 弹性规则配置ID。
   * 
   * @example
   * SCB-DCD96BCCFED1****
   */
  scalingConfigBizId?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      coolDownTime: 'CoolDownTime',
      ruleName: 'RuleName',
      ruleParam: 'RuleParam',
      ruleType: 'RuleType',
      scalingConfigBizId: 'ScalingConfigBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      coolDownTime: 'number',
      ruleName: 'string',
      ruleParam: ScalingRuleV1RuleParam,
      ruleType: 'string',
      scalingConfigBizId: 'string',
    };
  }

  validate() {
    if(this.ruleParam && typeof (this.ruleParam as any).validate === 'function') {
      (this.ruleParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

