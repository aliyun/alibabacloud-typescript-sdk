// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloudMonitoringSimpleEscalationEntry } from "./CloudMonitoringSimpleEscalationEntry";


export class CloudMonitoringSimpleEscalation extends $dara.Model {
  /**
   * @remarks
   * The multi-level trigger list.
   */
  escalations?: CloudMonitoringSimpleEscalationEntry[];
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * cpuUsage
   */
  metricName?: string;
  /**
   * @remarks
   * The collection period, in seconds.
   * 
   * @example
   * 60
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

