// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoRepairPoliciesResponseBodyItemsRulesIncidents extends $dara.Model {
  /**
   * @remarks
   * The name of the incident.
   * 
   * @example
   * Node.FaultNeedReboot.HOST
   */
  name?: string;
  /**
   * @remarks
   * The diagnosis type.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
  /**
   * @remarks
   * The label `key`.
   * 
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @remarks
   * The label `value`.
   * 
   * @example
   * approved
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
  /**
   * @remarks
   * The label `key`.
   * 
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @remarks
   * The taint `value`.
   * 
   * @example
   * inquiring
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureIntervention extends $dara.Model {
  /**
   * @remarks
   * The label configuration for confirming authorization. When you add the following label to a node, it indicates that you authorize ACK to execute the action of this phase. After completing the action of this phase, ACK automatically removes the authorization inquiry label and the confirmation label corresponding to this phase. If you do not add the following label to authorize the action in time, ACK will not execute the action of this phase or any subsequent actions, and the node may remain in a damaged state.
   */
  approvedLabel?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionApprovedLabel;
  /**
   * @remarks
   * Specifies whether to enable manual approval.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The label configuration for authorization inquiry. When this phase is entered, ACK adds the following label to your node and waits for your authorization to execute the action of this phase.
   */
  inquiringLabel?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionInquiringLabel;
  /**
   * @remarks
   * The type of manual approval.
   * 
   * @example
   * label
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvedLabel: 'approved_label',
      enable: 'enable',
      inquiringLabel: 'inquiring_label',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedLabel: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionApprovedLabel,
      enable: 'boolean',
      inquiringLabel: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionInquiringLabel,
      type: 'string',
    };
  }

  validate() {
    if(this.approvedLabel && typeof (this.approvedLabel as any).validate === 'function') {
      (this.approvedLabel as any).validate();
    }
    if(this.inquiringLabel && typeof (this.inquiringLabel as any).validate === 'function') {
      (this.inquiringLabel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedure extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters of the procedure.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The configuration for manual intervention.
   */
  intervention?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureIntervention;
  /**
   * @remarks
   * The name of the procedure.
   * 
   * @example
   * QuarantineGPU
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      intervention: 'intervention',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      intervention: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureIntervention,
      name: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.intervention && typeof (this.intervention as any).validate === 'function') {
      (this.intervention as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItemsRules extends $dara.Model {
  /**
   * @remarks
   * The list of identified incidents.
   */
  incidents?: ListAutoRepairPoliciesResponseBodyItemsRulesIncidents[];
  /**
   * @remarks
   * The repair procedure.
   */
  repairProcedure?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedure[];
  static names(): { [key: string]: string } {
    return {
      incidents: 'incidents',
      repairProcedure: 'repair_procedure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRulesIncidents },
      repairProcedure: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedure },
    };
  }

  validate() {
    if(Array.isArray(this.incidents)) {
      $dara.Model.validateArray(this.incidents);
    }
    if(Array.isArray(this.repairProcedure)) {
      $dara.Model.validateArray(this.repairProcedure);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the auto-repair policy.
   * 
   * @example
   * r-xxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the auto-repair policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of resources bound to the auto-repair policy.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The subtype of resource bound to the auto-repair policy.
   * 
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @remarks
   * The type of resource bound to the auto-repair policy.
   * 
   * @example
   * nodepool
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of auto-repair sub-rules.
   */
  rules?: ListAutoRepairPoliciesResponseBodyItemsRules[];
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      resourceIds: 'resource_ids',
      resourceSubType: 'resource_sub_type',
      resourceType: 'resource_type',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceSubType: 'string',
      resourceType: 'string',
      rules: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItemsRules },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoRepairPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The auto-repair policies.
   */
  items?: ListAutoRepairPoliciesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAutoRepairPoliciesResponseBodyItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

