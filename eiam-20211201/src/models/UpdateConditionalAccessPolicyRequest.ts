// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConditionalAccessPolicyRequestConditionsConfigApplications extends $dara.Model {
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

export class UpdateConditionalAccessPolicyRequestConditionsConfigNetworkZones extends $dara.Model {
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

export class UpdateConditionalAccessPolicyRequestConditionsConfigUsers extends $dara.Model {
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

export class UpdateConditionalAccessPolicyRequestConditionsConfig extends $dara.Model {
  /**
   * @remarks
   * The target applications of the conditional access policy.
   */
  applications?: UpdateConditionalAccessPolicyRequestConditionsConfigApplications;
  /**
   * @remarks
   * The network zones of the conditional access policy.
   */
  networkZones?: UpdateConditionalAccessPolicyRequestConditionsConfigNetworkZones;
  /**
   * @remarks
   * The target users of the conditional access policy.
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
   * Indicates whether to enable session reuse.
   * 
   * @example
   * enabled
   */
  activeSessionReuseStatus?: string;
  /**
   * @remarks
   * The action of the conditional access policy.
   * 
   * @example
   * allow
   */
  effect?: string;
  /**
   * @remarks
   * The interval at which the conditional access policy is repeatedly authenticated. Unit: seconds.
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

export class UpdateConditionalAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates the value of this parameter to ensure that the value is unique among different requests.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the conditional access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * cap_11111
   */
  conditionalAccessPolicyId?: string;
  /**
   * @remarks
   * The name of the conditional access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * My conditional access policy
   */
  conditionalAccessPolicyName?: string;
  /**
   * @remarks
   * The condition configuration of the conditional access policy.
   */
  conditionsConfig?: UpdateConditionalAccessPolicyRequestConditionsConfig;
  /**
   * @remarks
   * The action configuration of the conditional access policy.
   */
  decisionConfig?: UpdateConditionalAccessPolicyRequestDecisionConfig;
  /**
   * @remarks
   * The action that is performed by the conditional access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * reportOnly
   */
  decisionType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The priority of the conditional access policy.
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

