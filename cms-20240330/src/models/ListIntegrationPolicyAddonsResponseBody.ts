// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyAddonsResponseBodyAddonsDashboards extends $dara.Model {
  description?: string;
  /**
   * @example
   * MySQL Overview
   */
  name?: string;
  /**
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
  clusterTypes?: string[];
  features?: { [key: string]: boolean };
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
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * https://img.alixxxx
   */
  icon?: string;
  /**
   * @example
   * Golang
   */
  label?: string;
  /**
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
   * @example
   * RUNNING
   */
  alertDefaultStatus?: string;
  /**
   * @example
   * true
   */
  defaultInstall?: boolean;
  /**
   * @example
   * true
   */
  enableServiceAccount?: boolean;
  metricCheckRule?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesMetricCheckRule;
  /**
   * @example
   * true
   */
  needRestartAfterIntegration?: boolean;
  protocols?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsPoliciesProtocols[];
  /**
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
  dependencies?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironmentsDependencies;
  /**
   * @example
   * o11y-demo-cn-heyuan
   */
  description?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * Cloud
   */
  label?: string;
  /**
   * @example
   * Cloud
   */
  name?: string;
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
   * @example
   * MySQL
   */
  alias?: string;
  categories?: string[];
  dashboards?: ListIntegrationPolicyAddonsResponseBodyAddonsDashboards[];
  /**
   * @example
   * Observability integration.
   */
  description?: string;
  environments?: ListIntegrationPolicyAddonsResponseBodyAddonsEnvironments[];
  /**
   * @example
   * asert/mysql.svg
   */
  icon?: string;
  keywords?: string[];
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * 2025-09-03T03:15:56Z
   */
  latestReleaseCreateTime?: string;
  /**
   * @example
   * mysql
   */
  name?: string;
  /**
   * @example
   * true
   */
  once?: boolean;
  /**
   * @example
   * container
   */
  scene?: string;
  /**
   * @example
   * 0.1.1
   */
  version?: string;
  /**
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

