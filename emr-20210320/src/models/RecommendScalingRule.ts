// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricsTrigger } from "./MetricsTrigger";
import { TimeTrigger } from "./TimeTrigger";


export class RecommendScalingRule extends $dara.Model {
  /**
   * @remarks
   * 伸缩活动类型。取值范围：
   * - SCALE_OUT：扩容。
   * - SCALE_IN：缩容。
   * 
   * This parameter is required.
   * 
   * @example
   * SCALE_IN
   */
  activityType?: string;
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
   * 推荐的规格类型。
   */
  instanceType?: string;
  /**
   * @remarks
   * 最大节约成本。
   * 
   * @example
   * 0.12
   */
  maxSave?: number;
  /**
   * @remarks
   * 按照负载伸缩描述。
   * <p>
   */
  metricsTrigger?: MetricsTrigger;
  /**
   * @remarks
   * 规则名称。
   * 
   * This parameter is required.
   * 
   * @example
   * scale-out-memory
   */
  ruleName?: string;
  /**
   * @remarks
   * 按照时间伸缩描述。
   * <p>
   */
  timeTrigger?: TimeTrigger;
  /**
   * @remarks
   * 伸缩规则类型。 取值范围：
   * - TIME_TRIGGER: 按时间伸缩。
   * - METRICS_TRIGGER: 按负载伸缩。
   * 
   * This parameter is required.
   * 
   * @example
   * TIME_TRIGGER
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentValue: 'AdjustmentValue',
      instanceType: 'InstanceType',
      maxSave: 'MaxSave',
      metricsTrigger: 'MetricsTrigger',
      ruleName: 'RuleName',
      timeTrigger: 'TimeTrigger',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      adjustmentValue: 'number',
      instanceType: 'string',
      maxSave: 'number',
      metricsTrigger: MetricsTrigger,
      ruleName: 'string',
      timeTrigger: TimeTrigger,
      triggerType: 'string',
    };
  }

  validate() {
    if(this.metricsTrigger && typeof (this.metricsTrigger as any).validate === 'function') {
      (this.metricsTrigger as any).validate();
    }
    if(this.timeTrigger && typeof (this.timeTrigger as any).validate === 'function') {
      (this.timeTrigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

