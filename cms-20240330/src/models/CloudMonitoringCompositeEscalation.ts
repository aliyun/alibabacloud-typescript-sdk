// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloudMonitoringCompositeEscalationEntry } from "./CloudMonitoringCompositeEscalationEntry";


export class CloudMonitoringCompositeEscalation extends $dara.Model {
  /**
   * @remarks
   * The multi-condition configuration list for cloud service monitoring composite triggers, which includes multiple sub-trigger conditions combined by logical operators (AND/OR) to determine whether to trigger an alert.
   * 
   * @example
   * [{"metricName":"cpuUsage","comparisonOperator":"GT","threshold":"80","period":60}]
   */
  escalations?: CloudMonitoringCompositeEscalationEntry[];
  /**
   * @remarks
   * The logical relationship between conditions (AND/OR).
   * 
   * @example
   * AND
   */
  relation?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
  /**
   * @remarks
   * The consecutive trigger count.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      escalations: 'escalations',
      relation: 'relation',
      severity: 'severity',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': CloudMonitoringCompositeEscalationEntry },
      relation: 'string',
      severity: 'string',
      times: 'number',
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

