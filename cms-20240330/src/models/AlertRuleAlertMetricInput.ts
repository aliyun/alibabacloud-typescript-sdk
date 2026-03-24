// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleAlertMetricInputFilterValue } from "./AlertRuleAlertMetricInputFilterValue";
import { AlertRuleAlertMetricInputParamValue } from "./AlertRuleAlertMetricInputParamValue";


export class AlertRuleAlertMetricInput extends $dara.Model {
  /**
   * @remarks
   * 用户输入的过滤条件列表。指标所支持的参数列表、过滤条件列表可通过ListAlertMetrics进行查询。
   */
  filterValues?: AlertRuleAlertMetricInputFilterValue[];
  /**
   * @remarks
   * 用户所选指标组的key
   * 
   * @example
   * apm.jvm
   */
  groupId?: string;
  /**
   * @remarks
   * 用户所选预定义指标的key
   * 
   * @example
   * appstat.jvm.GcPsMarkSweepCount
   */
  metricId?: string;
  /**
   * @remarks
   * 输入的参数列表。  指标所支持的参数列表、过滤条件列表可通过ListAlertMetrics进行查询。
   */
  paramValues?: AlertRuleAlertMetricInputParamValue[];
  static names(): { [key: string]: string } {
    return {
      filterValues: 'filterValues',
      groupId: 'groupId',
      metricId: 'metricId',
      paramValues: 'paramValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterValues: { 'type': 'array', 'itemType': AlertRuleAlertMetricInputFilterValue },
      groupId: 'string',
      metricId: 'string',
      paramValues: { 'type': 'array', 'itemType': AlertRuleAlertMetricInputParamValue },
    };
  }

  validate() {
    if(Array.isArray(this.filterValues)) {
      $dara.Model.validateArray(this.filterValues);
    }
    if(Array.isArray(this.paramValues)) {
      $dara.Model.validateArray(this.paramValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

