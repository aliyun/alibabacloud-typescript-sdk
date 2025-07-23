// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddonMetaDashboards extends $dara.Model {
  description?: string;
  name?: string;
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

export class AddonMetaEnvironmentsDependencies extends $dara.Model {
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

export class AddonMetaEnvironmentsPoliciesBindEntity extends $dara.Model {
  entityGroupMode?: boolean;
  entityType?: string;
  singleEntityMode?: boolean;
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
  description?: string;
  icon?: string;
  label?: string;
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
  alertDefaultStatus?: string;
  bindDefaultPolicy?: boolean;
  bindEntity?: AddonMetaEnvironmentsPoliciesBindEntity;
  defaultInstall?: boolean;
  enableServiceAccount?: boolean;
  metricCheckRule?: AddonMetaEnvironmentsPoliciesMetricCheckRule;
  needRestartAfterIntegration?: boolean;
  protocols?: AddonMetaEnvironmentsPoliciesProtocols[];
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
  dependencies?: AddonMetaEnvironmentsDependencies;
  description?: string;
  enable?: boolean;
  label?: string;
  name?: string;
  policies?: AddonMetaEnvironmentsPolicies;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
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
  alias?: string;
  categories?: string[];
  dashboards?: AddonMetaDashboards[];
  description?: string;
  environments?: AddonMetaEnvironments[];
  icon?: string;
  keywords?: string[];
  language?: string;
  latestReleaseCreateTime?: string;
  name?: string;
  once?: boolean;
  scene?: string;
  version?: string;
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

