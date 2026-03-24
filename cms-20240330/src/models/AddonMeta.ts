// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddonMetaDashboards extends $dara.Model {
  /**
   * @remarks
   * 描述信息
   * 
   * @example
   * 描述信息
   */
  description?: string;
  /**
   * @remarks
   * 示意图名称
   * 
   * @example
   * ECS 监控概览大盘
   */
  name?: string;
  /**
   * @remarks
   * 示意图 URL
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
   * CommonSchema 的分组名称
   * 
   * @example
   * acs-ecs
   */
  group?: string;
  /**
   * @remarks
   * CommonSchema 的分组版本
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
   * 支持的集群类型
   */
  clusterTypes?: string[];
  /**
   * @remarks
   * 探针依赖描述，组件名称。新版已由 collectors 字段替换
   */
  features?: { [key: string]: boolean };
  /**
   * @remarks
   * 依赖的服务列表
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
   * 是否是组模式
   * 
   * @example
   * true/false
   */
  entityGroupMode?: boolean;
  /**
   * @remarks
   * 实体类型
   * 
   * @example
   * acs.ecs.instance
   */
  entityType?: string;
  /**
   * @remarks
   * 是否是单实体模式
   * 
   * @example
   * true/false
   */
  singleEntityMode?: boolean;
  /**
   * @remarks
   * 实体中提取VPC ID 信息的字段
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
   * 检测规则 PromQL
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
   * 协议描述
   * 
   * @example
   * 使用 Prometheus 协议写入指标数据
   */
  description?: string;
  /**
   * @remarks
   * 协议显示icon
   * 
   * @example
   * assets/logos/ecs.svg
   */
  icon?: string;
  /**
   * @remarks
   * 协议显示名称
   * 
   * @example
   * Prometheus 协议
   */
  label?: string;
  /**
   * @remarks
   * 协议名称
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
   * 告警规则默认安装后是否启用
   * 
   * @example
   * RUNNING
   */
  alertDefaultStatus?: string;
  /**
   * @remarks
   * 默认模式，即无需绑定实体的接入模式。
   * 
   * @example
   * true/false
   */
  bindDefaultPolicy?: boolean;
  /**
   * @remarks
   * 绑定的目标实体信息
   */
  bindEntity?: AddonMetaEnvironmentsPoliciesBindEntity;
  /**
   * @remarks
   * 是否默认安装
   * 
   * @example
   * true/false
   */
  defaultInstall?: boolean;
  /**
   * @remarks
   * 是否启用内部授权Token分配
   * 
   * @example
   * true/false
   */
  enableServiceAccount?: boolean;
  /**
   * @remarks
   * 组件接入后的数据检查规则
   */
  metricCheckRule?: AddonMetaEnvironmentsPoliciesMetricCheckRule;
  /**
   * @remarks
   * 是否需要在接入后提示重启工作负载
   * 
   * @example
   * true/false
   */
  needRestartAfterIntegration?: boolean;
  /**
   * @remarks
   * 支持的客户端协议信息列表
   */
  protocols?: AddonMetaEnvironmentsPoliciesProtocols[];
  /**
   * @remarks
   * 跳转的目标组件名称
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
   * 绑定的CommonSchema 列表
   */
  commonSchemaRefs?: AddonMetaEnvironmentsCommonSchemaRefs[];
  /**
   * @remarks
   * 依赖描述信息
   */
  dependencies?: AddonMetaEnvironmentsDependencies;
  /**
   * @remarks
   * 环境类型的描述
   * 
   * @example
   * 支持容器集群的工作覆盖监控
   */
  description?: string;
  /**
   * @remarks
   * 是否启用
   * 
   * @example
   * true/false
   */
  enable?: boolean;
  /**
   * @remarks
   * 环境类型显示名称
   * 
   * @example
   * 容器环境
   */
  label?: string;
  /**
   * @remarks
   * 环境类型名称
   * 
   * @example
   * CS/ECS/Cloud/Client
   */
  name?: string;
  /**
   * @remarks
   * 组件的控制策略组合信息
   */
  policies?: AddonMetaEnvironmentsPolicies;
  /**
   * @remarks
   * 策略类型
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
   * 组件别名，显示名称
   * 
   * @example
   * ECS 监控
   */
  alias?: string;
  /**
   * @remarks
   * 组件分类信息
   */
  categories?: string[];
  /**
   * @remarks
   * 组件示意图列表
   */
  dashboards?: AddonMetaDashboards[];
  /**
   * @remarks
   * 描述信息。
   * 
   * @example
   * The out-of-the-box and comprehensive ECS observe dashboards and alarm rules. Based on AliYun CloudMonitor agentless metrics, exporter agent metrics, host audit logs, host events and other data.
   */
  description?: string;
  /**
   * @remarks
   * 支持的环境类型列表
   */
  environments?: AddonMetaEnvironments[];
  /**
   * @remarks
   * 组件图标。
   * 
   * @example
   * assets/logos/ecs.svg
   */
  icon?: string;
  /**
   * @remarks
   * 关键词列表
   */
  keywords?: string[];
  /**
   * @remarks
   * 语言，取值：
   * 
   * - zh：中文（默认值）
   * - en：英文
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * 该组件上一次接入时间
   * 
   * @example
   * 2025-10-25 09:12:12
   */
  latestReleaseCreateTime?: string;
  /**
   * @remarks
   * 组件名称
   * 
   * @example
   * cloud-acs-ecs
   */
  name?: string;
  /**
   * @remarks
   * Policy 下是否只能安装一次
   * 
   * @example
   * true/false
   */
  once?: boolean;
  /**
   * @remarks
   * 场景
   * 
   * @example
   * feature
   */
  scene?: string;
  /**
   * @remarks
   * 版本号
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  /**
   * @remarks
   * 组件排序权重
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

