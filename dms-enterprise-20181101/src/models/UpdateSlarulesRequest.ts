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

export class UpdateSLARulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11****
   */
  dagId?: number;
  /**
   * @remarks
   * The list of SLA rules.
   */
  slaRuleList?: UpdateSLARulesRequestSlaRuleList[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > :To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      slaRuleList: 'SlaRuleList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      slaRuleList: { 'type': 'array', 'itemType': UpdateSLARulesRequestSlaRuleList },
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slaRuleList)) {
      $dara.Model.validateArray(this.slaRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

