// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDefaultSLARulesResponseBodySLARuleListSLARule extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 0
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the SLA rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The timeout period. Unit: minutes.
   * 
   * @example
   * 1080
   */
  intervalMinutes?: number;
  /**
   * @remarks
   * The ID of the task node.
   * 
   * @example
   * 0
   */
  nodeId?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **0**: an SLA rule for a task flow
   * *   **1**: an SLA rule for a task node
   * 
   * @example
   * 0
   */
  ruleType?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      id: 'Id',
      intervalMinutes: 'IntervalMinutes',
      nodeId: 'NodeId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      id: 'number',
      intervalMinutes: 'number',
      nodeId: 'number',
      ruleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

