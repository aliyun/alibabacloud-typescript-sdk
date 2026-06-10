// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRepairPolicyResponseBodyRulesIncidents extends $dara.Model {
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionApprovedLabel extends $dara.Model {
  /**
   * @remarks
   * The label\\"s `key`.
   * 
   * @example
   * k8s.aliyun.com/incident
   */
  key?: string;
  /**
   * @remarks
   * The label\\"s value.
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureIntervention extends $dara.Model {
  /**
   * @remarks
   * The label you add to a node to approve a repair action. When ACK detects this label, it proceeds with the current repair step. After the action is complete, ACK automatically removes both the inquiring and approved labels. If you do not add this label promptly, the repair procedure is paused, and the node may remain unhealthy.
   */
  approvedLabel?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionApprovedLabel;
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
   * When a repair procedure reaches this step, ACK applies this label to the affected node and pauses until you grant approval.
   */
  inquiringLabel?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionInquiringLabel;
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
      approvedLabel: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionApprovedLabel,
      enable: 'boolean',
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
  /**
   * @remarks
   * The configuration parameters for the repair action.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The manual approval configuration.
   */
  intervention?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureIntervention;
  /**
   * @remarks
   * The name of the repair action.
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
  /**
   * @remarks
   * The detected incidents that trigger the rule.
   */
  incidents?: DescribeAutoRepairPolicyResponseBodyRulesIncidents[];
  /**
   * @remarks
   * The repair procedure, which contains a list of repair actions.
   */
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
   * @remarks
   * The ID of the auto-repair rule.
   * 
   * @example
   * r-xxx
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
   * The IDs of resources affected by the auto-repair rule.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The subtype of the resource affected by the auto-repair rule.
   * 
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @remarks
   * The resource type affected by the auto-repair rule.
   * 
   * @example
   * nodepool
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of rules.
   */
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

