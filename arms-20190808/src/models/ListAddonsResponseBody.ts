// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsResponseBodyDataDashboards extends $dara.Model {
  /**
   * @remarks
   * The description of the dashboard.
   * 
   * @example
   * MySQL monitors the market information, monitoring the connection information, usage information and other indicators
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

export class ListAddonsResponseBodyDataEnvironmentsDependencies extends $dara.Model {
  /**
   * @remarks
   * The supported cluster types.
   */
  clusterTypes?: string[];
  /**
   * @remarks
   * The feature on which the environment depends.
   */
  features?: { [key: string]: boolean };
  /**
   * @remarks
   * The services.
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

export class ListAddonsResponseBodyDataEnvironmentsPoliciesMetricCheckRule extends $dara.Model {
  /**
   * @remarks
   * The PromQL statements.
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

export class ListAddonsResponseBodyDataEnvironmentsPoliciesProtocols extends $dara.Model {
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
   * The tag of the protocol.
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

export class ListAddonsResponseBodyDataEnvironmentsPolicies extends $dara.Model {
  /**
   * @remarks
   * The default alert status.
   * 
   * @example
   * default
   */
  alertDefaultStatus?: string;
  /**
   * @remarks
   * The default installation status.
   * 
   * @example
   * false
   */
  defaultInstall?: boolean;
  /**
   * @remarks
   * Indicates whether a service account is enabled.
   * 
   * @example
   * false.
   */
  enableServiceAccount?: boolean;
  /**
   * @remarks
   * The metric check rule.
   */
  metricCheckRule?: ListAddonsResponseBodyDataEnvironmentsPoliciesMetricCheckRule;
  /**
   * @remarks
   * Indicates whether a restart is required after the installation.
   * 
   * @example
   * false
   */
  needRestartAfterIntegration?: boolean;
  /**
   * @remarks
   * The supported protocols.
   */
  protocols?: ListAddonsResponseBodyDataEnvironmentsPoliciesProtocols[];
  /**
   * @remarks
   * The target name of the add-on.
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
      metricCheckRule: ListAddonsResponseBodyDataEnvironmentsPoliciesMetricCheckRule,
      needRestartAfterIntegration: 'boolean',
      protocols: { 'type': 'array', 'itemType': ListAddonsResponseBodyDataEnvironmentsPoliciesProtocols },
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

export class ListAddonsResponseBodyDataEnvironments extends $dara.Model {
  /**
   * @remarks
   * The dependencies of the environment.
   */
  dependencies?: ListAddonsResponseBodyDataEnvironmentsDependencies;
  /**
   * @remarks
   * The description of the environment.
   * 
   * @example
   * The MySQL service is deployed in a Kubernetes cluster.
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
   * The tag of the environment.
   * 
   * @example
   * Container
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
   * The control policies in the environment.
   */
  policies?: ListAddonsResponseBodyDataEnvironmentsPolicies;
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
      dependencies: ListAddonsResponseBodyDataEnvironmentsDependencies,
      description: 'string',
      enable: 'boolean',
      label: 'string',
      name: 'string',
      policies: ListAddonsResponseBodyDataEnvironmentsPolicies,
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

export class ListAddonsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alias of the add-on.
   * 
   * @example
   * MySQL
   */
  alias?: string;
  /**
   * @remarks
   * The tags of the add-on.
   */
  categories?: string[];
  /**
   * @remarks
   * The dashboards.
   */
  dashboards?: ListAddonsResponseBodyDataDashboards[];
  /**
   * @remarks
   * The description of the add-on.
   * 
   * @example
   * Monitor database indicators with MySQL Exporter
   */
  description?: string;
  /**
   * @remarks
   * The supported environments.
   */
  environments?: ListAddonsResponseBodyDataEnvironments[];
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * http://xxxx
   */
  icon?: string;
  /**
   * @remarks
   * The collection of keywords.
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
   * The time when the instance was last created.
   * 
   * @example
   * 2023-09-22T16:56:29+08:00
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
   * false
   */
  once?: boolean;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * database
   */
  scene?: string;
  /**
   * @remarks
   * The version of the agent.
   * 
   * @example
   * 0.0.1
   */
  version?: string;
  /**
   * @remarks
   * The weight.
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
      dashboards: { 'type': 'array', 'itemType': ListAddonsResponseBodyDataDashboards },
      description: 'string',
      environments: { 'type': 'array', 'itemType': ListAddonsResponseBodyDataEnvironments },
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
  /**
   * @remarks
   * Status code: 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried add-ons.
   */
  data?: ListAddonsResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the alert rule was deleted. Valid values:
   * 
   * *   `true`: The alert rule was deleted.
   * *   `false`: The alert rule failed to be deleted.
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
      data: { 'type': 'array', 'itemType': ListAddonsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

