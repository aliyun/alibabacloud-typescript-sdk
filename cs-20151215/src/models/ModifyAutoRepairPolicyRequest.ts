// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRepairPolicyRequestRulesIncidents extends $dara.Model {
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

export class ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
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

export class ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
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
   * The label configuration for authorization confirmation. Add this label to the node to authorize ACK to proceed with this stage. After the stage completes, ACK automatically removes the inquiry and confirmation labels. If you do not add this label in time, ACK will not proceed with this or subsequent stages, leaving the node in an unhealthy state.
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
   * The label configuration for the authorization inquiry. At this stage, ACK adds this label to the node and waits for your authorization before proceeding.
   */
  inquiringLabel?: ModifyAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel;
  /**
   * @remarks
   * The approval type.
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
   * Configuration parameters for the procedure.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The configuration for the manual intervention procedure.
   */
  intervention?: ModifyAutoRepairPolicyRequestRulesRepairProcedureIntervention;
  /**
   * @remarks
   * The procedure name.
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
   * A list of identified incidents.
   */
  incidents?: ModifyAutoRepairPolicyRequestRulesIncidents[];
  /**
   * @remarks
   * A list of repair procedures.
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
   * A list of self-healing sub-rules.
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

