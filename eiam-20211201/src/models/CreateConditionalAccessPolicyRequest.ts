// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConditionalAccessPolicyRequestConditionsConfigApplications extends $dara.Model {
  /**
   * @remarks
   * Excluded applications
   */
  excludeApplications?: string[];
  /**
   * @remarks
   * Included applications
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

export class CreateConditionalAccessPolicyRequestConditionsConfigNetworkZones extends $dara.Model {
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

export class CreateConditionalAccessPolicyRequestConditionsConfigUsers extends $dara.Model {
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
   * Excluded users
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * Included user groups
   */
  includeGroups?: string[];
  /**
   * @remarks
   * Included organizations
   */
  includeOrganizationalUnits?: string[];
  /**
   * @remarks
   * Selected user
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

export class CreateConditionalAccessPolicyRequestConditionsConfig extends $dara.Model {
  /**
   * @remarks
   * Target applications for the conditional access policy
   */
  applications?: CreateConditionalAccessPolicyRequestConditionsConfigApplications;
  /**
   * @remarks
   * Network zones for conditional access policy
   */
  networkZones?: CreateConditionalAccessPolicyRequestConditionsConfigNetworkZones;
  /**
   * @remarks
   * Target users of the conditional access policy
   */
  users?: CreateConditionalAccessPolicyRequestConditionsConfigUsers;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      networkZones: 'NetworkZones',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: CreateConditionalAccessPolicyRequestConditionsConfigApplications,
      networkZones: CreateConditionalAccessPolicyRequestConditionsConfigNetworkZones,
      users: CreateConditionalAccessPolicyRequestConditionsConfigUsers,
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

export class CreateConditionalAccessPolicyRequestDecisionConfig extends $dara.Model {
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
   * Decision action for the conditional access policy, with the following options:
   * 
   * - allow: Allow.
   * - deny: Deny.
   * 
   * @example
   * allow or deny
   */
  effect?: string;
  /**
   * @remarks
   * Re-authentication interval (in seconds) for the conditional access policy
   * 
   * - Maximum MFA re-authentication interval: 86400
   * - Minimum MFA re-authentication interval: 300
   * 
   * @example
   * 500
   */
  mfaAuthenticationIntervalSeconds?: number;
  /**
   * @remarks
   * Allowed MFA types for the conditional access policy, with the following options:
   * - ia_otp_sms: SMS verification code
   * - ia_otp_email: Email verification code
   * - ia_totp: OTP dynamic password
   * - ia_webauthn: WebAuthn
   */
  mfaAuthenticationMethods?: string[];
  /**
   * @remarks
   * MFA type for the conditional access policy, with the following options:
   * 
   * - directly_access: Direct access
   * - mfa_required: MFA required
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

export class CreateConditionalAccessPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Idempotent token.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * Conditional access policy name
   * 
   * This parameter is required.
   * 
   * @example
   * My Conditional Access Policy
   */
  conditionalAccessPolicyName?: string;
  /**
   * @remarks
   * Type of the conditional access policy, with the following options:
   * 
   * arn:alibaba:idaas:authn:access:policy:system: System policy.
   * 
   * This parameter is required.
   * 
   * @example
   * arn:alibaba:idaas:authn:access:policy:system
   */
  conditionalAccessPolicyType?: string;
  /**
   * @remarks
   * Condition content configuration for the conditional access policy
   */
  conditionsConfig?: CreateConditionalAccessPolicyRequestConditionsConfig;
  /**
   * @remarks
   * Action configuration for the conditional access policy
   */
  decisionConfig?: CreateConditionalAccessPolicyRequestDecisionConfig;
  /**
   * @remarks
   * Execution type of the conditional access policy, with the following options:
   * 
   * enforcement: Enforce the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * enforcement
   */
  decisionType?: string;
  /**
   * @remarks
   * Description of the conditional access policy
   * 
   * @example
   * Test Description
   */
  description?: string;
  /**
   * @remarks
   * Execution point of the conditional access policy, with the following options:
   * 
   * - arn:alibaba:idaas:authn:access:rule:eval_at:after_step1: Allow.
   * 
   * This parameter is required.
   * 
   * @example
   * arn:alibaba:idaas:authn:access:rule:eval_at:after_step1
   */
  evaluateAt?: string;
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
   * Priority of the conditional access policy, lower values indicate higher priority
   * Minimum value: 1
   * Maximum value: 100
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      conditionalAccessPolicyName: 'ConditionalAccessPolicyName',
      conditionalAccessPolicyType: 'ConditionalAccessPolicyType',
      conditionsConfig: 'ConditionsConfig',
      decisionConfig: 'DecisionConfig',
      decisionType: 'DecisionType',
      description: 'Description',
      evaluateAt: 'EvaluateAt',
      instanceId: 'InstanceId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      conditionalAccessPolicyName: 'string',
      conditionalAccessPolicyType: 'string',
      conditionsConfig: CreateConditionalAccessPolicyRequestConditionsConfig,
      decisionConfig: CreateConditionalAccessPolicyRequestDecisionConfig,
      decisionType: 'string',
      description: 'string',
      evaluateAt: 'string',
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

