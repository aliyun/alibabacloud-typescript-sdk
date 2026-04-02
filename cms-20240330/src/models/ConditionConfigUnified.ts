// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApmCompositeCompareConfig } from "./ApmCompositeCompareConfig";
import { ApmThresholdConfig } from "./ApmThresholdConfig";


export class ConditionConfigUnified extends $dara.Model {
  /**
   * @remarks
   * 聚合函数（APM_SIMPLE_CONDITION）
   */
  aggregate?: string;
  /**
   * @remarks
   * 多条比较（APM_COMPOSITE_CONDITION）
   */
  compareList?: ApmCompositeCompareConfig[];
  /**
   * @remarks
   * 持续时间（秒），PROMETHEUS_SIMPLE / UMODEL_METRICSET 使用
   */
  durationSecs?: number;
  /**
   * @remarks
   * 比较操作符（UMODEL_METRICSET_CONDITION 或 APM_SIMPLE_CONDITION）
   */
  operator?: string;
  /**
   * @remarks
   * 条件间逻辑关系（APM_COMPOSITE_CONDITION）
   */
  relation?: string;
  /**
   * @remarks
   * 严重等级（UMODEL / PROMETHEUS_SIMPLE / APM_COMPOSITE）
   */
  severity?: string;
  /**
   * @remarks
   * 阈值（UMODEL_METRICSET_CONDITION）
   */
  threshold?: number;
  /**
   * @remarks
   * 多阈值列表（APM_SIMPLE_CONDITION）
   */
  thresholdList?: ApmThresholdConfig[];
  /**
   * @remarks
   * 检测条件类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      compareList: 'compareList',
      durationSecs: 'durationSecs',
      operator: 'operator',
      relation: 'relation',
      severity: 'severity',
      threshold: 'threshold',
      thresholdList: 'thresholdList',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      compareList: { 'type': 'array', 'itemType': ApmCompositeCompareConfig },
      durationSecs: 'number',
      operator: 'string',
      relation: 'string',
      severity: 'string',
      threshold: 'number',
      thresholdList: { 'type': 'array', 'itemType': ApmThresholdConfig },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.compareList)) {
      $dara.Model.validateArray(this.compareList);
    }
    if(Array.isArray(this.thresholdList)) {
      $dara.Model.validateArray(this.thresholdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

