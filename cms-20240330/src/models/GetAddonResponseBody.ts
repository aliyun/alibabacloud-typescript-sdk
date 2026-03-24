// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonResponseBodyDataDashboards extends $dara.Model {
  /**
   * @remarks
   * The description of the dashboard.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * @example
   * rum_api_dot_metric_set
   */
  name?: string;
  /**
   * @remarks
   * The URL of the preview image.
   * 
   * @example
   * http://iac-service-transfer.oss-cn-hangzhou.aliyuncs.com/78c5_288850010070719968_bdcf7cca781844c8ac4add133791713f
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

export class GetAddonResponseBodyDataEnvironmentsCommonSchemaRefs extends $dara.Model {
  /**
   * @remarks
   * The group name of the common schema.
   * 
   * @example
   * acs-ecs
   */
  group?: string;
  /**
   * @remarks
   * The version of the common schema.
   * 
   * @example
   * 0.1.3
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

export class GetAddonResponseBodyDataEnvironmentsDependencies extends $dara.Model {
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
   * The dependencies on activated services.
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

export class GetAddonResponseBodyDataEnvironmentsPoliciesMetricCheckRule extends $dara.Model {
  /**
   * @remarks
   * The data check rule that is used after installation.
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

export class GetAddonResponseBodyDataEnvironmentsPoliciesProtocols extends $dara.Model {
  /**
   * @remarks
   * The description of the protocol.
   * 
   * @example
   * Support OpenTelemetry Protocol
   */
  description?: string;
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * icon URL
   */
  icon?: string;
  /**
   * @remarks
   * The display name of the protocol.
   * 
   * @example
   * OpenTelemetry
   */
  label?: string;
  /**
   * @remarks
   * The name of the protocol.
   * 
   * @example
   * OpenTelemetry
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

export class GetAddonResponseBodyDataEnvironmentsPolicies extends $dara.Model {
  /**
   * @remarks
   * The status of the default policy for alert rules.
   * 
   * @example
   * true
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
   * Indicates whether a service account is assigned for communication with the console API.
   * 
   * @example
   * true
   */
  enableServiceAccount?: boolean;
  /**
   * @remarks
   * The metric check rule.
   */
  metricCheckRule?: GetAddonResponseBodyDataEnvironmentsPoliciesMetricCheckRule;
  /**
   * @remarks
   * Indicates whether to guide the user to restart pods after the add-on is installed.
   * 
   * @example
   * true
   */
  needRestartAfterIntegration?: boolean;
  /**
   * @remarks
   * The protocol.
   */
  protocols?: GetAddonResponseBodyDataEnvironmentsPoliciesProtocols[];
  /**
   * @remarks
   * The name of the target add-on to which the system redirects.
   * 
   * @example
   * cs-default
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
      metricCheckRule: GetAddonResponseBodyDataEnvironmentsPoliciesMetricCheckRule,
      needRestartAfterIntegration: 'boolean',
      protocols: { 'type': 'array', 'itemType': GetAddonResponseBodyDataEnvironmentsPoliciesProtocols },
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

export class GetAddonResponseBodyDataEnvironments extends $dara.Model {
  /**
   * @remarks
   * The list of associated common schemas.
   */
  commonSchemaRefs?: GetAddonResponseBodyDataEnvironmentsCommonSchemaRefs[];
  /**
   * @remarks
   * The dependencies.
   */
  dependencies?: GetAddonResponseBodyDataEnvironmentsDependencies;
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
   * Indicates whether the feature is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The display name of the environment.
   * 
   * @example
   * 容器环境
   */
  label?: string;
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * cs-default-umodel-1752755202744_k8s.metric.high_level_metric_deployment_cn-hangzhou/c0a686118449c4390b9cc0a07ea3e0e85
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   */
  policies?: GetAddonResponseBodyDataEnvironmentsPolicies;
  /**
   * @remarks
   * The type of the integration policy.
   * 
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
      commonSchemaRefs: { 'type': 'array', 'itemType': GetAddonResponseBodyDataEnvironmentsCommonSchemaRefs },
      dependencies: GetAddonResponseBodyDataEnvironmentsDependencies,
      description: 'string',
      enable: 'boolean',
      label: 'string',
      name: 'string',
      policies: GetAddonResponseBodyDataEnvironmentsPolicies,
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

export class GetAddonResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alias of the component.
   * 
   * @example
   * resume_vector_alias
   */
  alias?: string;
  /**
   * @remarks
   * The list of component categories.
   */
  categories?: string[];
  /**
   * @remarks
   * The list of dashboards.
   */
  dashboards?: GetAddonResponseBodyDataDashboards[];
  /**
   * @remarks
   * The description of the add-on.
   * 
   * @example
   * o11y-demo-cn-heyuan
   */
  description?: string;
  /**
   * @remarks
   * The environment information.
   */
  environments?: GetAddonResponseBodyDataEnvironments[];
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * https://xxxxx
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
   * 2023-09-12 12:30:30
   */
  latestReleaseCreateTime?: string;
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * rum_api_dashboard_explorer_link_metric_set
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
   * The scenario of the component.
   * 
   * @example
   * middleware
   */
  scene?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * *
   */
  version?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 10
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
      dashboards: { 'type': 'array', 'itemType': GetAddonResponseBodyDataDashboards },
      description: 'string',
      environments: { 'type': 'array', 'itemType': GetAddonResponseBodyDataEnvironments },
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

export class GetAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetAddonResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAddonResponseBodyData,
      requestId: 'string',
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

