// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingRuleSpecByLoadScalingRuleSpec } from "./ScalingRuleSpecByLoadScalingRuleSpec";
import { ScalingRuleSpecByTimeScalingRuleSpec } from "./ScalingRuleSpecByTimeScalingRuleSpec";


export class ScalingRuleSpec extends $dara.Model {
  /**
   * @remarks
   * 调整值。需要为正数，代表需要扩容或者缩容的实例数量。
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * 按照负载伸缩描述。
   */
  byLoadScalingRuleSpec?: ScalingRuleSpecByLoadScalingRuleSpec;
  /**
   * @remarks
   * 按照时间伸缩描述。
   */
  byTimeScalingRuleSpec?: ScalingRuleSpecByTimeScalingRuleSpec;
  /**
   * @remarks
   * 冷却时间。单位为秒，取值范围在30~10800秒之间。
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  coolDownInterval?: number;
  /**
   * @remarks
   * 伸缩活动类型。
   * 
   * This parameter is required.
   * 
   * @example
   * SCALE_IN
   */
  scalingActivityType?: string;
  /**
   * @remarks
   * 规则名称。
   * 
   * This parameter is required.
   * 
   * @example
   * scale-out-memory
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * 伸缩规则类型。
   * 
   * This parameter is required.
   * 
   * @example
   * BY_TIME
   */
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      adjustmentValue: 'AdjustmentValue',
      byLoadScalingRuleSpec: 'ByLoadScalingRuleSpec',
      byTimeScalingRuleSpec: 'ByTimeScalingRuleSpec',
      coolDownInterval: 'CoolDownInterval',
      scalingActivityType: 'ScalingActivityType',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentValue: 'number',
      byLoadScalingRuleSpec: ScalingRuleSpecByLoadScalingRuleSpec,
      byTimeScalingRuleSpec: ScalingRuleSpecByTimeScalingRuleSpec,
      coolDownInterval: 'number',
      scalingActivityType: 'string',
      scalingRuleName: 'string',
      scalingRuleType: 'string',
    };
  }

  validate() {
    if(this.byLoadScalingRuleSpec && typeof (this.byLoadScalingRuleSpec as any).validate === 'function') {
      (this.byLoadScalingRuleSpec as any).validate();
    }
    if(this.byTimeScalingRuleSpec && typeof (this.byTimeScalingRuleSpec as any).validate === 'function') {
      (this.byTimeScalingRuleSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

