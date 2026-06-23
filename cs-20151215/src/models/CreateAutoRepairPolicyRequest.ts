// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoRepairPolicyRequestRulesIncidents extends $dara.Model {
  /**
   * @remarks
   * The name of the fault.
   * 
   * @example
   * Node.FaultNeedReboot.HOST
   */
  name?: string;
  /**
   * @remarks
   * The type of the fault.
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

export class CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
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

export class CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
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

export class CreateAutoRepairPolicyRequestRulesRepairProcedureIntervention extends $dara.Model {
  /**
   * @remarks
   * The label configuration for authorization confirmation. When you add the following label to the node, you authorize ACK to execute the action in this stage. After completing the action in this stage, ACK automatically removes the authorization inquiry and authorization confirmation labels for this stage. If you do not add the following label to authorize the action promptly, ACK does not execute the action in this stage or subsequent actions, and the node may remain in a damaged state.
   */
  approvedLabel?: CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel;
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
   * The label configuration for authorization inquiry. When this stage is reached, ACK adds the following label to your node and waits for you to authorize the execution of the action in this stage.
   */
  inquiringLabel?: CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel;
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
      approvedLabel: CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel,
      enable: 'boolean',
      inquiringLabel: CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel,
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

export class CreateAutoRepairPolicyRequestRulesRepairProcedure extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters of the repair procedure.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The configuration for manual intervention in the procedure.
   */
  intervention?: CreateAutoRepairPolicyRequestRulesRepairProcedureIntervention;
  /**
   * @remarks
   * The name of the procedure.
   * 
   * @example
   * Drain
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
      intervention: CreateAutoRepairPolicyRequestRulesRepairProcedureIntervention,
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

export class CreateAutoRepairPolicyRequestRules extends $dara.Model {
  /**
   * @remarks
   * The list of identified faults.
   */
  incidents?: CreateAutoRepairPolicyRequestRulesIncidents[];
  /**
   * @remarks
   * The repair procedure.
   */
  repairProcedure?: CreateAutoRepairPolicyRequestRulesRepairProcedure[];
  static names(): { [key: string]: string } {
    return {
      incidents: 'incidents',
      repairProcedure: 'repair_procedure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: { 'type': 'array', 'itemType': CreateAutoRepairPolicyRequestRulesIncidents },
      repairProcedure: { 'type': 'array', 'itemType': CreateAutoRepairPolicyRequestRulesRepairProcedure },
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

export class CreateAutoRepairPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the self-healing rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The resource subtype that the self-healing rule can be bound to.
   * 
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @remarks
   * The resource type that the self-healing rule can be bound to.
   * 
   * @example
   * nodepool
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of self-healing sub-rules.
   * 
   * @example
   * ["np-xxx"]
   */
  rules?: CreateAutoRepairPolicyRequestRules[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceSubType: 'resource_sub_type',
      resourceType: 'resource_type',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceSubType: 'string',
      resourceType: 'string',
      rules: { 'type': 'array', 'itemType': CreateAutoRepairPolicyRequestRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

