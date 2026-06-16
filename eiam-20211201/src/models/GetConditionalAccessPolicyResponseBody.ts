// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigApplications extends $dara.Model {
  /**
   * @remarks
   * The excluded applications.
   */
  excludeApplications?: string[];
  /**
   * @remarks
   * The selected applications.
   */
  includeApplications?: string[];
  static names(): { [key: string]: string } {
    return {
      excludeApplications: 'ExcludeApplications',
      includeApplications: 'IncludeApplications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeApplications: { 'type': 'array', 'itemType': 'string' },
      includeApplications: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeApplications)) {
      $dara.Model.validateArray(this.excludeApplications);
    }
    if(Array.isArray(this.includeApplications)) {
      $dara.Model.validateArray(this.includeApplications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigNetworkZones extends $dara.Model {
  /**
   * @remarks
   * The excluded network zones.
   */
  excludeNetworkZones?: string[];
  /**
   * @remarks
   * The selected network zones.
   */
  includeNetworkZones?: string[];
  static names(): { [key: string]: string } {
    return {
      excludeNetworkZones: 'ExcludeNetworkZones',
      includeNetworkZones: 'IncludeNetworkZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeNetworkZones: { 'type': 'array', 'itemType': 'string' },
      includeNetworkZones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeNetworkZones)) {
      $dara.Model.validateArray(this.excludeNetworkZones);
    }
    if(Array.isArray(this.includeNetworkZones)) {
      $dara.Model.validateArray(this.includeNetworkZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigUsers extends $dara.Model {
  /**
   * @remarks
   * The excluded user groups.
   */
  excludeGroups?: string[];
  /**
   * @remarks
   * The excluded organizations.
   */
  excludeOrganizationalUnits?: string[];
  /**
   * @remarks
   * The excluded users.
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * The selected user groups.
   */
  includeGroups?: string[];
  /**
   * @remarks
   * The selected organizations.
   */
  includeOrganizationalUnits?: string[];
  /**
   * @remarks
   * The selected users.
   */
  includeUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      excludeGroups: 'ExcludeGroups',
      excludeOrganizationalUnits: 'ExcludeOrganizationalUnits',
      excludeUsers: 'ExcludeUsers',
      includeGroups: 'IncludeGroups',
      includeOrganizationalUnits: 'IncludeOrganizationalUnits',
      includeUsers: 'IncludeUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeGroups: { 'type': 'array', 'itemType': 'string' },
      excludeOrganizationalUnits: { 'type': 'array', 'itemType': 'string' },
      excludeUsers: { 'type': 'array', 'itemType': 'string' },
      includeGroups: { 'type': 'array', 'itemType': 'string' },
      includeOrganizationalUnits: { 'type': 'array', 'itemType': 'string' },
      includeUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludeGroups)) {
      $dara.Model.validateArray(this.excludeGroups);
    }
    if(Array.isArray(this.excludeOrganizationalUnits)) {
      $dara.Model.validateArray(this.excludeOrganizationalUnits);
    }
    if(Array.isArray(this.excludeUsers)) {
      $dara.Model.validateArray(this.excludeUsers);
    }
    if(Array.isArray(this.includeGroups)) {
      $dara.Model.validateArray(this.includeGroups);
    }
    if(Array.isArray(this.includeOrganizationalUnits)) {
      $dara.Model.validateArray(this.includeOrganizationalUnits);
    }
    if(Array.isArray(this.includeUsers)) {
      $dara.Model.validateArray(this.includeUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfig extends $dara.Model {
  /**
   * @remarks
   * The applications to which the conditional access policy applies.
   */
  applications?: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigApplications;
  /**
   * @remarks
   * The network zones of the conditional access policy.
   */
  networkZones?: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigNetworkZones;
  /**
   * @remarks
   * The users to whom the conditional access policy applies.
   */
  users?: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigUsers;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      networkZones: 'NetworkZones',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigApplications,
      networkZones: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigNetworkZones,
      users: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfigUsers,
    };
  }

  validate() {
    if(this.applications && typeof (this.applications as any).validate === 'function') {
      (this.applications as any).validate();
    }
    if(this.networkZones && typeof (this.networkZones as any).validate === 'function') {
      (this.networkZones as any).validate();
    }
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyDecisionConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether session reuse is enabled.
   * 
   * @example
   * enabled
   */
  activeSessionReuseStatus?: string;
  /**
   * @remarks
   * The decision action of the conditional access policy.
   * 
   * @example
   * allow
   */
  effect?: string;
  /**
   * @remarks
   * The interval in seconds at which re-authentication is required for the conditional access policy.
   * 
   * @example
   * 300
   */
  mfaAuthenticationIntervalSeconds?: number;
  /**
   * @remarks
   * The MFA methods that are allowed by the conditional access policy.
   */
  mfaAuthenticationMethods?: string[];
  /**
   * @remarks
   * The multi-factor authentication (MFA) type of the conditional access policy.
   * 
   * @example
   * directly_access
   */
  mfaType?: string;
  static names(): { [key: string]: string } {
    return {
      activeSessionReuseStatus: 'ActiveSessionReuseStatus',
      effect: 'Effect',
      mfaAuthenticationIntervalSeconds: 'MfaAuthenticationIntervalSeconds',
      mfaAuthenticationMethods: 'MfaAuthenticationMethods',
      mfaType: 'MfaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionReuseStatus: 'string',
      effect: 'string',
      mfaAuthenticationIntervalSeconds: 'number',
      mfaAuthenticationMethods: { 'type': 'array', 'itemType': 'string' },
      mfaType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mfaAuthenticationMethods)) {
      $dara.Model.validateArray(this.mfaAuthenticationMethods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConditionalAccessPolicyResponseBodyConditionalAccessPolicy extends $dara.Model {
  /**
   * @remarks
   * The ID of the conditional access policy.
   * 
   * @example
   * cp_xxxxx
   */
  conditionalAccessPolicyId?: string;
  /**
   * @remarks
   * The name of the conditional access policy.
   * 
   * @example
   * My policy
   */
  conditionalAccessPolicyName?: string;
  /**
   * @remarks
   * The type of the conditional access policy.
   * 
   * @example
   * arn:alibaba:idaas:authn:access:policy:system
   */
  conditionalAccessPolicyType?: string;
  /**
   * @remarks
   * The content of the conditional access policy.
   */
  conditionsConfig?: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfig;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 1741857554000
   */
  createTime?: number;
  /**
   * @remarks
   * The action of the conditional access policy.
   */
  decisionConfig?: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyDecisionConfig;
  /**
   * @remarks
   * The execution type of the conditional access policy.
   * 
   * @example
   * enforcement
   */
  decisionType?: string;
  /**
   * @remarks
   * The description of the conditional access policy.
   * 
   * @example
   * ga access port for ecs: internal-cn-hangzhou-docker-builder-2(i-bp19g1pheaailkk1xvr6)
   */
  description?: string;
  /**
   * @remarks
   * The policy enforcement point of the conditional access policy.
   * 
   * @example
   * arn:alibaba:idaas:authn:access:rule:eval_at:after_step1
   */
  evaluateAt?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_qnx6fbrinlecptl5hld23lfkvy
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the policy was last updated.
   * 
   * @example
   * 1741857554000
   */
  lastUpdatedTime?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The status of the conditional access policy.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      conditionalAccessPolicyId: 'ConditionalAccessPolicyId',
      conditionalAccessPolicyName: 'ConditionalAccessPolicyName',
      conditionalAccessPolicyType: 'ConditionalAccessPolicyType',
      conditionsConfig: 'ConditionsConfig',
      createTime: 'CreateTime',
      decisionConfig: 'DecisionConfig',
      decisionType: 'DecisionType',
      description: 'Description',
      evaluateAt: 'EvaluateAt',
      instanceId: 'InstanceId',
      lastUpdatedTime: 'LastUpdatedTime',
      priority: 'Priority',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionalAccessPolicyId: 'string',
      conditionalAccessPolicyName: 'string',
      conditionalAccessPolicyType: 'string',
      conditionsConfig: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyConditionsConfig,
      createTime: 'number',
      decisionConfig: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicyDecisionConfig,
      decisionType: 'string',
      description: 'string',
      evaluateAt: 'string',
      instanceId: 'string',
      lastUpdatedTime: 'number',
      priority: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.conditionsConfig && typeof (this.conditionsConfig as any).validate === 'function') {
      (this.conditionsConfig as any).validate();
    }
    if(this.decisionConfig && typeof (this.decisionConfig as any).validate === 'function') {
      (this.decisionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConditionalAccessPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the conditional access policy.
   */
  conditionalAccessPolicy?: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conditionalAccessPolicy: 'ConditionalAccessPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionalAccessPolicy: GetConditionalAccessPolicyResponseBodyConditionalAccessPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.conditionalAccessPolicy && typeof (this.conditionalAccessPolicy as any).validate === 'function') {
      (this.conditionalAccessPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

