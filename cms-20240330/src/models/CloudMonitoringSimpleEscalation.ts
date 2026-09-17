// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloudMonitoringSimpleEscalationEntry } from "./CloudMonitoringSimpleEscalationEntry";


export class CloudMonitoringSimpleEscalation extends $dara.Model {
  /**
   * @remarks
   * The list of multi-level trigger configurations for cloud service monitoring. Each item defines a trigger level, such as Warning or Critical, and includes parameters such as the threshold, duration, and notification method.
   * 
   * @example
   * [{"level":"WARN","comparisonOperator":"GreaterThanThreshold","threshold":"80","times":3}]
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
   * The aggregation period, in seconds.
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

