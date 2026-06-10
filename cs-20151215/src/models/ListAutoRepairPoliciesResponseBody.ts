// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoRepairPoliciesResponseBodyItemsRulesIncidents extends $dara.Model {
  /**
   * @remarks
   * The incident name.
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
   * The key of the label.
   * 
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
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
   * The key of the label.
   * 
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
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
   * The configuration for the approval label. Applying this label to the node authorizes Container Service for Kubernetes (ACK) to execute the action for this repair step. After the step is complete, ACK automatically removes both the inquiry and approval labels. If the approval label is not applied promptly, the repair process will not proceed, and the node may remain in an unhealthy state.
   */
  approvedLabel?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionApprovedLabel;
  /**
   * @remarks
   * Determines whether manual approval is required for the repair step.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The configuration for the authorization inquiry label. When this repair step starts, Container Service for Kubernetes (ACK) applies this label to the node and pauses, awaiting approval before executing the step\\"s action.
   */
  inquiringLabel?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureInterventionInquiringLabel;
  /**
   * @remarks
   * The manual approval type.
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
   * The configuration parameters for the procedure step.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The manual intervention settings for this procedure step.
   */
  intervention?: ListAutoRepairPoliciesResponseBodyItemsRulesRepairProcedureIntervention;
  /**
   * @remarks
   * The name of the procedure step.
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
   * A list of identified incidents.
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
   * The ID of the auto-repair rule.
   * 
   * @example
   * r-xxxxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the auto-repair rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the resources that the auto-repair rule affects.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource sub-type that the auto-repair rule affects.
   * 
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @remarks
   * The resource type that the auto-repair rule affects.
   * 
   * @example
   * nodepool
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of auto-repair sub-rules.
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
   * A list of auto-repair rules.
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

