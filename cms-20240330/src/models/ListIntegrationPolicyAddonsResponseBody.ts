// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyAddonsResponseBodyAddonsDashboards extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 用于mysql的监控大盘
   */
  description?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * MySQL Overview
   */
  name?: string;
  /**
   * @remarks
   * The URL of the dashboard.
   * 
   * @example
   * http://xxxxxxx
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

export class ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsDependencies extends $dara.Model {
  /**
   * @remarks
   * The dependencies on cluster types.
   */
  clusterTypes?: string[];
  /**
   * @remarks
   * The dependencies on probes.
   */
  features?: { [key: string]: boolean };
  /**
   * @remarks
   * The dependencies on product codes.
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

export class ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesMetricCheckRule extends $dara.Model {
  /**
   * @remarks
   * The PromQL search statements.
   */
  promQl?: string[];
  static names(): { [key: string]: string } {
    return {
      promQl: 'promQl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promQl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.promQl)) {
      $dara.Model.validateArray(this.promQl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesProtocols extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The icon.
   * 
   * @example
   * https://img.alixxxx
   */
  icon?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Golang
   */
  label?: string;
  /**
   * @remarks
   * The protocol name.
   * 
   * @example
   * golang
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

export class ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPolicies extends $dara.Model {
  /**
   * @remarks
   * The default status of the alert rule policy.
   * 
   * @example
   * RUNNING
   */
  alertDefaultStatus?: string;
  /**
   * @remarks
   * Indicates whether the add-on is installed by default.
   * 
   * @example
   * true
   */
  defaultInstall?: boolean;
  /**
   * @remarks
   * Indicates whether to assign a Service Account for communication with the console API.
   * 
   * @example
   * true
   */
  enableServiceAccount?: boolean;
  /**
   * @remarks
   * The metric check rule.
   */
  metricCheckRule?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesMetricCheckRule;
  /**
   * @remarks
   * Indicates whether a pod restart is required after the add-on is installed.
   * 
   * @example
   * true
   */
  needRestartAfterIntegration?: boolean;
  /**
   * @remarks
   * The protocols.
   */
  protocols?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesProtocols[];
  /**
   * @remarks
   * The name of the target add-on.
   * 
   * @example
   * mysql
   */
  targetAddonName?: string;
  static names(): { [key: string]: string } {
    return {
      alertDefaultStatus: 'alertDefaultStatus',
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
      defaultInstall: 'boolean',
      enableServiceAccount: 'boolean',
      metricCheckRule: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesMetricCheckRule,
      needRestartAfterIntegration: 'boolean',
      protocols: { 'type': 'array', 'itemType': ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesProtocols },
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

export class ListIntegrationPolicyAddonsResponseBodyAddonsEnvironments extends $dara.Model {
  /**
   * @remarks
   * The dependencies.
   */
  dependencies?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsDependencies;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * o11y-demo-cn-heyuan
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the feature is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The display name of the environment.
   * 
   * @example
   * Cloud
   */
  label?: string;
  /**
   * @remarks
   * The name of the environment.
   * 
   * @example
   * Cloud
   */
  name?: string;
  /**
   * @remarks
   * The policy.
   */
  policies?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPolicies;
  static names(): { [key: string]: string } {
    return {
      dependencies: 'dependencies',
      description: 'description',
      enable: 'enable',
      label: 'label',
      name: 'name',
      policies: 'policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencies: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsDependencies,
      description: 'string',
      enable: 'boolean',
      label: 'string',
      name: 'string',
      policies: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPolicies,
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

export class ListIntegrationPolicyAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * MySQL
   */
  alias?: string;
  /**
   * @remarks
   * The categories.
   */
  categories?: string[];
  /**
   * @remarks
   * A list of dashboards.
   */
  dashboards?: ListIntegrationPolicyAddonsResponseBodyAddonsDashboards[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Observability integration.
   */
  description?: string;
  /**
   * @remarks
   * A list of supported environments.
   */
  environments?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironments[];
  /**
   * @remarks
   * The icon of the add-on.
   * 
   * @example
   * asert/mysql.svg
   */
  icon?: string;
  /**
   * @remarks
   * The keywords.
   */
  keywords?: string[];
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The time when the latest version was created.
   * 
   * @example
   * 2025-09-03T03:15:56Z
   */
  latestReleaseCreateTime?: string;
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * mysql
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the add-on can be installed only once.
   * 
   * @example
   * true
   */
  once?: boolean;
  /**
   * @remarks
   * The scenario of the add-on.
   * 
   * @example
   * container
   */
  scene?: string;
  /**
   * @remarks
   * The version of the add-on.
   * 
   * @example
   * 0.1.1
   */
  version?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 99
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
      dashboards: { 'type': 'array', 'itemType': ListIntegrationPolicyAddonsResponseBodyAddonsDashboards },
      description: 'string',
      environments: { 'type': 'array', 'itemType': ListIntegrationPolicyAddonsResponseBodyAddonsEnvironments },
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

export class ListIntegrationPolicyAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of add-ons.
   */
  addons?: ListIntegrationPolicyAddonsResponseBodyAddons[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E00EF90-CEF9-57C9-9AE9-5AA937D37C03
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListIntegrationPolicyAddonsResponseBodyAddons },
      requestId: 'string',
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

