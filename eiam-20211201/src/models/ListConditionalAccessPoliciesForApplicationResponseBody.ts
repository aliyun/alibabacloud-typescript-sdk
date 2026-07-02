// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigApplications extends $dara.Model {
  /**
   * @remarks
   * Excluded applications.
   */
  excludeApplications?: string[];
  /**
   * @remarks
   * Included applications.
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

export class ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigNetworkZones extends $dara.Model {
  /**
   * @remarks
   * Excluded network zones.
   */
  excludeNetworkZones?: string[];
  /**
   * @remarks
   * Included network zones.
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

export class ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigUsers extends $dara.Model {
  /**
   * @remarks
   * Excluded groups.
   */
  excludeGroups?: string[];
  /**
   * @remarks
   * Excluded organizational units.
   */
  excludeOrganizationalUnits?: string[];
  /**
   * @remarks
   * Excluded users.
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * Included groups.
   */
  includeGroups?: string[];
  /**
   * @remarks
   * Included organizational units.
   */
  includeOrganizationalUnits?: string[];
  /**
   * @remarks
   * Included users.
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

export class ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfig extends $dara.Model {
  /**
   * @remarks
   * Conditional access policy target applications.
   */
  applications?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigApplications;
  /**
   * @remarks
   * Conditional access policy network zones.
   */
  networkZones?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigNetworkZones;
  /**
   * @remarks
   * Conditional access policy target users.
   */
  users?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigUsers;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      networkZones: 'NetworkZones',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigApplications,
      networkZones: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigNetworkZones,
      users: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigUsers,
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

export class ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesDecisionConfig extends $dara.Model {
  /**
   * @remarks
   * Whether session reuse is enabled.
   * 
   * @example
   * disabled
   */
  activeSessionReuseStatus?: string;
  /**
   * @remarks
   * Conditional access policy decision action.
   * 
   * @example
   * allow
   */
  effect?: string;
  /**
   * @remarks
   * Conditional access policy re-authentication interval (seconds).
   * 
   * @example
   * 300
   */
  mfaAuthenticationIntervalSeconds?: number;
  /**
   * @remarks
   * Collection of MFA authentication methods allowed by the conditional access policy.
   */
  mfaAuthenticationMethods?: string[];
  /**
   * @remarks
   * Conditional access policy MFA type.
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

export class ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPolicies extends $dara.Model {
  /**
   * @remarks
   * Conditional access policy ID.
   * 
   * @example
   * cap_m5etun43kejxphsbke6mjxxxxx
   */
  conditionalAccessPolicyId?: string;
  /**
   * @remarks
   * Conditional access policy name.
   * 
   * @example
   * myPolicy
   */
  conditionalAccessPolicyName?: string;
  /**
   * @remarks
   * Conditional access policy type.
   * 
   * @example
   * arn:alibaba:idaas:authn:access:policy:system
   */
  conditionalAccessPolicyType?: string;
  /**
   * @remarks
   * Conditional access policy conditions.
   */
  conditionsConfig?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfig;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1741857554000
   */
  createTime?: number;
  /**
   * @remarks
   * Conditional access policy decision configuration.
   */
  decisionConfig?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesDecisionConfig;
  /**
   * @remarks
   * Conditional access policy decision type.
   * 
   * @example
   * enforcement
   */
  decisionType?: string;
  /**
   * @remarks
   * Conditional access policy description.
   * 
   * @example
   * policyTest
   */
  description?: string;
  /**
   * @remarks
   * Conditional access policy evaluation point.
   * 
   * @example
   * arn:alibaba:idaas:authn:access:rule:eval_at:after_step1
   */
  evaluateAt?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_oynbcyaaejuik6b37eldzxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Last updated time.
   * 
   * @example
   * 1741857554000
   */
  lastUpdatedTime?: number;
  /**
   * @remarks
   * Priority.
   * 
   * @example
   * 100
   */
  priority?: number;
  /**
   * @remarks
   * Enabled or disabled status of the conditional access policy.
   * 
   * @example
   * disabled
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
      conditionsConfig: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfig,
      createTime: 'number',
      decisionConfig: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesDecisionConfig,
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

export class ListConditionalAccessPoliciesForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Collection of conditional access policies.
   */
  conditionalAccessPolicies?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPolicies[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conditionalAccessPolicies: 'ConditionalAccessPolicies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionalAccessPolicies: { 'type': 'array', 'itemType': ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPolicies },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionalAccessPolicies)) {
      $dara.Model.validateArray(this.conditionalAccessPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

