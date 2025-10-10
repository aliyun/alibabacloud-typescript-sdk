// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRulesResponseBodyRuleIds extends $dara.Model {
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A smaller value indicates a higher priority.
   * 
   * > The priorities of the forwarding rules created for the same listener must be unique.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * rule-a3x3pg1yohq3lq****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A lower value specifies a higher priority.
   * 
   * > The priorities of the forwarding rules created for the same listener is unique.
   */
  ruleIds?: CreateRulesResponseBodyRuleIds[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      ruleIds: { 'type': 'array', 'itemType': CreateRulesResponseBodyRuleIds },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

