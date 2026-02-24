// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleAlertMetricInputFilterValue } from "./AlertRuleAlertMetricInputFilterValue";
import { AlertRuleAlertMetricInputParamValue } from "./AlertRuleAlertMetricInputParamValue";


export class AlertRuleAlertMetricInput extends $dara.Model {
  /**
   * @remarks
   * List of user-provided filter conditions. The supported parameters and filter conditions for the metric can be queried via ListAlertMetrics.
   */
  filterValues?: AlertRuleAlertMetricInputFilterValue[];
  /**
   * @remarks
   * Key of the metric group selected by the user.
   * 
   * @example
   * apm.jvm
   */
  groupId?: string;
  /**
   * @remarks
   * Key of the predefined metric selected by the user.
   * 
   * @example
   * appstat.jvm.GcPsMarkSweepCount
   */
  metricId?: string;
  /**
   * @remarks
   * List of input parameters. The metric\\"s supported parameters and filter conditions can be queried via ListAlertMetrics.
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

