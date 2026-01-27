// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRepairPolicyResponseBodyRulesIncidentsConditions extends $dara.Model {
  /**
   * @example
   * xxxx
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

export class DescribeAutoRepairPolicyResponseBodyRulesIncidentsEvents extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  reason?: string;
  /**
   * @example
   * xxxx
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

export class DescribeAutoRepairPolicyResponseBodyRulesIncidents extends $dara.Model {
  conditions?: DescribeAutoRepairPolicyResponseBodyRulesIncidentsConditions[];
  events?: DescribeAutoRepairPolicyResponseBodyRulesIncidentsEvents[];
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
      conditions: { 'type': 'array', 'itemType': DescribeAutoRepairPolicyResponseBodyRulesIncidentsConditions },
      events: { 'type': 'array', 'itemType': DescribeAutoRepairPolicyResponseBodyRulesIncidentsEvents },
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureIntervention extends $dara.Model {
  approvedLabel?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionApprovedLabel;
  /**
   * @example
   * true
   */
  enable?: string;
  inquiringLabel?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionInquiringLabel;
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
      approvedLabel: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionApprovedLabel,
      enable: 'string',
      inquiringLabel: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionInquiringLabel,
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedure extends $dara.Model {
  config?: { [key: string]: any };
  intervention?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureIntervention;
  /**
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
      intervention: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureIntervention,
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

export class DescribeAutoRepairPolicyResponseBodyRules extends $dara.Model {
  incidents?: DescribeAutoRepairPolicyResponseBodyRulesIncidents[];
  repairProcedure?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedure[];
  static names(): { [key: string]: string } {
    return {
      incidents: 'incidents',
      repairProcedure: 'repair_procedure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: { 'type': 'array', 'itemType': DescribeAutoRepairPolicyResponseBodyRulesIncidents },
      repairProcedure: { 'type': 'array', 'itemType': DescribeAutoRepairPolicyResponseBodyRulesRepairProcedure },
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

export class DescribeAutoRepairPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * r-xxx
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  resourceIds?: string[];
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
  rules?: DescribeAutoRepairPolicyResponseBodyRules[];
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
      rules: { 'type': 'array', 'itemType': DescribeAutoRepairPolicyResponseBodyRules },
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

