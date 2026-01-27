// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoRepairPolicyRequestRulesIncidentsConditions extends $dara.Model {
  /**
   * @example
   * xxx
   */
  reason?: string;
  /**
   * @example
   * False
   */
  status?: string;
  /**
   * @example
   * KubeletReady
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
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

export class CreateAutoRepairPolicyRequestRulesIncidentsEvents extends $dara.Model {
  /**
   * @example
   * xxx
   */
  reason?: string;
  /**
   * @example
   * xxx
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
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

export class CreateAutoRepairPolicyRequestRulesIncidents extends $dara.Model {
  conditions?: CreateAutoRepairPolicyRequestRulesIncidentsConditions[];
  events?: CreateAutoRepairPolicyRequestRulesIncidentsEvents[];
  /**
   * @example
   * Node.FaultNeedReboot.HOST
   */
  name?: string;
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      events: 'events',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': CreateAutoRepairPolicyRequestRulesIncidentsConditions },
      events: { 'type': 'array', 'itemType': CreateAutoRepairPolicyRequestRulesIncidentsEvents },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
  /**
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
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
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
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
  approvedLabel?: CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionApprovedLabel;
  /**
   * @example
   * true
   */
  enable?: boolean;
  inquiringLabel?: CreateAutoRepairPolicyRequestRulesRepairProcedureInterventionInquiringLabel;
  /**
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
  config?: { [key: string]: any };
  intervention?: CreateAutoRepairPolicyRequestRulesRepairProcedureIntervention;
  /**
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
  incidents?: CreateAutoRepairPolicyRequestRulesIncidents[];
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
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @example
   * nodepool
   */
  resourceType?: string;
  /**
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

