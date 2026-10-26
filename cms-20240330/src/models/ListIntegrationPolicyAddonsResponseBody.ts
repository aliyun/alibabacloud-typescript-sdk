// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyAddonsResponseBodyAddonsDashboards extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Monitoring dashboard for MySQL
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
   * The dashboard URL.
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
   * The PromQL query statement.
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
   * The enabled status of the default alert rule policy.
   * 
   * @example
   * RUNNING
   */
  alertDefaultStatus?: string;
  /**
   * @remarks
   * Specifies whether the add-on is installed by default.
   * 
   * @example
   * true
   */
  defaultInstall?: boolean;
  /**
   * @remarks
   * Specifies whether a service account is assigned for communication with the console API.
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
   * Specifies whether the pod restart guide is triggered immediately after the plug-in is installed during integration.
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
   * Indicates whether the environment is enabled.
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
   * The environment name.
   * 
   * @example
   * Cloud
   */
  name?: string;
  /**
   * @remarks
   * The policies.
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
   * The list of dashboards.
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
   * The list of supported environments.
   */
  environments?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironments[];
  /**
   * @remarks
   * The component icon.
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
   * The latest release creation time.
   * 
   * @example
   * 2025-09-03T03:15:56Z
   */
  latestReleaseCreateTime?: string;
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * mysql
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the add-on can be installed only once.
   * 
   * @example
   * true
   */
  once?: boolean;
  /**
   * @remarks
   * The component scenario.
   * 
   * @example
   * container
   */
  scene?: string;
  /**
   * @remarks
   * The component version.
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
   * The list of add-ons.
   */
  addons?: ListIntegrationPolicyAddonsResponseBodyAddons[];
  /**
   * @remarks
   * Id of the request
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

