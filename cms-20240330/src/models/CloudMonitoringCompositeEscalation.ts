// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloudMonitoringCompositeEscalationEntry } from "./CloudMonitoringCompositeEscalationEntry";


export class CloudMonitoringCompositeEscalation extends $dara.Model {
  /**
   * @remarks
   * A single entry in the escalation policy. See the `CloudMonitoringCompositeEscalationEntry` object for details.
   */
  escalations?: CloudMonitoringCompositeEscalationEntry[];
  /**
   * @remarks
   * Specifies the logical relationship for evaluating the conditions of the composite alert rule. Valid values: `and` and `or`.
   */
  relation?: string;
  /**
   * @remarks
   * Specifies the severity level of the alert. For example: `Critical`, `Warning`, and `Info`.
   */
  severity?: string;
  /**
   * @remarks
   * Specifies the number of times the alert conditions must be met to trigger this escalation policy.
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

