// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRepairPolicyRequestRulesIncidents extends $dara.Model {
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
   * The type of manual approval.
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

export class ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
  /**
   * @remarks
   * The key value of the label.
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

export class ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
  /**
   * @remarks
   * The key value of the label.
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

export class ModifyAutoRepairPolicyRequestRulesRepairProcedureIntervention extends $dara.Model {
  /**
   * @remarks
   * The label configuration for authorization confirmation. When you add the following labels to the node, you authorize ACK to execute the operation for this stage. After completing the operation for this stage, ACK automatically removes the authorization inquiry and authorization confirmation labels corresponding to this stage. If you do not promptly add the following labels to grant authorization, ACK will not execute the action for this stage and subsequent actions, and the node may remain in a damaged state.
   */
  approvedLabel?: ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel;
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
   * The label configuration for authorization inquiry. When this stage is reached, ACK adds the following labels to your node and waits for your authorization to execute the action for this stage.
   */
  inquiringLabel?: ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel;
  /**
   * @remarks
   * The type of approval.
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
      approvedLabel: ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel,
      enable: 'boolean',
      inquiringLabel: ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel,
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

export class ModifyAutoRepairPolicyRequestRulesRepairProcedure extends $dara.Model {
  /**
   * @remarks
   * The parameter settings of the flow.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The configuration for the manual intervention procedure.
   */
  intervention?: ModifyAutoRepairPolicyRequestRulesRepairProcedureIntervention;
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
      intervention: ModifyAutoRepairPolicyRequestRulesRepairProcedureIntervention,
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

export class ModifyAutoRepairPolicyRequestRules extends $dara.Model {
  /**
   * @remarks
   * The list of identified faults.
   */
  incidents?: ModifyAutoRepairPolicyRequestRulesIncidents[];
  /**
   * @remarks
   * The repair procedure.
   */
  repairProcedure?: ModifyAutoRepairPolicyRequestRulesRepairProcedure[];
  static names(): { [key: string]: string } {
    return {
      incidents: 'incidents',
      repairProcedure: 'repair_procedure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: { 'type': 'array', 'itemType': ModifyAutoRepairPolicyRequestRulesIncidents },
      repairProcedure: { 'type': 'array', 'itemType': ModifyAutoRepairPolicyRequestRulesRepairProcedure },
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

export class ModifyAutoRepairPolicyRequest extends $dara.Model {
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
   * The list of self-healing sub-rules.
   */
  rules?: ModifyAutoRepairPolicyRequestRules[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rules: { 'type': 'array', 'itemType': ModifyAutoRepairPolicyRequestRules },
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

