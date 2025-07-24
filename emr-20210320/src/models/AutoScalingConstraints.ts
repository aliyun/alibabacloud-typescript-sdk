// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricUnitValue } from "./MetricUnitValue";
import { ScalingRule } from "./ScalingRule";
import { Tag } from "./Tag";


export class AutoScalingConstraintsSupportMetricTags extends $dara.Model {
  /**
   * @remarks
   * 指标名称。
   */
  metricName?: string;
  /**
   * @remarks
   * 指标Tag。
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoScalingConstraints extends $dara.Model {
  /**
   * @remarks
   * 按负载伸缩指标单位描述。
   */
  autoScalingMetricUnits?: MetricUnitValue[];
  /**
   * @remarks
   * 默认按负载弹性伸缩规则列表
   */
  defaultMetricTriggeredRules?: ScalingRule[];
  /**
   * @remarks
   * 单次伸缩活动最大扩缩容节点数量。
   * 
   * @example
   * 1000
   */
  maxAdjustmentValue?: number;
  /**
   * @remarks
   * 按负载规则数量最大值。
   * 
   * @example
   * 10
   */
  maxByLoadRuleCount?: number;
  /**
   * @remarks
   * 按时间规则数量最大值。
   * 
   * @example
   * 10
   */
  maxByTimeRuleCount?: number;
  /**
   * @remarks
   * 支持的按负载弹性伸缩指标Tag列表。
   */
  supportMetricTags?: AutoScalingConstraintsSupportMetricTags[];
  /**
   * @remarks
   * 支持的按负载弹性伸缩指标列表。
   * 
   * @example
   * ["YarnRootAvailableMemoryUsage","YarnRootAvailableVcores"]
   */
  supportMetrics?: string[];
  /**
   * @remarks
   * 支持的弹性伸缩规则类型。
   * 
   * @example
   * ["TIME_TRIGGER","METRICS_TRIGGER"]
   */
  supportRuleTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      autoScalingMetricUnits: 'AutoScalingMetricUnits',
      defaultMetricTriggeredRules: 'DefaultMetricTriggeredRules',
      maxAdjustmentValue: 'MaxAdjustmentValue',
      maxByLoadRuleCount: 'MaxByLoadRuleCount',
      maxByTimeRuleCount: 'MaxByTimeRuleCount',
      supportMetricTags: 'SupportMetricTags',
      supportMetrics: 'SupportMetrics',
      supportRuleTypes: 'SupportRuleTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScalingMetricUnits: { 'type': 'array', 'itemType': MetricUnitValue },
      defaultMetricTriggeredRules: { 'type': 'array', 'itemType': ScalingRule },
      maxAdjustmentValue: 'number',
      maxByLoadRuleCount: 'number',
      maxByTimeRuleCount: 'number',
      supportMetricTags: { 'type': 'array', 'itemType': AutoScalingConstraintsSupportMetricTags },
      supportMetrics: { 'type': 'array', 'itemType': 'string' },
      supportRuleTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.autoScalingMetricUnits)) {
      $dara.Model.validateArray(this.autoScalingMetricUnits);
    }
    if(Array.isArray(this.defaultMetricTriggeredRules)) {
      $dara.Model.validateArray(this.defaultMetricTriggeredRules);
    }
    if(Array.isArray(this.supportMetricTags)) {
      $dara.Model.validateArray(this.supportMetricTags);
    }
    if(Array.isArray(this.supportMetrics)) {
      $dara.Model.validateArray(this.supportMetrics);
    }
    if(Array.isArray(this.supportRuleTypes)) {
      $dara.Model.validateArray(this.supportRuleTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

