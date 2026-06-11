// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddonMetaDashboards extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述信息
   */
  description?: string;
  /**
   * @remarks
   * The name of the diagram.
   * 
   * @example
   * ECS 监控概览大盘
   */
  name?: string;
  /**
   * @remarks
   * The URL of the diagram.
   * 
   * @example
   * assets/dashboards/ecs.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMetaEnvironmentsCommonSchemaRefs extends $dara.Model {
  /**
   * @remarks
   * The group name of the CommonSchema.
   * 
   * @example
   * acs-ecs
   */
  group?: string;
  /**
   * @remarks
   * The group version of the CommonSchema.
   * 
   * @example
   * 0.1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMetaEnvironmentsDependencies extends $dara.Model {
  /**
   * @remarks
   * The supported cluster types.
   */
  clusterTypes?: string[];
  /**
   * @remarks
   * The probe dependency description. This is the component name. In later versions, this field is replaced by the collectors field.
   */
  features?: { [key: string]: boolean };
  /**
   * @remarks
   * The list of dependent services.
   */
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterTypes: 'clusterTypes',
      features: 'features',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypes: { 'type': 'array', 'itemType': 'string' },
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clusterTypes)) {
      $dara.Model.validateArray(this.clusterTypes);
    }
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMetaEnvironmentsPoliciesBindEntity extends $dara.Model {
  /**
   * @remarks
   * Indicates whether group mode is used.
   * 
   * @example
   * true/false
   */
  entityGroupMode?: boolean;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * acs.ecs.instance
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether single-entity mode is used.
   * 
   * @example
   * true/false
   */
  singleEntityMode?: boolean;
  /**
   * @remarks
   * The field in the entity from which to fetch the VPC ID.
   * 
   * @example
   * vpcId
   */
  vpcIdFieldKey?: string;
  static names(): { [key: string]: string } {
    return {
      entityGroupMode: 'entityGroupMode',
      entityType: 'entityType',
      singleEntityMode: 'singleEntityMode',
      vpcIdFieldKey: 'vpcIdFieldKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityGroupMode: 'boolean',
      entityType: 'string',
      singleEntityMode: 'boolean',
      vpcIdFieldKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMetaEnvironmentsPoliciesMetricCheckRule extends $dara.Model {
  /**
   * @remarks
   * The Prometheus Query Language (PromQL) for the check rule.
   */
  promQL?: string[];
  static names(): { [key: string]: string } {
    return {
      promQL: 'promQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promQL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.promQL)) {
      $dara.Model.validateArray(this.promQL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMetaEnvironmentsPoliciesProtocols extends $dara.Model {
  /**
   * @remarks
   * The description of the protocol.
   * 
   * @example
   * 使用 Prometheus 协议写入指标数据
   */
  description?: string;
  /**
   * @remarks
   * The display icon for the protocol.
   * 
   * @example
   * assets/logos/ecs.svg
   */
  icon?: string;
  /**
   * @remarks
   * The display name of the protocol.
   * 
   * @example
   * Prometheus 协议
   */
  label?: string;
  /**
   * @remarks
   * The name of the protocol.
   * 
   * @example
   * Prometheus
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      icon: 'icon',
      label: 'label',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMetaEnvironmentsPolicies extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alert rule is enabled by default after installation.
   * 
   * @example
   * RUNNING
   */
  alertDefaultStatus?: string;
  /**
   * @remarks
   * The default mode. This integration mode does not require attaching an entity.
   * 
   * @example
   * true/false
   */
  bindDefaultPolicy?: boolean;
  /**
   * @remarks
   * Information about the attached target entity.
   */
  bindEntity?: AddonMetaEnvironmentsPoliciesBindEntity;
  /**
   * @remarks
   * Indicates whether the component is installed by default.
   * 
   * @example
   * true/false
   */
  defaultInstall?: boolean;
  /**
   * @remarks
   * Indicates whether to enable internal authorization token allocation.
   * 
   * @example
   * true/false
   */
  enableServiceAccount?: boolean;
  /**
   * @remarks
   * The data check rule after the component is integrated.
   */
  metricCheckRule?: AddonMetaEnvironmentsPoliciesMetricCheckRule;
  /**
   * @remarks
   * Indicates whether to prompt for a workload restart after integration.
   * 
   * @example
   * true/false
   */
  needRestartAfterIntegration?: boolean;
  /**
   * @remarks
   * The list of supported client protocols.
   */
  protocols?: AddonMetaEnvironmentsPoliciesProtocols[];
  /**
   * @remarks
   * The name of the target component for redirection.
   * 
   * @example
   * cloud-acs-ecs
   */
  targetAddonName?: string;
  static names(): { [key: string]: string } {
    return {
      alertDefaultStatus: 'alertDefaultStatus',
      bindDefaultPolicy: 'bindDefaultPolicy',
      bindEntity: 'bindEntity',
      defaultInstall: 'defaultInstall',
      enableServiceAccount: 'enableServiceAccount',
      metricCheckRule: 'metricCheckRule',
      needRestartAfterIntegration: 'needRestartAfterIntegration',
      protocols: 'protocols',
      targetAddonName: 'targetAddonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDefaultStatus: 'string',
      bindDefaultPolicy: 'boolean',
      bindEntity: AddonMetaEnvironmentsPoliciesBindEntity,
      defaultInstall: 'boolean',
      enableServiceAccount: 'boolean',
      metricCheckRule: AddonMetaEnvironmentsPoliciesMetricCheckRule,
      needRestartAfterIntegration: 'boolean',
      protocols: { 'type': 'array', 'itemType': AddonMetaEnvironmentsPoliciesProtocols },
      targetAddonName: 'string',
    };
  }

  validate() {
    if(this.bindEntity && typeof (this.bindEntity as any).validate === 'function') {
      (this.bindEntity as any).validate();
    }
    if(this.metricCheckRule && typeof (this.metricCheckRule as any).validate === 'function') {
      (this.metricCheckRule as any).validate();
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMetaEnvironments extends $dara.Model {
  /**
   * @remarks
   * The list of attached CommonSchemas.
   */
  commonSchemaRefs?: AddonMetaEnvironmentsCommonSchemaRefs[];
  /**
   * @remarks
   * The dependency description.
   */
  dependencies?: AddonMetaEnvironmentsDependencies;
  /**
   * @remarks
   * The description of the environment type.
   * 
   * @example
   * 支持容器集群的工作覆盖监控
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the environment type is enabled.
   * 
   * @example
   * true/false
   */
  enable?: boolean;
  /**
   * @remarks
   * The display name of the environment type.
   * 
   * @example
   * 容器环境
   */
  label?: string;
  /**
   * @remarks
   * The name of the environment type.
   * 
   * @example
   * CS/ECS/Cloud/Client
   */
  name?: string;
  /**
   * @remarks
   * Information about the control policy group for the component.
   */
  policies?: AddonMetaEnvironmentsPolicies;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * ECS
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      commonSchemaRefs: 'commonSchemaRefs',
      dependencies: 'dependencies',
      description: 'description',
      enable: 'enable',
      label: 'label',
      name: 'name',
      policies: 'policies',
      policyType: 'policyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonSchemaRefs: { 'type': 'array', 'itemType': AddonMetaEnvironmentsCommonSchemaRefs },
      dependencies: AddonMetaEnvironmentsDependencies,
      description: 'string',
      enable: 'boolean',
      label: 'string',
      name: 'string',
      policies: AddonMetaEnvironmentsPolicies,
      policyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commonSchemaRefs)) {
      $dara.Model.validateArray(this.commonSchemaRefs);
    }
    if(this.dependencies && typeof (this.dependencies as any).validate === 'function') {
      (this.dependencies as any).validate();
    }
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonMeta extends $dara.Model {
  /**
   * @remarks
   * The alias of the component. This is the display name.
   * 
   * @example
   * ECS 监控
   */
  alias?: string;
  /**
   * @remarks
   * The categorization information of the component.
   */
  categories?: string[];
  /**
   * @remarks
   * A list of component diagrams.
   */
  dashboards?: AddonMetaDashboards[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * The out-of-the-box and comprehensive ECS observe dashboards and alarm rules. Based on AliYun CloudMonitor agentless metrics, exporter agent metrics, host audit logs, host events and other data.
   */
  description?: string;
  /**
   * @remarks
   * The list of supported environment types.
   */
  environments?: AddonMetaEnvironments[];
  /**
   * @remarks
   * The icon of the component.
   * 
   * @example
   * assets/logos/ecs.svg
   */
  icon?: string;
  /**
   * @remarks
   * The list of keywords.
   */
  keywords?: string[];
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - zh: Chinese (default)
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The last time the component was integrated.
   * 
   * @example
   * 2025-10-25 09:12:12
   */
  latestReleaseCreateTime?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * cloud-acs-ecs
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the component can be installed only once under a policy.
   * 
   * @example
   * true/false
   */
  once?: boolean;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * feature
   */
  scene?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  /**
   * @remarks
   * The sorting weight of the component.
   * 
   * @example
   * 1000
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      categories: 'categories',
      dashboards: 'dashboards',
      description: 'description',
      environments: 'environments',
      icon: 'icon',
      keywords: 'keywords',
      language: 'language',
      latestReleaseCreateTime: 'latestReleaseCreateTime',
      name: 'name',
      once: 'once',
      scene: 'scene',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      categories: { 'type': 'array', 'itemType': 'string' },
      dashboards: { 'type': 'array', 'itemType': AddonMetaDashboards },
      description: 'string',
      environments: { 'type': 'array', 'itemType': AddonMetaEnvironments },
      icon: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      latestReleaseCreateTime: 'string',
      name: 'string',
      once: 'boolean',
      scene: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.dashboards)) {
      $dara.Model.validateArray(this.dashboards);
    }
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

