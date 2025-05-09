// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSLARulesRequestSlaRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The timeout period. Unit: minutes.
   * 
   * This parameter is required.
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
   * The rule type. Valid values:
   * 
   * *   **0**: SLA rules for task flows
   * *   **1**: SLA rules for nodes
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      intervalMinutes: 'IntervalMinutes',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      intervalMinutes: 'number',
      nodeId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

