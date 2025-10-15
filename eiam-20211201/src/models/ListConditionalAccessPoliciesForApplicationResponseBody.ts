// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigApplications extends $dara.Model {
  /**
   * @remarks
   * 排除的应用
   */
  excludeApplications?: string[];
  /**
   * @remarks
   * 选择的应用
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
   * 排除的网络区域
   */
  excludeNetworkZones?: string[];
  /**
   * @remarks
   * 选择的网络区域
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
   * 排除的用户组
   */
  excludeGroups?: string[];
  /**
   * @remarks
   * 排除的组织
   */
  excludeOrganizationalUnits?: string[];
  /**
   * @remarks
   * 排除的用户
   */
  excludeUsers?: string[];
  /**
   * @remarks
   * 选择的用户组
   */
  includeGroups?: string[];
  /**
   * @remarks
   * 选择的组织
   */
  includeOrganizationalUnits?: string[];
  /**
   * @remarks
   * 选择的用户
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
   * 条件访问策略目标应用
   */
  applications?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigApplications;
  /**
   * @remarks
   * 条件访问策略网络区域
   */
  networkZones?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfigNetworkZones;
  /**
   * @remarks
   * 条件访问策略目标用户
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
   * @example
   * disabled
   */
  activeSessionReuseStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略决策Action
   * 
   * @example
   * allow
   */
  effect?: string;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略重复认证时间间隔(秒)
   * 
   * @example
   * 300
   */
  mfaAuthenticationIntervalSeconds?: number;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略允许使用的mfa类型
   */
  mfaAuthenticationMethods?: string[];
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略Mfa类型
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
   * IDaaS EIAM 条件访问策略Id
   * 
   * @example
   * cap_m5etun43kejxphsbke6mjxxxxx
   */
  conditionalAccessPolicyId?: string;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略名称
   */
  conditionalAccessPolicyName?: string;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略类型
   * 
   * @example
   * arn:alibaba:idaas:authn:access:policy:system
   */
  conditionalAccessPolicyType?: string;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略内容
   */
  conditionsConfig?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesConditionsConfig;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1741857554000
   */
  createTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略执行Action
   */
  decisionConfig?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPoliciesDecisionConfig;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略执行类型
   * 
   * @example
   * enforcement
   */
  decisionType?: string;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略描述
   */
  description?: string;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略执行点
   * 
   * @example
   * arn:alibaba:idaas:authn:access:rule:eval_at:after_step1
   */
  evaluateAt?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_oynbcyaaejuik6b37eldzxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1741857554000
   */
  lastUpdatedTime?: number;
  /**
   * @remarks
   * 优先级
   * 
   * @example
   * 100
   */
  priority?: number;
  /**
   * @remarks
   * IDaaS EIAM 条件访问策略启用禁用状态
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
  conditionalAccessPolicies?: ListConditionalAccessPoliciesForApplicationResponseBodyConditionalAccessPolicies[];
  /**
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

