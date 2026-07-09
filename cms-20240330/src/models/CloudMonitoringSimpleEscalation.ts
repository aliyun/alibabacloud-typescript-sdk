// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloudMonitoringSimpleEscalationEntry } from "./CloudMonitoringSimpleEscalationEntry";


export class CloudMonitoringSimpleEscalation extends $dara.Model {
  /**
   * @remarks
   * An object that defines a single escalation rule.
   */
  escalations?: CloudMonitoringSimpleEscalationEntry[];
  /**
   * @remarks
   * The name of the metric.
   */
  metricName?: string;
  /**
   * @remarks
   * The evaluation period for the metric, in seconds.
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      escalations: 'escalations',
      metricName: 'metricName',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': CloudMonitoringSimpleEscalationEntry },
      metricName: 'string',
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

