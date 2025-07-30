// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConditionalAccessPolicyRequestConditionsConfigApplications extends $dara.Model {
  /**
   * @remarks
   * Excluded Applications
   */
  excludeApplications?: string[];
  /**
   * @remarks
   * Included Applications
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

export class UpdateConditionalAccessPolicyRequestConditionsConfigNetworkZones extends $dara.Model {
  /**
   * @remarks
   * Excluded network zones
   */
  excludeNetworkZones?: string[];
  /**
   * @remarks
   * Included network zones
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

export class UpdateConditionalAccessPolicyRequestConditionsConfigUsers extends $dara.Model {
  /**
   * @remarks
   * Excluded user groups
   */
  excludeGroups?: string[];
  /**
   * @remarks
   * Excluded organizations
   */
  excludeOrganizationalUnits?: string[];
  /**
   * @remarks
   * Excluded Users
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * Included User Groups
   */
  includeGroups?: string[];
  /**
   * @remarks
   * Included organizations
   */
  includeOrganizationalUnits?: string[];
  /**
   * @remarks
   * Included Users
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

export class UpdateConditionalAccessPolicyRequestConditionsConfig extends $dara.Model {
  /**
   * @remarks
   * Target Applications for the Conditional Access Policy
   */
  applications?: UpdateConditionalAccessPolicyRequestConditionsConfigApplications;
  /**
   * @remarks
   * Network zones for conditional access policy
   */
  networkZones?: UpdateConditionalAccessPolicyRequestConditionsConfigNetworkZones;
  /**
   * @remarks
   * Target Users for the Conditional Access Policy
   */
  users?: UpdateConditionalAccessPolicyRequestConditionsConfigUsers;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      networkZones: 'NetworkZones',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: UpdateConditionalAccessPolicyRequestConditionsConfigApplications,
      networkZones: UpdateConditionalAccessPolicyRequestConditionsConfigNetworkZones,
      users: UpdateConditionalAccessPolicyRequestConditionsConfigUsers,
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

export class UpdateConditionalAccessPolicyRequestDecisionConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to enable session reuse
   * 
   * @example
   * enabled
   */
  activeSessionReuseStatus?: string;
  /**
   * @remarks
   * Conditional Access Policy Decision Action
   * 
   * @example
   * allow
   */
  effect?: string;
  /**
   * @remarks
   * Conditional Access Policy Re-authentication Interval (seconds)
   * 
   * @example
   * 300
   */
  mfaAuthenticationIntervalSeconds?: number;
  /**
   * @remarks
   * Allowed MFA types for the Conditional Access Policy
   */
  mfaAuthenticationMethods?: string[];
  /**
   * @remarks
   * Conditional Access Policy MFA Type
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

export class UpdateConditionalAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Conditional Access Policy ID
   * 
   * This parameter is required.
   * 
   * @example
   * cap_11111
   */
  conditionalAccessPolicyId?: string;
  /**
   * @remarks
   * Conditional Access Policy Name
   * 
   * This parameter is required.
   * 
   * @example
   * My Policy
   */
  conditionalAccessPolicyName?: string;
  /**
   * @remarks
   * Conditional Access Policy Condition Content Configuration
   */
  conditionsConfig?: UpdateConditionalAccessPolicyRequestConditionsConfig;
  /**
   * @remarks
   * Conditional Access Policy Action Configuration
   */
  decisionConfig?: UpdateConditionalAccessPolicyRequestDecisionConfig;
  /**
   * @remarks
   * Conditional Access Policy Execution Type
   * 
   * This parameter is required.
   * 
   * @example
   * enforcement
   */
  decisionType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Priority of the conditional access policy
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      conditionalAccessPolicyId: 'ConditionalAccessPolicyId',
      conditionalAccessPolicyName: 'ConditionalAccessPolicyName',
      conditionsConfig: 'ConditionsConfig',
      decisionConfig: 'DecisionConfig',
      decisionType: 'DecisionType',
      instanceId: 'InstanceId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      conditionalAccessPolicyId: 'string',
      conditionalAccessPolicyName: 'string',
      conditionsConfig: UpdateConditionalAccessPolicyRequestConditionsConfig,
      decisionConfig: UpdateConditionalAccessPolicyRequestDecisionConfig,
      decisionType: 'string',
      instanceId: 'string',
      priority: 'number',
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

