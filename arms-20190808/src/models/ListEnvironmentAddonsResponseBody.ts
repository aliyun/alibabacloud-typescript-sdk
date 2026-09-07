// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentAddonsResponseBodyDataAddonsDashboards extends $dara.Model {
  /**
   * @remarks
   * The description of the dashboard.
   * 
   * @example
   * MySQL监控大盘信息,监控了连接信息,使用信息等指标
   */
  description?: string;
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * @example
   * mysql-overview
   */
  name?: string;
  /**
   * @remarks
   * The URL of the dashboard.
   * 
   * @example
   * http://xxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      url: 'Url',
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

export class ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsDependencies extends $dara.Model {
  /**
   * @remarks
   * The required cluster types.
   */
  clusterTypes?: string[];
  /**
   * @remarks
   * The features available for installation in the environment.
   */
  features?: { [key: string]: boolean };
  /**
   * @remarks
   * The dependent services.
   */
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterTypes: 'ClusterTypes',
      features: 'Features',
      services: 'Services',
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

export class ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPoliciesMetricCheckRule extends $dara.Model {
  /**
   * @remarks
   * The PromQL query statements.
   */
  promQL?: string[];
  static names(): { [key: string]: string } {
    return {
      promQL: 'PromQL',
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

export class ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPoliciesProtocols extends $dara.Model {
  /**
   * @remarks
   * The description of the protocol.
   * 
   * @example
   * ARMS
   */
  description?: string;
  /**
   * @remarks
   * The URL of the protocol icon.
   * 
   * @example
   * http://xxxxxxx
   */
  icon?: string;
  /**
   * @remarks
   * The label of the protocol.
   * 
   * @example
   * ARMS
   */
  label?: string;
  /**
   * @remarks
   * The name of the protocol.
   * 
   * @example
   * arms
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      icon: 'Icon',
      label: 'Label',
      name: 'Name',
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

export class ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPolicies extends $dara.Model {
  /**
   * @remarks
   * The default status of the alert.
   * 
   * @example
   * default
   */
  alertDefaultStatus?: string;
  /**
   * @remarks
   * Indicates whether the addon is installed by default in the environment.
   * 
   * @example
   * false
   */
  defaultInstall?: boolean;
  /**
   * @remarks
   * Indicates whether a service account is enabled for the addon.
   * 
   * @example
   * true
   */
  enableServiceAccount?: boolean;
  /**
   * @remarks
   * The rules for checking metric status.
   */
  metricCheckRule?: ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPoliciesMetricCheckRule;
  /**
   * @remarks
   * Indicates whether a restart is required after the addon is installed.
   * 
   * @example
   * true
   */
  needRestartAfterIntegration?: boolean;
  /**
   * @remarks
   * The list of supported protocols.
   */
  protocols?: ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPoliciesProtocols[];
  /**
   * @remarks
   * The target name of the addon.
   * 
   * @example
   * cloud-rds-mysql
   */
  targetAddonName?: string;
  static names(): { [key: string]: string } {
    return {
      alertDefaultStatus: 'AlertDefaultStatus',
      defaultInstall: 'DefaultInstall',
      enableServiceAccount: 'EnableServiceAccount',
      metricCheckRule: 'MetricCheckRule',
      needRestartAfterIntegration: 'NeedRestartAfterIntegration',
      protocols: 'Protocols',
      targetAddonName: 'TargetAddonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDefaultStatus: 'string',
      defaultInstall: 'boolean',
      enableServiceAccount: 'boolean',
      metricCheckRule: ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPoliciesMetricCheckRule,
      needRestartAfterIntegration: 'boolean',
      protocols: { 'type': 'array', 'itemType': ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPoliciesProtocols },
      targetAddonName: 'string',
    };
  }

  validate() {
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

export class ListEnvironmentAddonsResponseBodyDataAddonsEnvironments extends $dara.Model {
  /**
   * @remarks
   * The dependencies of the addon within the environment.
   */
  dependencies?: ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsDependencies;
  /**
   * @remarks
   * The description of the environment.
   * 
   * @example
   * MySQL 服务部署在 Kubernetes 集群中。
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the addon is supported in this environment.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The label of the environment.
   * 
   * @example
   * 容器环境
   */
  label?: string;
  /**
   * @remarks
   * The name of the environment.
   * 
   * @example
   * CS
   */
  name?: string;
  /**
   * @remarks
   * The policies related to the addon in this environment.
   */
  policies?: ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPolicies;
  static names(): { [key: string]: string } {
    return {
      dependencies: 'Dependencies',
      description: 'Description',
      enable: 'Enable',
      label: 'Label',
      name: 'Name',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencies: ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsDependencies,
      description: 'string',
      enable: 'boolean',
      label: 'string',
      name: 'string',
      policies: ListEnvironmentAddonsResponseBodyDataAddonsEnvironmentsPolicies,
    };
  }

  validate() {
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

export class ListEnvironmentAddonsResponseBodyDataAddons extends $dara.Model {
  /**
   * @remarks
   * The alias of the addon.
   * 
   * @example
   * MySQL
   */
  alias?: string;
  /**
   * @remarks
   * The list of addon tags.
   */
  categories?: string[];
  /**
   * @remarks
   * The list of dashboards.
   */
  dashboards?: ListEnvironmentAddonsResponseBodyDataAddonsDashboards[];
  /**
   * @remarks
   * The description of the addon.
   * 
   * @example
   * 通过 MySQL Exporter 监控数据库指标
   */
  description?: string;
  /**
   * @remarks
   * The list of supported environments.
   */
  environments?: ListEnvironmentAddonsResponseBodyDataAddonsEnvironments[];
  /**
   * @remarks
   * The URL of the addon icon.
   * 
   * @example
   * http://xxxx
   */
  icon?: string;
  /**
   * @remarks
   * The keywords for the addon.
   */
  keywords?: string[];
  /**
   * @remarks
   * The language of the addon metadata.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The creation time of the latest release of the addon.
   * 
   * @example
   * 2023-09-22T16:56:29+08:00
   */
  latestReleaseCreateTime?: string;
  /**
   * @remarks
   * The name of the addon.
   * 
   * @example
   * mysql
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the addon can be installed only once per environment.
   * 
   * @example
   * false
   */
  once?: boolean;
  /**
   * @remarks
   * The application scenario of the addon.
   * 
   * @example
   * database
   */
  scene?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  /**
   * @remarks
   * The weight of the addon, which is used for sorting in the UI.
   * 
   * @example
   * 857
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      categories: 'Categories',
      dashboards: 'Dashboards',
      description: 'Description',
      environments: 'Environments',
      icon: 'Icon',
      keywords: 'Keywords',
      language: 'Language',
      latestReleaseCreateTime: 'LatestReleaseCreateTime',
      name: 'Name',
      once: 'Once',
      scene: 'Scene',
      version: 'Version',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      categories: { 'type': 'array', 'itemType': 'string' },
      dashboards: { 'type': 'array', 'itemType': ListEnvironmentAddonsResponseBodyDataAddonsDashboards },
      description: 'string',
      environments: { 'type': 'array', 'itemType': ListEnvironmentAddonsResponseBodyDataAddonsEnvironments },
      icon: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      latestReleaseCreateTime: 'string',
      name: 'string',
      once: 'boolean',
      scene: 'string',
      version: 'string',
      weight: 'string',
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

export class ListEnvironmentAddonsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of addons.
   */
  addons?: ListEnvironmentAddonsResponseBodyDataAddons[];
  /**
   * @remarks
   * Indicates whether the list contains V2 addons.
   */
  containsV2Addon?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      containsV2Addon: 'ContainsV2Addon',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListEnvironmentAddonsResponseBodyDataAddons },
      containsV2Addon: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListEnvironmentAddonsResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32940175-181B-4B93-966E-4BB69176****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values are `true` if the operation succeeded and `false` if it failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListEnvironmentAddonsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

