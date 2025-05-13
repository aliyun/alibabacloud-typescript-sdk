// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleAlertMetricInputFilterValue } from "./AlertRuleAlertMetricInputFilterValue";
import { AlertRuleAlertMetricInputParamValue } from "./AlertRuleAlertMetricInputParamValue";


export class AlertRuleAlertMetricInput extends $dara.Model {
  filterValues?: AlertRuleAlertMetricInputFilterValue[];
  groupId?: string;
  metricId?: string;
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

