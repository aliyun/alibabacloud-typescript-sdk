// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoRepairPolicyRequestRulesIncidents extends $dara.Model {
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
   * The incident type.
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
   * The label key.
   * 
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @remarks
   * The label value.
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
   * The label key.
   * 
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @remarks
   * The label value.
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
   * The label that grants authorization for the repair step. To approve the step, add this label to the node. After the action is complete, ACK automatically removes both the inquiry and approval labels for this step. If this label is not added promptly, the repair procedure halts and the node remains impaired.
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
   * The label used to request authorization for the repair step. When this step begins, ACK applies this label to the node and waits for approval before performing the action.
   */
  inquiringLabel?: CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel;
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
   * Configuration parameters for the repair step.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * Settings for manual intervention.
   */
  intervention?: CreateAutoRepairPolicyRequestRulesRepairProcedureIntervention;
  /**
   * @remarks
   * The name of the repair step.
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
   * The incidents that the rule detects.
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
   * The name of the auto repair policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The resource subtype to which the auto repair policy applies.
   * 
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @remarks
   * The resource type to which the auto repair policy applies.
   * 
   * @example
   * nodepool
   */
  resourceType?: string;
  /**
   * @remarks
   * The sub-rules for the auto repair policy.
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

