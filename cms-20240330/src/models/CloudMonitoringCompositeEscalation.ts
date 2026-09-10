// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloudMonitoringCompositeEscalationEntry } from "./CloudMonitoringCompositeEscalationEntry";


export class CloudMonitoringCompositeEscalation extends $dara.Model {
  /**
   * @remarks
   * The list of multi-condition configurations.
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
   * The number of consecutive times the condition is triggered.
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

