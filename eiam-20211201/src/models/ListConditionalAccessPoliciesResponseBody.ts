// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigApplications extends $dara.Model {
  /**
   * @remarks
   * The excluded applications.
   */
  excludeApplications?: string[];
  /**
   * @remarks
   * The included applications.
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

export class ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigNetworkZones extends $dara.Model {
  /**
   * @remarks
   * The excluded network zones.
   */
  excludeNetworkZones?: string[];
  /**
   * @remarks
   * The included network zones.
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

export class ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigUsers extends $dara.Model {
  /**
   * @remarks
   * The excluded user groups.
   */
  excludeGroups?: string[];
  /**
   * @remarks
   * The excluded organizational units.
   */
  excludeOrganizationalUnits?: string[];
  /**
   * @remarks
   * The excluded users.
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * The included user groups.
   */
  includeGroups?: string[];
  /**
   * @remarks
   * The included organizational units.
   */
  includeOrganizationalUnits?: string[];
  /**
   * @remarks
   * The included users.
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

export class ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfig extends $dara.Model {
  /**
   * @remarks
   * The target applications of the conditional access policy.
   */
  applications?: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigApplications;
  /**
   * @remarks
   * The network zones of the conditional access policy.
   */
  networkZones?: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigNetworkZones;
  /**
   * @remarks
   * The target users of the conditional access policy.
   */
  users?: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigUsers;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      networkZones: 'NetworkZones',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigApplications,
      networkZones: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigNetworkZones,
      users: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfigUsers,
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

export class ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesDecisionConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether secondary authentication session reuse is enabled.
   * 
   * @example
   * disabled
   */
  activeSessionReuseStatus?: string;
  /**
   * @remarks
   * The decision action of the conditional access policy. Valid values:
   * - deny: Deny.
   * - allow: Allow.
   * 
   * @example
   * deny
   */
  effect?: string;
  /**
   * @remarks
   * The MFA re-authentication interval of the conditional access policy, in seconds. Valid values: 300 to 86400.
   * 
   * @example
   * 300
   */
  mfaAuthenticationIntervalSeconds?: number;
  /**
   * @remarks
   * The MFA methods allowed by the conditional access policy.
   */
  mfaAuthenticationMethods?: string[];
  /**
   * @remarks
   * The MFA type of the conditional access policy.
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

export class ListConditionalAccessPoliciesResponseBodyConditionalAccessPolicies extends $dara.Model {
  /**
   * @remarks
   * The conditional access policy ID.
   * 
   * @example
   * cp_xxxxx
   */
  conditionalAccessPolicyId?: string;
  /**
   * @remarks
   * The Policy Name of the conditional access policy.
   * 
   * @example
   * MyPolicy
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
   * The conditions configuration of the conditional access policy.
   */
  conditionsConfig?: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfig;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1741857554000
   */
  createTime?: number;
  /**
   * @remarks
   * The decision action configuration of the conditional access policy.
   */
  decisionConfig?: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesDecisionConfig;
  /**
   * @remarks
   * The decision type of the conditional access policy.
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
   * My policy description
   */
  description?: string;
  /**
   * @remarks
   * The evaluation point of the conditional access policy.
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
   * idaas_ksvv5c7f2l6uzh6oqspeks23ni
   */
  instanceId?: string;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1741857554000
   */
  lastUpdatedTime?: number;
  /**
   * @remarks
   * The priority. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The enabled or disabled status of the conditional access policy.
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
      conditionsConfig: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesConditionsConfig,
      createTime: 'number',
      decisionConfig: ListConditionalAccessPoliciesResponseBodyConditionalAccessPoliciesDecisionConfig,
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

export class ListConditionalAccessPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of conditional access policies.
   */
  conditionalAccessPolicies?: ListConditionalAccessPoliciesResponseBodyConditionalAccessPolicies[];
  /**
   * @remarks
   * The query token (Token) value returned by this call.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token for the previous page.
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      conditionalAccessPolicies: 'ConditionalAccessPolicies',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionalAccessPolicies: { 'type': 'array', 'itemType': ListConditionalAccessPoliciesResponseBodyConditionalAccessPolicies },
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
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

