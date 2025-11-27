// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsResponseBodyAddonsDashboards extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * rum_view_link_rum_api
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

export class ListAddonsResponseBodyAddonsEnvironmentsCommonSchemaRefs extends $dara.Model {
  /**
   * @example
   * acs-ecs
   */
  group?: string;
  /**
   * @example
   * 0.1.4
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

export class ListAddonsResponseBodyAddonsEnvironmentsDependencies extends $dara.Model {
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

export class ListAddonsResponseBodyAddonsEnvironmentsPoliciesMetricCheckRule extends $dara.Model {
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

export class ListAddonsResponseBodyAddonsEnvironmentsPoliciesProtocols extends $dara.Model {
  /**
   * @example
   * Support OpenTelemetry Protocal
   */
  description?: string;
  /**
   * @example
   * http://xxxxxxx
   */
  icon?: string;
  /**
   * @example
   * OpenTelemetry
   */
  label?: string;
  /**
   * @example
   * openTelemetry
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

export class ListAddonsResponseBodyAddonsEnvironmentsPolicies extends $dara.Model {
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
  metricCheckRule?: ListAddonsResponseBodyAddonsEnvironmentsPoliciesMetricCheckRule;
  /**
   * @example
   * true
   */
  needRestartAfterIntegration?: boolean;
  protocols?: ListAddonsResponseBodyAddonsEnvironmentsPoliciesProtocols[];
  /**
   * @example
   * cloud-acs-ecs
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
      metricCheckRule: ListAddonsResponseBodyAddonsEnvironmentsPoliciesMetricCheckRule,
      needRestartAfterIntegration: 'boolean',
      protocols: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddonsEnvironmentsPoliciesProtocols },
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

export class ListAddonsResponseBodyAddonsEnvironments extends $dara.Model {
  commonSchemaRefs?: ListAddonsResponseBodyAddonsEnvironmentsCommonSchemaRefs[];
  dependencies?: ListAddonsResponseBodyAddonsEnvironmentsDependencies;
  /**
   * @example
   * o11y-demo-cn-heyuan
   */
  description?: string;
  /**
   * @example
   * false
   */
  enable?: boolean;
  label?: string;
  /**
   * @example
   * CS
   */
  name?: string;
  policies?: ListAddonsResponseBodyAddonsEnvironmentsPolicies;
  /**
   * @example
   * CS
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
      commonSchemaRefs: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddonsEnvironmentsCommonSchemaRefs },
      dependencies: ListAddonsResponseBodyAddonsEnvironmentsDependencies,
      description: 'string',
      enable: 'boolean',
      label: 'string',
      name: 'string',
      policies: ListAddonsResponseBodyAddonsEnvironmentsPolicies,
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

export class ListAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @example
   * resume_vector_alias
   */
  alias?: string;
  categories?: string[];
  dashboards?: ListAddonsResponseBodyAddonsDashboards[];
  /**
   * @example
   * workspace api monitor test
   */
  description?: string;
  environments?: ListAddonsResponseBodyAddonsEnvironments[];
  /**
   * @example
   * http://xxxxxxx
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
   * rum_api_dashboard_explorer_link_metric_set
   */
  name?: string;
  /**
   * @example
   * true
   */
  once?: boolean;
  /**
   * @example
   * middleware
   */
  scene?: string;
  /**
   * @example
   * *
   */
  version?: string;
  /**
   * @example
   * 99
   */
  weight?: string;
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
      dashboards: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddonsDashboards },
      description: 'string',
      environments: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddonsEnvironments },
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

export class ListAddonsResponseBody extends $dara.Model {
  addons?: ListAddonsResponseBodyAddons[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'addons',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
      requestId: 'string',
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

