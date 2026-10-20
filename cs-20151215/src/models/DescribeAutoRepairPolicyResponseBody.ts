// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRepairPolicyResponseBodyRulesIncidents extends $dara.Model {
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
   * The type of the incident.
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
   * The `key` of the label.
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionInquiringLabel extends $dara.Model {
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

export class DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureIntervention extends $dara.Model {
  /**
   * @remarks
   * The label configuration for authorization confirmation. Adding the following labels to the node indicates that you authorize ACK to execute the operations in this stage. After completing the operations in this stage, ACK automatically removes the authorization inquiry and confirmation labels for this stage. If you do not add the following labels promptly, ACK will not execute the actions in this stage and subsequent stages, and the node may remain in a damaged state.
   */
  approvedLabel?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionApprovedLabel;
  /**
   * @remarks
   * Indicates whether manual approval is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The label configuration for authorization inquiry. When this stage is reached, ACK adds the following labels to your node and waits for your authorization to execute the actions in this stage.
   */
  inquiringLabel?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureInterventionInquiringLabel;
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
   * The configuration parameters of the procedure.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The configuration of the manual intervention procedure.
   */
  intervention?: DescribeAutoRepairPolicyResponseBodyRulesRepairProcedureIntervention;
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
   * The list of identified incidents.
   */
  incidents?: DescribeAutoRepairPolicyResponseBodyRulesIncidents[];
  /**
   * @remarks
   * The repair procedure.
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
   * The self-healing rule ID.
   * 
   * @example
   * r-xxx
   */
  id?: string;
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
   * The list of resources bound to the self-healing rule.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The subtype of the resource bound to the self-healing rule.
   * 
   * @example
   * ess
   */
  resourceSubType?: string;
  /**
   * @remarks
   * The type of resource bound to the self-healing rule.
   * 
   * @example
   * nodepool
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of self-healing sub-rules.
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

