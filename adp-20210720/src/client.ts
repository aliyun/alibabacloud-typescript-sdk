// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ComponentVersion extends $tea.Model {
  appVersion?: string;
  componentName?: string;
  componentUID?: string;
  description?: string;
  documents?: string;
  imagesMapping?: string;
  namespace?: string;
  orchestrationType?: string;
  orchestrationValues?: string;
  packageURL?: string;
  parentComponent?: boolean;
  platforms?: Platform[];
  readme?: string;
  resources?: string;
  source?: string;
  uid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      componentName: 'componentName',
      componentUID: 'componentUID',
      description: 'description',
      documents: 'documents',
      imagesMapping: 'imagesMapping',
      namespace: 'namespace',
      orchestrationType: 'orchestrationType',
      orchestrationValues: 'orchestrationValues',
      packageURL: 'packageURL',
      parentComponent: 'parentComponent',
      platforms: 'platforms',
      readme: 'readme',
      resources: 'resources',
      source: 'source',
      uid: 'uid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      componentName: 'string',
      componentUID: 'string',
      description: 'string',
      documents: 'string',
      imagesMapping: 'string',
      namespace: 'string',
      orchestrationType: 'string',
      orchestrationValues: 'string',
      packageURL: 'string',
      parentComponent: 'boolean',
      platforms: { 'type': 'array', 'itemType': Platform },
      readme: 'string',
      resources: 'string',
      source: 'string',
      uid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Disk extends $tea.Model {
  capacity?: number;
  fsType?: string;
  mountPoint?: string;
  name?: string;
  remain?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'capacity',
      fsType: 'fsType',
      mountPoint: 'mountPoint',
      name: 'name',
      remain: 'remain',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      fsType: 'string',
      mountPoint: 'string',
      name: 'string',
      remain: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPort extends $tea.Model {
  cidrIP?: string;
  portRange?: string;
  protocol?: string;
  unallowed?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidrIP: 'cidrIP',
      portRange: 'portRange',
      protocol: 'protocol',
      unallowed: 'unallowed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIP: 'string',
      portRange: 'string',
      protocol: 'string',
      unallowed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationComponentReferenceDetail extends $tea.Model {
  appVersion?: string;
  category?: string;
  class?: string;
  componentDescription?: string;
  componentName?: string;
  componentReferenceUID?: string;
  componentUID?: string;
  componentVersionDescription?: string;
  componentVersionUID?: string;
  createdAt?: string;
  documents?: string;
  enable?: boolean;
  imagesMapping?: string;
  namespace?: string;
  orchestrationType?: string;
  orchestrationValues?: string;
  parentComponent?: boolean;
  parentComponentVersionUID?: string;
  priority?: number;
  provider?: string;
  public?: boolean;
  readme?: string;
  relationUID?: string;
  releaseName?: string;
  resources?: string;
  sequence?: number;
  singleton?: boolean;
  source?: string;
  values?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      category: 'category',
      class: 'class',
      componentDescription: 'componentDescription',
      componentName: 'componentName',
      componentReferenceUID: 'componentReferenceUID',
      componentUID: 'componentUID',
      componentVersionDescription: 'componentVersionDescription',
      componentVersionUID: 'componentVersionUID',
      createdAt: 'createdAt',
      documents: 'documents',
      enable: 'enable',
      imagesMapping: 'imagesMapping',
      namespace: 'namespace',
      orchestrationType: 'orchestrationType',
      orchestrationValues: 'orchestrationValues',
      parentComponent: 'parentComponent',
      parentComponentVersionUID: 'parentComponentVersionUID',
      priority: 'priority',
      provider: 'provider',
      public: 'public',
      readme: 'readme',
      relationUID: 'relationUID',
      releaseName: 'releaseName',
      resources: 'resources',
      sequence: 'sequence',
      singleton: 'singleton',
      source: 'source',
      values: 'values',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      category: 'string',
      class: 'string',
      componentDescription: 'string',
      componentName: 'string',
      componentReferenceUID: 'string',
      componentUID: 'string',
      componentVersionDescription: 'string',
      componentVersionUID: 'string',
      createdAt: 'string',
      documents: 'string',
      enable: 'boolean',
      imagesMapping: 'string',
      namespace: 'string',
      orchestrationType: 'string',
      orchestrationValues: 'string',
      parentComponent: 'boolean',
      parentComponentVersionUID: 'string',
      priority: 'number',
      provider: 'string',
      public: 'boolean',
      readme: 'string',
      relationUID: 'string',
      releaseName: 'string',
      resources: 'string',
      sequence: 'number',
      singleton: 'boolean',
      source: 'string',
      values: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersion extends $tea.Model {
  clusterConfigSchema?: string;
  clusterEngines?: FoundationVersionClusterEngines[];
  defaultClusterConfig?: string;
  description?: string;
  documents?: string;
  driver?: FoundationVersionDriver;
  features?: string[];
  isDefault?: boolean;
  labels?: string;
  name?: string;
  packageTools?: FoundationVersionPackageTools[];
  platforms?: Platform[];
  specName?: string;
  status?: string;
  tools?: FoundationVersionTools;
  type?: string;
  uid?: string;
  userWhiteList?: string[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfigSchema: 'clusterConfigSchema',
      clusterEngines: 'clusterEngines',
      defaultClusterConfig: 'defaultClusterConfig',
      description: 'description',
      documents: 'documents',
      driver: 'driver',
      features: 'features',
      isDefault: 'isDefault',
      labels: 'labels',
      name: 'name',
      packageTools: 'packageTools',
      platforms: 'platforms',
      specName: 'specName',
      status: 'status',
      tools: 'tools',
      type: 'type',
      uid: 'uid',
      userWhiteList: 'userWhiteList',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfigSchema: 'string',
      clusterEngines: { 'type': 'array', 'itemType': FoundationVersionClusterEngines },
      defaultClusterConfig: 'string',
      description: 'string',
      documents: 'string',
      driver: FoundationVersionDriver,
      features: { 'type': 'array', 'itemType': 'string' },
      isDefault: 'boolean',
      labels: 'string',
      name: 'string',
      packageTools: { 'type': 'array', 'itemType': FoundationVersionPackageTools },
      platforms: { 'type': 'array', 'itemType': Platform },
      specName: 'string',
      status: 'string',
      tools: FoundationVersionTools,
      type: 'string',
      uid: 'string',
      userWhiteList: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInfoResponse extends $tea.Model {
  annotations?: { [key: string]: string };
  arch?: string;
  clusterLabels?: { [key: string]: string };
  clusterTaints?: GetInstanceInfoResponseClusterTaints[];
  cpu?: string;
  dataDisk?: Disk[];
  hostName?: string;
  identifier?: string;
  imageID?: string;
  instanceType?: string;
  internetBandwidth?: number;
  kernel?: string;
  labels?: { [key: string]: string };
  macAddress?: string;
  memory?: string;
  networkCards?: GetInstanceInfoResponseNetworkCards[];
  os?: string;
  osVersion?: string;
  privateIP?: string;
  publicIP?: string;
  rootPassword?: string;
  systemDisk?: Disk[];
  systemInfo?: string;
  taints?: GetInstanceInfoResponseTaints[];
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      arch: 'arch',
      clusterLabels: 'clusterLabels',
      clusterTaints: 'clusterTaints',
      cpu: 'cpu',
      dataDisk: 'dataDisk',
      hostName: 'hostName',
      identifier: 'identifier',
      imageID: 'imageID',
      instanceType: 'instanceType',
      internetBandwidth: 'internetBandwidth',
      kernel: 'kernel',
      labels: 'labels',
      macAddress: 'macAddress',
      memory: 'memory',
      networkCards: 'networkCards',
      os: 'os',
      osVersion: 'osVersion',
      privateIP: 'privateIP',
      publicIP: 'publicIP',
      rootPassword: 'rootPassword',
      systemDisk: 'systemDisk',
      systemInfo: 'systemInfo',
      taints: 'taints',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      arch: 'string',
      clusterLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clusterTaints: { 'type': 'array', 'itemType': GetInstanceInfoResponseClusterTaints },
      cpu: 'string',
      dataDisk: { 'type': 'array', 'itemType': Disk },
      hostName: 'string',
      identifier: 'string',
      imageID: 'string',
      instanceType: 'string',
      internetBandwidth: 'number',
      kernel: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      macAddress: 'string',
      memory: 'string',
      networkCards: { 'type': 'array', 'itemType': GetInstanceInfoResponseNetworkCards },
      os: 'string',
      osVersion: 'string',
      privateIP: 'string',
      publicIP: 'string',
      rootPassword: 'string',
      systemDisk: { 'type': 'array', 'itemType': Disk },
      systemInfo: 'string',
      taints: { 'type': 'array', 'itemType': GetInstanceInfoResponseTaints },
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceData extends $tea.Model {
  moduleList?: GetPayAsYouGoPriceDataModuleList[];
  ownerId?: string;
  productCode?: string;
  productType?: string;
  region?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: { 'type': 'array', 'itemType': GetPayAsYouGoPriceDataModuleList },
      ownerId: 'string',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceInfo extends $tea.Model {
  annotations?: { [key: string]: string };
  arch?: string;
  clusterLabels?: { [key: string]: string };
  clusterTaints?: InstanceInfoClusterTaints[];
  clusterUID?: string;
  cpu?: string;
  createdAt?: string;
  dataDisk?: Disk[];
  diskConfigAnnotations?: { [key: string]: string };
  hostName?: string;
  identifier?: string;
  imageID?: string;
  instanceType?: string;
  internetBandwidth?: number;
  kernel?: string;
  labels?: { [key: string]: string };
  macAddress?: string;
  memory?: string;
  networkCards?: InstanceInfoNetworkCards[];
  os?: string;
  osVersion?: string;
  privateIP?: string;
  publicIP?: string;
  rootPassword?: string;
  systemDisk?: Disk[];
  systemInfo?: string;
  taints?: InstanceInfoTaints[];
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      arch: 'arch',
      clusterLabels: 'clusterLabels',
      clusterTaints: 'clusterTaints',
      clusterUID: 'clusterUID',
      cpu: 'cpu',
      createdAt: 'createdAt',
      dataDisk: 'dataDisk',
      diskConfigAnnotations: 'diskConfigAnnotations',
      hostName: 'hostName',
      identifier: 'identifier',
      imageID: 'imageID',
      instanceType: 'instanceType',
      internetBandwidth: 'internetBandwidth',
      kernel: 'kernel',
      labels: 'labels',
      macAddress: 'macAddress',
      memory: 'memory',
      networkCards: 'networkCards',
      os: 'os',
      osVersion: 'osVersion',
      privateIP: 'privateIP',
      publicIP: 'publicIP',
      rootPassword: 'rootPassword',
      systemDisk: 'systemDisk',
      systemInfo: 'systemInfo',
      taints: 'taints',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      arch: 'string',
      clusterLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clusterTaints: { 'type': 'array', 'itemType': InstanceInfoClusterTaints },
      clusterUID: 'string',
      cpu: 'string',
      createdAt: 'string',
      dataDisk: { 'type': 'array', 'itemType': Disk },
      diskConfigAnnotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      hostName: 'string',
      identifier: 'string',
      imageID: 'string',
      instanceType: 'string',
      internetBandwidth: 'number',
      kernel: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      macAddress: 'string',
      memory: 'string',
      networkCards: { 'type': 'array', 'itemType': InstanceInfoNetworkCards },
      os: 'string',
      osVersion: 'string',
      privateIP: 'string',
      publicIP: 'string',
      rootPassword: 'string',
      systemDisk: { 'type': 'array', 'itemType': Disk },
      systemInfo: 'string',
      taints: { 'type': 'array', 'itemType': InstanceInfoTaints },
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelSelector extends $tea.Model {
  matchExpressions?: LabelSelectorMatchExpressions[];
  matchLabels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      matchExpressions: 'matchExpressions',
      matchLabels: 'matchLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpressions: { 'type': 'array', 'itemType': LabelSelectorMatchExpressions },
      matchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Platform extends $tea.Model {
  architecture?: string;
  os?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductComponentRelationDetail extends $tea.Model {
  appVersion?: string;
  category?: string;
  class?: string;
  componentName?: string;
  componentOrchestrationValues?: string;
  componentUID?: string;
  componentVersionSpecUID?: string;
  componentVersionSpecValues?: string;
  componentVersionUID?: string;
  createdAt?: string;
  description?: string;
  documents?: string;
  enable?: boolean;
  imagesMapping?: string;
  namespace?: string;
  orchestrationType?: string;
  parentComponent?: boolean;
  parentComponentVersionRelationUID?: string;
  parentComponentVersionUID?: string;
  policy?: ProductComponentRelationDetailPolicy;
  priority?: number;
  productVersionUID?: string;
  provider?: string;
  public?: boolean;
  readme?: string;
  relationUID?: string;
  releaseName?: string;
  resources?: string;
  sequence?: number;
  singleton?: boolean;
  source?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      category: 'category',
      class: 'class',
      componentName: 'componentName',
      componentOrchestrationValues: 'componentOrchestrationValues',
      componentUID: 'componentUID',
      componentVersionSpecUID: 'componentVersionSpecUID',
      componentVersionSpecValues: 'componentVersionSpecValues',
      componentVersionUID: 'componentVersionUID',
      createdAt: 'createdAt',
      description: 'description',
      documents: 'documents',
      enable: 'enable',
      imagesMapping: 'imagesMapping',
      namespace: 'namespace',
      orchestrationType: 'orchestrationType',
      parentComponent: 'parentComponent',
      parentComponentVersionRelationUID: 'parentComponentVersionRelationUID',
      parentComponentVersionUID: 'parentComponentVersionUID',
      policy: 'policy',
      priority: 'priority',
      productVersionUID: 'productVersionUID',
      provider: 'provider',
      public: 'public',
      readme: 'readme',
      relationUID: 'relationUID',
      releaseName: 'releaseName',
      resources: 'resources',
      sequence: 'sequence',
      singleton: 'singleton',
      source: 'source',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      category: 'string',
      class: 'string',
      componentName: 'string',
      componentOrchestrationValues: 'string',
      componentUID: 'string',
      componentVersionSpecUID: 'string',
      componentVersionSpecValues: 'string',
      componentVersionUID: 'string',
      createdAt: 'string',
      description: 'string',
      documents: 'string',
      enable: 'boolean',
      imagesMapping: 'string',
      namespace: 'string',
      orchestrationType: 'string',
      parentComponent: 'boolean',
      parentComponentVersionRelationUID: 'string',
      parentComponentVersionUID: 'string',
      policy: ProductComponentRelationDetailPolicy,
      priority: 'number',
      productVersionUID: 'string',
      provider: 'string',
      public: 'boolean',
      readme: 'string',
      relationUID: 'string',
      releaseName: 'string',
      resources: 'string',
      sequence: 'number',
      singleton: 'boolean',
      source: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resource extends $tea.Model {
  cpu?: ResourceCpu;
  hostname?: string;
  identifier?: string;
  image?: ResourceImage;
  instanceType?: string;
  memory?: ResourceMemory;
  ports?: ExportPort[];
  publicIP?: ResourcePublicIP;
  replica?: number;
  storage?: ResourceStorage[];
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      hostname: 'hostname',
      identifier: 'identifier',
      image: 'image',
      instanceType: 'instanceType',
      memory: 'memory',
      ports: 'ports',
      publicIP: 'publicIP',
      replica: 'replica',
      storage: 'storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: ResourceCpu,
      hostname: 'string',
      identifier: 'string',
      image: ResourceImage,
      instanceType: 'string',
      memory: ResourceMemory,
      ports: { 'type': 'array', 'itemType': ExportPort },
      publicIP: ResourcePublicIP,
      replica: 'number',
      storage: { 'type': 'array', 'itemType': ResourceStorage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentNodesRequest extends $tea.Model {
  applicationDisk?: string;
  cpu?: number;
  dataDisk?: AddEnvironmentNodesRequestDataDisk[];
  etcdDisk?: string;
  hostName?: string;
  labels?: { [key: string]: any };
  masterPrivateIPs?: string[];
  memory?: number;
  os?: string;
  rootPassword?: string;
  systemDisk?: AddEnvironmentNodesRequestSystemDisk[];
  taints?: AddEnvironmentNodesRequestTaints[];
  tridentSystemDisk?: string;
  tridentSystemSizeDisk?: number;
  workerPrivateIPs?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationDisk: 'applicationDisk',
      cpu: 'cpu',
      dataDisk: 'dataDisk',
      etcdDisk: 'etcdDisk',
      hostName: 'hostName',
      labels: 'labels',
      masterPrivateIPs: 'masterPrivateIPs',
      memory: 'memory',
      os: 'os',
      rootPassword: 'rootPassword',
      systemDisk: 'systemDisk',
      taints: 'taints',
      tridentSystemDisk: 'tridentSystemDisk',
      tridentSystemSizeDisk: 'tridentSystemSizeDisk',
      workerPrivateIPs: 'workerPrivateIPs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationDisk: 'string',
      cpu: 'number',
      dataDisk: { 'type': 'array', 'itemType': AddEnvironmentNodesRequestDataDisk },
      etcdDisk: 'string',
      hostName: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      masterPrivateIPs: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      os: 'string',
      rootPassword: 'string',
      systemDisk: { 'type': 'array', 'itemType': AddEnvironmentNodesRequestSystemDisk },
      taints: { 'type': 'array', 'itemType': AddEnvironmentNodesRequestTaints },
      tridentSystemDisk: 'string',
      tridentSystemSizeDisk: 'number',
      workerPrivateIPs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentNodesResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddEnvironmentNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddEnvironmentNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentProductVersionsRequest extends $tea.Model {
  productVersionInfoList?: AddEnvironmentProductVersionsRequestProductVersionInfoList[];
  productVersionUIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      productVersionInfoList: 'productVersionInfoList',
      productVersionUIDList: 'productVersionUIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionInfoList: { 'type': 'array', 'itemType': AddEnvironmentProductVersionsRequestProductVersionInfoList },
      productVersionUIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentProductVersionsResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentProductVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddEnvironmentProductVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddEnvironmentProductVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductComponentVersionRequest extends $tea.Model {
  componentVersionSpecUID?: string;
  componentVersionSpecValues?: string;
  releaseName?: string;
  static names(): { [key: string]: string } {
    return {
      componentVersionSpecUID: 'componentVersionSpecUID',
      componentVersionSpecValues: 'componentVersionSpecValues',
      releaseName: 'releaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentVersionSpecUID: 'string',
      componentVersionSpecValues: 'string',
      releaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductComponentVersionResponseBody extends $tea.Model {
  code?: string;
  data?: AddProductComponentVersionResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddProductComponentVersionResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductComponentVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddProductComponentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddProductComponentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductVersionConfigRequest extends $tea.Model {
  componentReleaseName?: string;
  componentVersionUID?: string;
  description?: string;
  name?: string;
  parentComponentReleaseName?: string;
  parentComponentVersionUID?: string;
  scope?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      componentReleaseName: 'componentReleaseName',
      componentVersionUID: 'componentVersionUID',
      description: 'description',
      name: 'name',
      parentComponentReleaseName: 'parentComponentReleaseName',
      parentComponentVersionUID: 'parentComponentVersionUID',
      scope: 'scope',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentReleaseName: 'string',
      componentVersionUID: 'string',
      description: 'string',
      name: 'string',
      parentComponentReleaseName: 'string',
      parentComponentVersionUID: 'string',
      scope: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductVersionConfigResponseBody extends $tea.Model {
  code?: string;
  data?: AddProductVersionConfigResponseBodyData;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddProductVersionConfigResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductVersionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddProductVersionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddProductVersionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResourceSnapshotRequest extends $tea.Model {
  name?: string;
  clusterUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      clusterUID: 'clusterUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      clusterUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResourceSnapshotResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddResourceSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddResourceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddResourceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddEnvironmentNodesRequest extends $tea.Model {
  instanceList?: InstanceInfo[];
  overwrite?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'instanceList',
      overwrite: 'overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': InstanceInfo },
      overwrite: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddEnvironmentNodesResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddEnvironmentNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchAddEnvironmentNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddEnvironmentNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddProductVersionConfigRequest extends $tea.Model {
  productVersionConfigList?: BatchAddProductVersionConfigRequestProductVersionConfigList[];
  static names(): { [key: string]: string } {
    return {
      productVersionConfigList: 'productVersionConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionConfigList: { 'type': 'array', 'itemType': BatchAddProductVersionConfigRequestProductVersionConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddProductVersionConfigResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddProductVersionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchAddProductVersionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddProductVersionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliverableRequest extends $tea.Model {
  foundation?: CreateDeliverableRequestFoundation;
  products?: CreateDeliverableRequestProducts[];
  static names(): { [key: string]: string } {
    return {
      foundation: 'foundation',
      products: 'products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      foundation: CreateDeliverableRequestFoundation,
      products: { 'type': 'array', 'itemType': CreateDeliverableRequestProducts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliverableResponseBody extends $tea.Model {
  code?: string;
  data?: CreateDeliverableResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDeliverableResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliverableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDeliverableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeliverableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryInstanceRequest extends $tea.Model {
  clusterUID?: string;
  deliverableConfigUID?: string;
  deliverableUID?: string;
  envUID?: string;
  foundation?: CreateDeliveryInstanceRequestFoundation;
  products?: CreateDeliveryInstanceRequestProducts[];
  templateUID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterUID: 'clusterUID',
      deliverableConfigUID: 'deliverableConfigUID',
      deliverableUID: 'deliverableUID',
      envUID: 'envUID',
      foundation: 'foundation',
      products: 'products',
      templateUID: 'templateUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterUID: 'string',
      deliverableConfigUID: 'string',
      deliverableUID: 'string',
      envUID: 'string',
      foundation: CreateDeliveryInstanceRequestFoundation,
      products: { 'type': 'array', 'itemType': CreateDeliveryInstanceRequestProducts },
      templateUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateDeliveryInstanceResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDeliveryInstanceResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDeliveryInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeliveryInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryPackageRequest extends $tea.Model {
  deliverableUID?: string;
  deliveryInstanceUID?: string;
  originDeliverableUID?: string;
  packageContentType?: string;
  packageType?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      deliverableUID: 'deliverableUID',
      deliveryInstanceUID: 'deliveryInstanceUID',
      originDeliverableUID: 'originDeliverableUID',
      packageContentType: 'packageContentType',
      packageType: 'packageType',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverableUID: 'string',
      deliveryInstanceUID: 'string',
      originDeliverableUID: 'string',
      packageContentType: 'string',
      packageType: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryPackageResponseBody extends $tea.Model {
  code?: string;
  data?: CreateDeliveryPackageResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDeliveryPackageResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDeliveryPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeliveryPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentRequest extends $tea.Model {
  annotations?: string;
  description?: string;
  expiredAt?: string;
  location?: string;
  name?: string;
  platform?: CreateEnvironmentRequestPlatform;
  platformList?: Platform[];
  productVersionUID?: string;
  type?: string;
  vendorConfig?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      description: 'description',
      expiredAt: 'expiredAt',
      location: 'location',
      name: 'name',
      platform: 'platform',
      platformList: 'platformList',
      productVersionUID: 'productVersionUID',
      type: 'type',
      vendorConfig: 'vendorConfig',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      description: 'string',
      expiredAt: 'string',
      location: 'string',
      name: 'string',
      platform: CreateEnvironmentRequestPlatform,
      platformList: { 'type': 'array', 'itemType': Platform },
      productVersionUID: 'string',
      type: 'string',
      vendorConfig: 'string',
      vendorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBody extends $tea.Model {
  code?: string;
  data?: CreateEnvironmentResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEnvironmentResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentLicenseRequest extends $tea.Model {
  companyName?: string;
  contact?: string;
  description?: string;
  expireTime?: string;
  licenseQuota?: CreateEnvironmentLicenseRequestLicenseQuota;
  machineFingerprint?: string;
  name?: string;
  productVersionUID?: string;
  scenario?: string;
  scope?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'companyName',
      contact: 'contact',
      description: 'description',
      expireTime: 'expireTime',
      licenseQuota: 'licenseQuota',
      machineFingerprint: 'machineFingerprint',
      name: 'name',
      productVersionUID: 'productVersionUID',
      scenario: 'scenario',
      scope: 'scope',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      contact: 'string',
      description: 'string',
      expireTime: 'string',
      licenseQuota: CreateEnvironmentLicenseRequestLicenseQuota,
      machineFingerprint: 'string',
      name: 'string',
      productVersionUID: 'string',
      scenario: 'string',
      scope: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: CreateEnvironmentLicenseResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEnvironmentLicenseResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEnvironmentLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEnvironmentLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFoundationReferenceRequest extends $tea.Model {
  clusterConfig?: string;
  componentConfigs?: CreateFoundationReferenceRequestComponentConfigs[];
  foundationReferenceConfigs?: CreateFoundationReferenceRequestFoundationReferenceConfigs[];
  foundationVersionUID?: string;
  originFoundationReferenceUID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'clusterConfig',
      componentConfigs: 'componentConfigs',
      foundationReferenceConfigs: 'foundationReferenceConfigs',
      foundationVersionUID: 'foundationVersionUID',
      originFoundationReferenceUID: 'originFoundationReferenceUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      componentConfigs: { 'type': 'array', 'itemType': CreateFoundationReferenceRequestComponentConfigs },
      foundationReferenceConfigs: { 'type': 'array', 'itemType': CreateFoundationReferenceRequestFoundationReferenceConfigs },
      foundationVersionUID: 'string',
      originFoundationReferenceUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFoundationReferenceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateFoundationReferenceResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateFoundationReferenceResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFoundationReferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFoundationReferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFoundationReferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductRequest extends $tea.Model {
  categories?: string[];
  description?: string;
  displayName?: string;
  foundationVersionUID?: string;
  productName?: string;
  vendor?: string;
  withoutProductVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      description: 'description',
      displayName: 'displayName',
      foundationVersionUID: 'foundationVersionUID',
      productName: 'productName',
      vendor: 'vendor',
      withoutProductVersion: 'withoutProductVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
      foundationVersionUID: 'string',
      productName: 'string',
      vendor: 'string',
      withoutProductVersion: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseBody extends $tea.Model {
  code?: string;
  data?: CreateProductResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateProductResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductDeploymentRequest extends $tea.Model {
  environmentUID?: string;
  namespace?: string;
  oldProductVersionUID?: string;
  packageConfig?: string;
  packageUID?: string;
  productVersionUID?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      environmentUID: 'environmentUID',
      namespace: 'namespace',
      oldProductVersionUID: 'oldProductVersionUID',
      packageConfig: 'packageConfig',
      packageUID: 'packageUID',
      productVersionUID: 'productVersionUID',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentUID: 'string',
      namespace: 'string',
      oldProductVersionUID: 'string',
      packageConfig: 'string',
      packageUID: 'string',
      productVersionUID: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductDeploymentResponseBody extends $tea.Model {
  code?: string;
  data?: CreateProductDeploymentResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateProductDeploymentResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProductDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProductDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionRequest extends $tea.Model {
  baseProductVersionUID?: string;
  version?: string;
  withoutBaseProductVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      baseProductVersionUID: 'baseProductVersionUID',
      version: 'version',
      withoutBaseProductVersion: 'withoutBaseProductVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseProductVersionUID: 'string',
      version: 'string',
      withoutBaseProductVersion: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionResponseBody extends $tea.Model {
  code?: string;
  data?: CreateProductVersionResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateProductVersionResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionPackageHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionPackageRequest extends $tea.Model {
  clusterEngineType?: string;
  foundationReferenceUID?: string;
  oldFoundationReferenceUID?: string;
  oldProductVersionUID?: string;
  packageContentType?: string;
  packageToolType?: string;
  packageType?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      clusterEngineType: 'clusterEngineType',
      foundationReferenceUID: 'foundationReferenceUID',
      oldFoundationReferenceUID: 'oldFoundationReferenceUID',
      oldProductVersionUID: 'oldProductVersionUID',
      packageContentType: 'packageContentType',
      packageToolType: 'packageToolType',
      packageType: 'packageType',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterEngineType: 'string',
      foundationReferenceUID: 'string',
      oldFoundationReferenceUID: 'string',
      oldProductVersionUID: 'string',
      packageContentType: 'string',
      packageToolType: 'string',
      packageType: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionPackageResponseBody extends $tea.Model {
  code?: string;
  data?: CreateProductVersionPackageResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateProductVersionPackageResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProductVersionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProductVersionPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentLicenseResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEnvironmentLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnvironmentLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentNodeResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEnvironmentNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnvironmentNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentProductVersionResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnvironmentProductVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEnvironmentProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEnvironmentProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductComponentVersionResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductComponentVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProductComponentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductComponentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductInstanceConfigRequest extends $tea.Model {
  environmentUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      environmentUID: 'environmentUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductInstanceConfigResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProductInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductVersionResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductVersionConfigResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductVersionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProductVersionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductVersionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProductInstanceDeploymentConfigRequest extends $tea.Model {
  environmentUID?: string;
  packageContentType?: string;
  packageUID?: string;
  productVersionUID?: string;
  productVersionUIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      environmentUID: 'environmentUID',
      packageContentType: 'packageContentType',
      packageUID: 'packageUID',
      productVersionUID: 'productVersionUID',
      productVersionUIDList: 'productVersionUIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentUID: 'string',
      packageContentType: 'string',
      packageUID: 'string',
      productVersionUID: 'string',
      productVersionUIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProductInstanceDeploymentConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateProductInstanceDeploymentConfigResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateProductInstanceDeploymentConfigResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProductInstanceDeploymentConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateProductInstanceDeploymentConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateProductInstanceDeploymentConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentResponseBody extends $tea.Model {
  code?: string;
  data?: GetComponentResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetComponentResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentVersionRequest extends $tea.Model {
  withoutChartContent?: boolean;
  static names(): { [key: string]: string } {
    return {
      withoutChartContent: 'withoutChartContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withoutChartContent: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentVersionResponseBody extends $tea.Model {
  code?: string;
  data?: GetComponentVersionResponseBodyData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetComponentVersionResponseBodyData },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetComponentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetComponentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliverableResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeliverableResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeliverableResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliverableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeliverableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeliverableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryPackageResponseBody extends $tea.Model {
  code?: string;
  data?: GetDeliveryPackageResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeliveryPackageResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeliveryPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeliveryPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentRequest extends $tea.Model {
  options?: GetEnvironmentRequestOptions;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: GetEnvironmentRequestOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentShrinkRequest extends $tea.Model {
  optionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      optionsShrink: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBody extends $tea.Model {
  code?: string;
  data?: GetEnvironmentResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnvironmentResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentDeliveryInstanceRequest extends $tea.Model {
  clusterUID?: string;
  envUID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterUID: 'clusterUID',
      envUID: 'envUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterUID: 'string',
      envUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentDeliveryInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: GetEnvironmentDeliveryInstanceResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnvironmentDeliveryInstanceResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentDeliveryInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnvironmentDeliveryInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnvironmentDeliveryInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseRequest extends $tea.Model {
  options?: GetEnvironmentLicenseRequestOptions;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: GetEnvironmentLicenseRequestOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseShrinkRequest extends $tea.Model {
  optionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      optionsShrink: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseResponseBody extends $tea.Model {
  code?: string;
  data?: GetEnvironmentLicenseResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEnvironmentLicenseResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnvironmentLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnvironmentLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentNodeResponseBody extends $tea.Model {
  code?: string;
  data?: InstanceInfo;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InstanceInfo,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEnvironmentNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnvironmentNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationComponentReferenceResponseBody extends $tea.Model {
  code?: string;
  data?: GetFoundationComponentReferenceResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFoundationComponentReferenceResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationComponentReferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFoundationComponentReferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFoundationComponentReferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationReferenceResponseBody extends $tea.Model {
  code?: string;
  data?: GetFoundationReferenceResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFoundationReferenceResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationReferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFoundationReferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFoundationReferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationVersionResponseBody extends $tea.Model {
  code?: string;
  data?: GetFoundationVersionResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFoundationVersionResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFoundationVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFoundationVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductRequest extends $tea.Model {
  withIconURL?: boolean;
  static names(): { [key: string]: string } {
    return {
      withIconURL: 'withIconURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withIconURL: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductResponseBody extends $tea.Model {
  code?: string;
  data?: GetProductResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProductResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductComponentVersionResponseBody extends $tea.Model {
  code?: string;
  data?: GetProductComponentVersionResponseBodyData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetProductComponentVersionResponseBodyData },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductComponentVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductComponentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductComponentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductDeploymentRequest extends $tea.Model {
  environmentUID?: string;
  productVersionUID?: string;
  withParamConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      environmentUID: 'environmentUID',
      productVersionUID: 'productVersionUID',
      withParamConfig: 'withParamConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentUID: 'string',
      productVersionUID: 'string',
      withParamConfig: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductDeploymentResponseBody extends $tea.Model {
  code?: string;
  data?: GetProductDeploymentResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProductDeploymentResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionRequest extends $tea.Model {
  withDocumentationURL?: boolean;
  withExtendResourceURL?: boolean;
  static names(): { [key: string]: string } {
    return {
      withDocumentationURL: 'withDocumentationURL',
      withExtendResourceURL: 'withExtendResourceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withDocumentationURL: 'boolean',
      withExtendResourceURL: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponseBody extends $tea.Model {
  code?: string;
  data?: GetProductVersionResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProductVersionResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionDifferencesRequest extends $tea.Model {
  preVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      preVersionUID: 'preVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionDifferencesResponseBody extends $tea.Model {
  code?: string;
  data?: GetProductVersionDifferencesResponseBodyData[];
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetProductVersionDifferencesResponseBodyData },
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionDifferencesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductVersionDifferencesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductVersionDifferencesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionPackageRequest extends $tea.Model {
  foundationReferenceUID?: string;
  oldFoundationReferenceUID?: string;
  oldProductVersionUID?: string;
  packageContentType?: string;
  packageType?: string;
  packageUID?: string;
  platform?: string;
  withURL?: boolean;
  static names(): { [key: string]: string } {
    return {
      foundationReferenceUID: 'foundationReferenceUID',
      oldFoundationReferenceUID: 'oldFoundationReferenceUID',
      oldProductVersionUID: 'oldProductVersionUID',
      packageContentType: 'packageContentType',
      packageType: 'packageType',
      packageUID: 'packageUID',
      platform: 'platform',
      withURL: 'withURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      foundationReferenceUID: 'string',
      oldFoundationReferenceUID: 'string',
      oldProductVersionUID: 'string',
      packageContentType: 'string',
      packageType: 'string',
      packageUID: 'string',
      platform: 'string',
      withURL: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionPackageResponseBody extends $tea.Model {
  code?: string;
  data?: GetProductVersionPackageResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProductVersionPackageResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProductVersionPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductVersionPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotRequest extends $tea.Model {
  productVersionUID?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      productVersionUID: 'productVersionUID',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionUID: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotResponseBody extends $tea.Model {
  CPULimit?: string;
  CPURequest?: string;
  adpInfo?: GetResourceSnapshotResponseBodyAdpInfo;
  memoryLimit?: string;
  memoryRequest?: string;
  productInfo?: GetResourceSnapshotResponseBodyProductInfo;
  specParamConfigs?: GetResourceSnapshotResponseBodySpecParamConfigs[];
  storageRequest?: string;
  static names(): { [key: string]: string } {
    return {
      CPULimit: 'CPULimit',
      CPURequest: 'CPURequest',
      adpInfo: 'adpInfo',
      memoryLimit: 'memoryLimit',
      memoryRequest: 'memoryRequest',
      productInfo: 'productInfo',
      specParamConfigs: 'specParamConfigs',
      storageRequest: 'storageRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPULimit: 'string',
      CPURequest: 'string',
      adpInfo: GetResourceSnapshotResponseBodyAdpInfo,
      memoryLimit: 'string',
      memoryRequest: 'string',
      productInfo: GetResourceSnapshotResponseBodyProductInfo,
      specParamConfigs: { 'type': 'array', 'itemType': GetResourceSnapshotResponseBodySpecParamConfigs },
      storageRequest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowStatusRequest extends $tea.Model {
  workflowType?: string;
  xuid?: string;
  static names(): { [key: string]: string } {
    return {
      workflowType: 'workflowType',
      xuid: 'xuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowType: 'string',
      xuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetWorkflowStatusResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWorkflowStatusResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetWorkflowStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkflowStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitEnvironmentResourceRequest extends $tea.Model {
  accessKeyID?: string;
  accessKeySecret?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyID: 'accessKeyID',
      accessKeySecret: 'accessKeySecret',
      securityToken: 'securityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyID: 'string',
      accessKeySecret: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitEnvironmentResourceResponseBody extends $tea.Model {
  code?: string;
  data?: InitEnvironmentResourceResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InitEnvironmentResourceResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitEnvironmentResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitEnvironmentResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitEnvironmentResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentVersionsRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  platforms?: ListComponentVersionsRequestPlatforms[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      platforms: 'platforms',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      platforms: { 'type': 'array', 'itemType': ListComponentVersionsRequestPlatforms },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentVersionsShrinkRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  platformsShrink?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      platformsShrink: 'platforms',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      platformsShrink: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentVersionsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: ListComponentVersionsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: ListComponentVersionsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListComponentVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListComponentVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsRequest extends $tea.Model {
  category?: string;
  fuzzy?: string;
  name?: string;
  pageNum?: number;
  pageSize?: number;
  public?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      fuzzy: 'fuzzy',
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      public: 'public',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      fuzzy: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      public: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $tea.Model {
  code?: string;
  data?: ListComponentsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListComponentsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryInstanceChangeRecordsResponseBody extends $tea.Model {
  code?: string;
  data?: ListDeliveryInstanceChangeRecordsResponseBodyData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDeliveryInstanceChangeRecordsResponseBodyData },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryInstanceChangeRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeliveryInstanceChangeRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeliveryInstanceChangeRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryPackageRequest extends $tea.Model {
  deliverableUID?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      deliverableUID: 'deliverableUID',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverableUID: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryPackageResponseBody extends $tea.Model {
  code?: string;
  data?: ListDeliveryPackageResponseBodyData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDeliveryPackageResponseBodyData },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeliveryPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeliveryPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  scope?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      scope: 'scope',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      scope: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponseBody extends $tea.Model {
  code?: string;
  data?: ListEnvironmentLicensesResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEnvironmentLicensesResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEnvironmentLicensesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnvironmentLicensesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentNodesRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentNodesResponseBody extends $tea.Model {
  code?: string;
  data?: ListEnvironmentNodesResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEnvironmentNodesResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEnvironmentNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnvironmentNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentTunnelsResponseBody extends $tea.Model {
  code?: string;
  data?: ListEnvironmentTunnelsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEnvironmentTunnelsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentTunnelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEnvironmentTunnelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnvironmentTunnelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsRequest extends $tea.Model {
  clusterUID?: string;
  endpoint?: string;
  foundationType?: string;
  fuzzy?: string;
  instanceStatus?: string;
  name?: string;
  pageNum?: number;
  pageSize?: number;
  type?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterUID: 'clusterUID',
      endpoint: 'endpoint',
      foundationType: 'foundationType',
      fuzzy: 'fuzzy',
      instanceStatus: 'instanceStatus',
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      type: 'type',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterUID: 'string',
      endpoint: 'string',
      foundationType: 'string',
      fuzzy: 'string',
      instanceStatus: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      type: 'string',
      vendorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $tea.Model {
  code?: string;
  data?: ListEnvironmentsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEnvironmentsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListEnvironmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnvironmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationComponentVersionsRequest extends $tea.Model {
  onlyEnabled?: boolean;
  parentComponentRelationUID?: string;
  static names(): { [key: string]: string } {
    return {
      onlyEnabled: 'onlyEnabled',
      parentComponentRelationUID: 'parentComponentRelationUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlyEnabled: 'boolean',
      parentComponentRelationUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationComponentVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListFoundationComponentVersionsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListFoundationComponentVersionsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationComponentVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFoundationComponentVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFoundationComponentVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationReferenceComponentsRequest extends $tea.Model {
  foundationReferenceUID?: string;
  foundationVersionUID?: string;
  onlyEnabled?: boolean;
  parentComponentReferenceUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      foundationReferenceUID: 'foundationReferenceUID',
      foundationVersionUID: 'foundationVersionUID',
      onlyEnabled: 'onlyEnabled',
      parentComponentReferenceUID: 'parentComponentReferenceUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      foundationReferenceUID: 'string',
      foundationVersionUID: 'string',
      onlyEnabled: 'boolean',
      parentComponentReferenceUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationReferenceComponentsResponseBody extends $tea.Model {
  code?: string;
  data?: ProductComponentRelationDetail[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ProductComponentRelationDetail },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationReferenceComponentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFoundationReferenceComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFoundationReferenceComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationVersionsRequest extends $tea.Model {
  onlyDefault?: boolean;
  pageNum?: number;
  pageSize?: number;
  sortDirect?: string;
  sortKey?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      onlyDefault: 'onlyDefault',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      sortDirect: 'sortDirect',
      sortKey: 'sortKey',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlyDefault: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      sortDirect: 'string',
      sortKey: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListFoundationVersionsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListFoundationVersionsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFoundationVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFoundationVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductComponentVersionsRequest extends $tea.Model {
  category?: string;
  pageNum?: string;
  pageSize?: string;
  releaseName?: string;
  sortDirect?: string;
  sortKey?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      releaseName: 'releaseName',
      sortDirect: 'sortDirect',
      sortKey: 'sortKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      pageNum: 'string',
      pageSize: 'string',
      releaseName: 'string',
      sortDirect: 'string',
      sortKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductComponentVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductComponentVersionsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductComponentVersionsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductComponentVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductComponentVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductComponentVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDeploymentsRequest extends $tea.Model {
  environmentUID?: string;
  pageNum?: number;
  pageSize?: number;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      environmentUID: 'environmentUID',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentUID: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDeploymentsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductDeploymentsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductDeploymentsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDeploymentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductDeploymentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductDeploymentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductEnvironmentsRequest extends $tea.Model {
  compatibleProductVersionUID?: string;
  envType?: string;
  options?: ListProductEnvironmentsRequestOptions;
  platforms?: ListProductEnvironmentsRequestPlatforms[];
  productVersionSpecUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      compatibleProductVersionUID: 'compatibleProductVersionUID',
      envType: 'envType',
      options: 'options',
      platforms: 'platforms',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleProductVersionUID: 'string',
      envType: 'string',
      options: ListProductEnvironmentsRequestOptions,
      platforms: { 'type': 'array', 'itemType': ListProductEnvironmentsRequestPlatforms },
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductEnvironmentsShrinkRequest extends $tea.Model {
  compatibleProductVersionUID?: string;
  envType?: string;
  optionsShrink?: string;
  platformsShrink?: string;
  productVersionSpecUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      compatibleProductVersionUID: 'compatibleProductVersionUID',
      envType: 'envType',
      optionsShrink: 'options',
      platformsShrink: 'platforms',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleProductVersionUID: 'string',
      envType: 'string',
      optionsShrink: 'string',
      platformsShrink: 'string',
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductEnvironmentsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductEnvironmentsResponseBodyData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListProductEnvironmentsResponseBodyData },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductEnvironmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductEnvironmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductEnvironmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductFoundationReferencesResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductFoundationReferencesResponseBodyData[];
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListProductFoundationReferencesResponseBodyData },
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductFoundationReferencesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductFoundationReferencesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductFoundationReferencesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstanceConfigsRequest extends $tea.Model {
  componentReleaseName?: string;
  environmentUID?: string;
  fuzzy?: string;
  pageNum?: number;
  pageSize?: number;
  paramType?: string;
  parameter?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      componentReleaseName: 'componentReleaseName',
      environmentUID: 'environmentUID',
      fuzzy: 'fuzzy',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      paramType: 'paramType',
      parameter: 'parameter',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentReleaseName: 'string',
      environmentUID: 'string',
      fuzzy: 'string',
      pageNum: 'number',
      pageSize: 'number',
      paramType: 'string',
      parameter: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstanceConfigsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductInstanceConfigsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductInstanceConfigsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstanceConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductInstanceConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductInstanceConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstancesRequest extends $tea.Model {
  envUID?: string;
  options?: ListProductInstancesRequestOptions;
  pageNum?: number;
  pageSize?: number;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      envUID: 'envUID',
      options: 'options',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envUID: 'string',
      options: ListProductInstancesRequestOptions,
      pageNum: 'number',
      pageSize: 'number',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstancesShrinkRequest extends $tea.Model {
  envUID?: string;
  optionsShrink?: string;
  pageNum?: number;
  pageSize?: number;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      envUID: 'envUID',
      optionsShrink: 'options',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envUID: 'string',
      optionsShrink: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductInstancesResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductInstancesResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionConfigsRequest extends $tea.Model {
  componentReleaseName?: string;
  configType?: string;
  fuzzy?: string;
  pageNum?: string;
  pageSize?: string;
  parameter?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      componentReleaseName: 'componentReleaseName',
      configType: 'configType',
      fuzzy: 'fuzzy',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      parameter: 'parameter',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentReleaseName: 'string',
      configType: 'string',
      fuzzy: 'string',
      pageNum: 'string',
      pageSize: 'string',
      parameter: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionConfigsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductVersionConfigsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductVersionConfigsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductVersionConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductVersionConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsRequest extends $tea.Model {
  fuzzy?: string;
  pageNum?: string;
  pageSize?: string;
  platforms?: ListProductVersionsRequestPlatforms[];
  productName?: string;
  productUID?: string;
  released?: boolean;
  supportedFoundationTypes?: string[];
  tag?: ListProductVersionsRequestTag;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      fuzzy: 'fuzzy',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      platforms: 'platforms',
      productName: 'productName',
      productUID: 'productUID',
      released: 'released',
      supportedFoundationTypes: 'supportedFoundationTypes',
      tag: 'tag',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fuzzy: 'string',
      pageNum: 'string',
      pageSize: 'string',
      platforms: { 'type': 'array', 'itemType': ListProductVersionsRequestPlatforms },
      productName: 'string',
      productUID: 'string',
      released: 'boolean',
      supportedFoundationTypes: { 'type': 'array', 'itemType': 'string' },
      tag: ListProductVersionsRequestTag,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsShrinkRequest extends $tea.Model {
  fuzzy?: string;
  pageNum?: string;
  pageSize?: string;
  platformsShrink?: string;
  productName?: string;
  productUID?: string;
  released?: boolean;
  supportedFoundationTypesShrink?: string;
  tagShrink?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      fuzzy: 'fuzzy',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      platformsShrink: 'platforms',
      productName: 'productName',
      productUID: 'productUID',
      released: 'released',
      supportedFoundationTypesShrink: 'supportedFoundationTypes',
      tagShrink: 'tag',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fuzzy: 'string',
      pageNum: 'string',
      pageSize: 'string',
      platformsShrink: 'string',
      productName: 'string',
      productUID: 'string',
      released: 'boolean',
      supportedFoundationTypesShrink: 'string',
      tagShrink: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductVersionsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductVersionsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $tea.Model {
  description?: string;
  fuzzy?: string;
  name?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      fuzzy: 'fuzzy',
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fuzzy: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $tea.Model {
  code?: string;
  data?: ListProductsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowTaskLogsRequest extends $tea.Model {
  filterValues?: string[];
  orderType?: string;
  pageNum?: number;
  pageSize?: number;
  workflowType?: string;
  xuid?: string;
  static names(): { [key: string]: string } {
    return {
      filterValues: 'filterValues',
      orderType: 'orderType',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      workflowType: 'workflowType',
      xuid: 'xuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterValues: { 'type': 'array', 'itemType': 'string' },
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      workflowType: 'string',
      xuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowTaskLogsShrinkRequest extends $tea.Model {
  filterValuesShrink?: string;
  orderType?: string;
  pageNum?: number;
  pageSize?: number;
  workflowType?: string;
  xuid?: string;
  static names(): { [key: string]: string } {
    return {
      filterValuesShrink: 'filterValues',
      orderType: 'orderType',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      workflowType: 'workflowType',
      xuid: 'xuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterValuesShrink: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      workflowType: 'string',
      xuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowTaskLogsResponseBody extends $tea.Model {
  code?: string;
  data?: ListWorkflowTaskLogsResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListWorkflowTaskLogsResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowTaskLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListWorkflowTaskLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkflowTaskLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentTunnelRequest extends $tea.Model {
  tunnelConfig?: PutEnvironmentTunnelRequestTunnelConfig;
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      tunnelConfig: 'tunnelConfig',
      tunnelType: 'tunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelConfig: PutEnvironmentTunnelRequestTunnelConfig,
      tunnelType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentTunnelResponseBody extends $tea.Model {
  code?: string;
  data?: PutEnvironmentTunnelResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PutEnvironmentTunnelResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentTunnelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutEnvironmentTunnelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutEnvironmentTunnelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProductInstanceConfigRequest extends $tea.Model {
  componentUID?: string;
  componentVersionUID?: string;
  configUID?: string;
  description?: string;
  environmentUID?: string;
  name?: string;
  parentComponentName?: string;
  parentComponentVersionUID?: string;
  productVersionUID?: string;
  releaseName?: string;
  scope?: string[];
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      componentUID: 'componentUID',
      componentVersionUID: 'componentVersionUID',
      configUID: 'configUID',
      description: 'description',
      environmentUID: 'environmentUID',
      name: 'name',
      parentComponentName: 'parentComponentName',
      parentComponentVersionUID: 'parentComponentVersionUID',
      productVersionUID: 'productVersionUID',
      releaseName: 'releaseName',
      scope: 'scope',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentUID: 'string',
      componentVersionUID: 'string',
      configUID: 'string',
      description: 'string',
      environmentUID: 'string',
      name: 'string',
      parentComponentName: 'string',
      parentComponentVersionUID: 'string',
      productVersionUID: 'string',
      releaseName: 'string',
      scope: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProductInstanceConfigResponseBody extends $tea.Model {
  code?: string;
  data?: PutProductInstanceConfigResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PutProductInstanceConfigResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProductInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutProductInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutProductInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEnvironmentFoundationReferenceResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEnvironmentFoundationReferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetEnvironmentFoundationReferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetEnvironmentFoundationReferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliverableRequest extends $tea.Model {
  foundation?: UpdateDeliverableRequestFoundation;
  products?: UpdateDeliverableRequestProducts[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      foundation: 'foundation',
      products: 'products',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      foundation: UpdateDeliverableRequestFoundation,
      products: { 'type': 'array', 'itemType': UpdateDeliverableRequestProducts },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliverableResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliverableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDeliverableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeliverableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliveryInstanceRequest extends $tea.Model {
  deliverableConfigUID?: string;
  deliverableUID?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      deliverableConfigUID: 'deliverableConfigUID',
      deliverableUID: 'deliverableUID',
      desc: 'desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverableConfigUID: 'string',
      deliverableUID: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliveryInstanceResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliveryInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDeliveryInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeliveryInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentRequest extends $tea.Model {
  advancedConfigs?: UpdateEnvironmentRequestAdvancedConfigs;
  description?: string;
  location?: string;
  vendorConfig?: string;
  static names(): { [key: string]: string } {
    return {
      advancedConfigs: 'advancedConfigs',
      description: 'description',
      location: 'location',
      vendorConfig: 'vendorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfigs: UpdateEnvironmentRequestAdvancedConfigs,
      description: 'string',
      location: 'string',
      vendorConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEnvironmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEnvironmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentNodeRequest extends $tea.Model {
  applicationDisk?: string;
  etcdDisk?: string;
  labels?: { [key: string]: any };
  rootPassword?: string;
  taints?: UpdateEnvironmentNodeRequestTaints[];
  tridentSystemDisk?: string;
  tridentSystemSizeDisk?: number;
  static names(): { [key: string]: string } {
    return {
      applicationDisk: 'applicationDisk',
      etcdDisk: 'etcdDisk',
      labels: 'labels',
      rootPassword: 'rootPassword',
      taints: 'taints',
      tridentSystemDisk: 'tridentSystemDisk',
      tridentSystemSizeDisk: 'tridentSystemSizeDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationDisk: 'string',
      etcdDisk: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rootPassword: 'string',
      taints: { 'type': 'array', 'itemType': UpdateEnvironmentNodeRequestTaints },
      tridentSystemDisk: 'string',
      tridentSystemSizeDisk: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentNodeResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEnvironmentNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEnvironmentNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentProductVersionRequest extends $tea.Model {
  oldProductVersionSpecUID?: string;
  oldProductVersionUID?: string;
  productVersionSpecUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      oldProductVersionSpecUID: 'oldProductVersionSpecUID',
      oldProductVersionUID: 'oldProductVersionUID',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldProductVersionSpecUID: 'string',
      oldProductVersionUID: 'string',
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentProductVersionResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentProductVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateEnvironmentProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEnvironmentProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFoundationComponentReferenceRequest extends $tea.Model {
  componentOrchestrationValues?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      componentOrchestrationValues: 'componentOrchestrationValues',
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentOrchestrationValues: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFoundationComponentReferenceResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFoundationComponentReferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFoundationComponentReferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFoundationComponentReferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFoundationReferenceRequest extends $tea.Model {
  clusterConfig?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'clusterConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFoundationReferenceResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFoundationReferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFoundationReferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFoundationReferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductRequest extends $tea.Model {
  categories?: string[];
  description?: string;
  displayName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      description: 'description',
      displayName: 'displayName',
      vendor: 'vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductComponentVersionRequest extends $tea.Model {
  componentOrchestrationValues?: string;
  componentSpecificationUid?: string;
  componentSpecificationValues?: string;
  enable?: boolean;
  newComponentVersionUID?: string;
  policy?: UpdateProductComponentVersionRequestPolicy;
  releaseName?: string;
  unsetComponentVersionSpec?: boolean;
  static names(): { [key: string]: string } {
    return {
      componentOrchestrationValues: 'componentOrchestrationValues',
      componentSpecificationUid: 'componentSpecificationUid',
      componentSpecificationValues: 'componentSpecificationValues',
      enable: 'enable',
      newComponentVersionUID: 'newComponentVersionUID',
      policy: 'policy',
      releaseName: 'releaseName',
      unsetComponentVersionSpec: 'unsetComponentVersionSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentOrchestrationValues: 'string',
      componentSpecificationUid: 'string',
      componentSpecificationValues: 'string',
      enable: 'boolean',
      newComponentVersionUID: 'string',
      policy: UpdateProductComponentVersionRequestPolicy,
      releaseName: 'string',
      unsetComponentVersionSpec: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductComponentVersionResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateProductComponentVersionResponseBodyData;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateProductComponentVersionResponseBodyData,
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductComponentVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProductComponentVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProductComponentVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFoundationVersionRequest extends $tea.Model {
  foundationVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      foundationVersionUID: 'foundationVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      foundationVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFoundationVersionResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFoundationVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProductFoundationVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProductFoundationVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionRequest extends $tea.Model {
  action?: string;
  continuousIntegration?: boolean;
  description?: string;
  entry?: string;
  timeout?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      continuousIntegration: 'continuousIntegration',
      description: 'description',
      entry: 'entry',
      timeout: 'timeout',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      continuousIntegration: 'boolean',
      description: 'string',
      entry: 'string',
      timeout: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionConfigRequest extends $tea.Model {
  componentVersionUID?: string;
  description?: string;
  name?: string;
  parentComponentVersionUID?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      componentVersionUID: 'componentVersionUID',
      description: 'description',
      name: 'name',
      parentComponentVersionUID: 'parentComponentVersionUID',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentVersionUID: 'string',
      description: 'string',
      name: 'string',
      parentComponentVersionUID: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionConfigResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProductVersionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProductVersionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateEnvironmentTunnelRequest extends $tea.Model {
  tunnelConfig?: ValidateEnvironmentTunnelRequestTunnelConfig;
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      tunnelConfig: 'tunnelConfig',
      tunnelType: 'tunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelConfig: ValidateEnvironmentTunnelRequestTunnelConfig,
      tunnelType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateEnvironmentTunnelResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateEnvironmentTunnelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateEnvironmentTunnelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ValidateEnvironmentTunnelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionClusterEnginesInfrastructureStatements extends $tea.Model {
  default?: boolean;
  distroName?: string;
  distroVersion?: string;
  platform?: Platform;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      distroName: 'distroName',
      distroVersion: 'distroVersion',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'boolean',
      distroName: 'string',
      distroVersion: 'string',
      platform: Platform,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionClusterEnginesNetworkList extends $tea.Model {
  ipFamilies?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ipFamilies: 'ipFamilies',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipFamilies: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionClusterEnginesPackageToolsInstallToolPackages extends $tea.Model {
  architecture?: string;
  os?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionClusterEnginesPackageTools extends $tea.Model {
  image?: string;
  installToolPackages?: FoundationVersionClusterEnginesPackageToolsInstallToolPackages[];
  name?: string;
  packageFormat?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      installToolPackages: 'installToolPackages',
      name: 'name',
      packageFormat: 'packageFormat',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      installToolPackages: { 'type': 'array', 'itemType': FoundationVersionClusterEnginesPackageToolsInstallToolPackages },
      name: 'string',
      packageFormat: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionClusterEnginesPackages extends $tea.Model {
  architecture?: string;
  os?: string;
  platforms?: Platform[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
      platforms: 'platforms',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
      platforms: { 'type': 'array', 'itemType': Platform },
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionClusterEngines extends $tea.Model {
  infrastructureStatements?: FoundationVersionClusterEnginesInfrastructureStatements[];
  networkList?: FoundationVersionClusterEnginesNetworkList[];
  packageTools?: FoundationVersionClusterEnginesPackageTools[];
  packages?: FoundationVersionClusterEnginesPackages[];
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      infrastructureStatements: 'infrastructureStatements',
      networkList: 'networkList',
      packageTools: 'packageTools',
      packages: 'packages',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infrastructureStatements: { 'type': 'array', 'itemType': FoundationVersionClusterEnginesInfrastructureStatements },
      networkList: { 'type': 'array', 'itemType': FoundationVersionClusterEnginesNetworkList },
      packageTools: { 'type': 'array', 'itemType': FoundationVersionClusterEnginesPackageTools },
      packages: { 'type': 'array', 'itemType': FoundationVersionClusterEnginesPackages },
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionDriverComponents extends $tea.Model {
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionDriver extends $tea.Model {
  components?: FoundationVersionDriverComponents[];
  static names(): { [key: string]: string } {
    return {
      components: 'components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': FoundationVersionDriverComponents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionPackageTools extends $tea.Model {
  name?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionToolsSiteSurvey extends $tea.Model {
  clusterCheckerURL?: string;
  clusterInfoBrief?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCheckerURL: 'clusterCheckerURL',
      clusterInfoBrief: 'clusterInfoBrief',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCheckerURL: 'string',
      clusterInfoBrief: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoundationVersionTools extends $tea.Model {
  siteSurvey?: FoundationVersionToolsSiteSurvey;
  static names(): { [key: string]: string } {
    return {
      siteSurvey: 'siteSurvey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteSurvey: FoundationVersionToolsSiteSurvey,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInfoResponseClusterTaints extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInfoResponseNetworkCards extends $tea.Model {
  ip?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInfoResponseTaints extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceDataModuleList extends $tea.Model {
  config?: string;
  moduleCode?: string;
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      moduleCode: 'ModuleCode',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      moduleCode: 'string',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceInfoClusterTaints extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceInfoNetworkCards extends $tea.Model {
  ip?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceInfoTaints extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelSelectorMatchExpressions extends $tea.Model {
  key?: string;
  operator?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operator: 'operator',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductComponentRelationDetailPolicyMultiCluster extends $tea.Model {
  targetClusters?: string[];
  static names(): { [key: string]: string } {
    return {
      targetClusters: 'targetClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetClusters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductComponentRelationDetailPolicy extends $tea.Model {
  multiCluster?: ProductComponentRelationDetailPolicyMultiCluster;
  static names(): { [key: string]: string } {
    return {
      multiCluster: 'multiCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiCluster: ProductComponentRelationDetailPolicyMultiCluster,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceCpu extends $tea.Model {
  required?: number;
  static names(): { [key: string]: string } {
    return {
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceImage extends $tea.Model {
  id?: string;
  nameRegex?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      nameRegex: 'nameRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      nameRegex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceMemory extends $tea.Model {
  required?: number;
  static names(): { [key: string]: string } {
    return {
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourcePublicIP extends $tea.Model {
  bandwidth?: number;
  required?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      required: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceStorage extends $tea.Model {
  required?: number;
  static names(): { [key: string]: string } {
    return {
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentNodesRequestDataDisk extends $tea.Model {
  name?: string;
  required?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentNodesRequestSystemDisk extends $tea.Model {
  name?: string;
  required?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentNodesRequestTaints extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnvironmentProductVersionsRequestProductVersionInfoList extends $tea.Model {
  namespace?: string;
  productVersionUID?: string;
  specUID?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      productVersionUID: 'productVersionUID',
      specUID: 'specUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      productVersionUID: 'string',
      specUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductComponentVersionResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProductVersionConfigResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddProductVersionConfigRequestProductVersionConfigList extends $tea.Model {
  componentReleaseName?: string;
  componentVersionUID?: string;
  description?: string;
  name?: string;
  parentComponentReleaseName?: string;
  parentComponentVersionUID?: string;
  scope?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      componentReleaseName: 'componentReleaseName',
      componentVersionUID: 'componentVersionUID',
      description: 'description',
      name: 'name',
      parentComponentReleaseName: 'parentComponentReleaseName',
      parentComponentVersionUID: 'parentComponentVersionUID',
      scope: 'scope',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentReleaseName: 'string',
      componentVersionUID: 'string',
      description: 'string',
      name: 'string',
      parentComponentReleaseName: 'string',
      parentComponentVersionUID: 'string',
      scope: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliverableRequestFoundation extends $tea.Model {
  clusterConfig?: string;
  foundationReferenceUID?: string;
  foundationVersion?: string;
  foundationVersionUID?: string;
  reusable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'clusterConfig',
      foundationReferenceUID: 'foundationReferenceUID',
      foundationVersion: 'foundationVersion',
      foundationVersionUID: 'foundationVersionUID',
      reusable: 'reusable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      foundationReferenceUID: 'string',
      foundationVersion: 'string',
      foundationVersionUID: 'string',
      reusable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliverableRequestProducts extends $tea.Model {
  namespace?: string;
  productName?: string;
  productType?: string;
  productUID?: string;
  productVersion?: string;
  productVersionSpecName?: string;
  productVersionSpecUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      productName: 'productName',
      productType: 'productType',
      productUID: 'productUID',
      productVersion: 'productVersion',
      productVersionSpecName: 'productVersionSpecName',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      productName: 'string',
      productType: 'string',
      productUID: 'string',
      productVersion: 'string',
      productVersionSpecName: 'string',
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliverableResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryInstanceRequestFoundation extends $tea.Model {
  clusterConfig?: string;
  foundationReferenceUID?: string;
  foundationVersion?: string;
  foundationVersionUID?: string;
  reusable?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'clusterConfig',
      foundationReferenceUID: 'foundationReferenceUID',
      foundationVersion: 'foundationVersion',
      foundationVersionUID: 'foundationVersionUID',
      reusable: 'reusable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      foundationReferenceUID: 'string',
      foundationVersion: 'string',
      foundationVersionUID: 'string',
      reusable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryInstanceRequestProducts extends $tea.Model {
  namespace?: string;
  order?: string;
  productName?: string;
  productType?: string;
  productUID?: string;
  productVersion?: string;
  productVersionSpecName?: string;
  productVersionSpecUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      order: 'order',
      productName: 'productName',
      productType: 'productType',
      productUID: 'productUID',
      productVersion: 'productVersion',
      productVersionSpecName: 'productVersionSpecName',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      order: 'string',
      productName: 'string',
      productType: 'string',
      productUID: 'string',
      productVersion: 'string',
      productVersionSpecName: 'string',
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryInstanceResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryPackageResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentRequestPlatform extends $tea.Model {
  architecture?: string;
  os?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentResponseBodyData extends $tea.Model {
  environmentUID?: string;
  vendorConfig?: string;
  static names(): { [key: string]: string } {
    return {
      environmentUID: 'environmentUID',
      vendorConfig: 'vendorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentUID: 'string',
      vendorConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentLicenseRequestLicenseQuotaClusterQuota extends $tea.Model {
  cpuCoreLimit?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreLimit: 'cpuCoreLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentLicenseRequestLicenseQuotaCustomQuotas extends $tea.Model {
  description?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentLicenseRequestLicenseQuota extends $tea.Model {
  clusterQuota?: CreateEnvironmentLicenseRequestLicenseQuotaClusterQuota;
  customQuotas?: CreateEnvironmentLicenseRequestLicenseQuotaCustomQuotas[];
  static names(): { [key: string]: string } {
    return {
      clusterQuota: 'clusterQuota',
      customQuotas: 'customQuotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterQuota: CreateEnvironmentLicenseRequestLicenseQuotaClusterQuota,
      customQuotas: { 'type': 'array', 'itemType': CreateEnvironmentLicenseRequestLicenseQuotaCustomQuotas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnvironmentLicenseResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFoundationReferenceRequestComponentConfigs extends $tea.Model {
  componentVersionUID?: string;
  orchestrationValues?: string;
  static names(): { [key: string]: string } {
    return {
      componentVersionUID: 'componentVersionUID',
      orchestrationValues: 'orchestrationValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentVersionUID: 'string',
      orchestrationValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFoundationReferenceRequestFoundationReferenceConfigs extends $tea.Model {
  componentReleaseName?: string;
  configType?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      componentReleaseName: 'componentReleaseName',
      configType: 'configType',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentReleaseName: 'string',
      configType: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFoundationReferenceResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductDeploymentResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionPackageResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProductInstanceDeploymentConfigResponseBodyData extends $tea.Model {
  packageConfig?: string;
  static names(): { [key: string]: string } {
    return {
      packageConfig: 'packageConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentResponseBodyData extends $tea.Model {
  category?: string;
  description?: string;
  documents?: string;
  name?: string;
  public?: boolean;
  singleton?: boolean;
  source?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      documents: 'documents',
      name: 'name',
      public: 'public',
      singleton: 'singleton',
      source: 'source',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      documents: 'string',
      name: 'string',
      public: 'boolean',
      singleton: 'boolean',
      source: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentVersionResponseBodyDataResources extends $tea.Model {
  limits?: { [key: string]: any };
  requests?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      limits: 'limits',
      requests: 'requests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limits: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requests: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComponentVersionResponseBodyData extends $tea.Model {
  componentName?: string;
  componentUID?: string;
  description?: string;
  documents?: string;
  orchestrationValues?: string;
  packageURL?: string;
  parentComponent?: boolean;
  productComponentVersionUID?: string;
  provider?: string;
  readme?: string;
  resources?: GetComponentVersionResponseBodyDataResources;
  uid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      componentUID: 'componentUID',
      description: 'description',
      documents: 'documents',
      orchestrationValues: 'orchestrationValues',
      packageURL: 'packageURL',
      parentComponent: 'parentComponent',
      productComponentVersionUID: 'productComponentVersionUID',
      provider: 'provider',
      readme: 'readme',
      resources: 'resources',
      uid: 'uid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentUID: 'string',
      description: 'string',
      documents: 'string',
      orchestrationValues: 'string',
      packageURL: 'string',
      parentComponent: 'boolean',
      productComponentVersionUID: 'string',
      provider: 'string',
      readme: 'string',
      resources: GetComponentVersionResponseBodyDataResources,
      uid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliverableResponseBodyDataFoundation extends $tea.Model {
  clusterConfig?: string;
  foundationReferenceUID?: string;
  foundationVersion?: string;
  foundationVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'clusterConfig',
      foundationReferenceUID: 'foundationReferenceUID',
      foundationVersion: 'foundationVersion',
      foundationVersionUID: 'foundationVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      foundationReferenceUID: 'string',
      foundationVersion: 'string',
      foundationVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliverableResponseBodyDataProducts extends $tea.Model {
  namespace?: string;
  productName?: string;
  productType?: string;
  productUID?: string;
  productVersion?: string;
  productVersionSpecName?: string;
  productVersionSpecUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      productName: 'productName',
      productType: 'productType',
      productUID: 'productUID',
      productVersion: 'productVersion',
      productVersionSpecName: 'productVersionSpecName',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      productName: 'string',
      productType: 'string',
      productUID: 'string',
      productVersion: 'string',
      productVersionSpecName: 'string',
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliverableResponseBodyData extends $tea.Model {
  foundation?: GetDeliverableResponseBodyDataFoundation;
  products?: GetDeliverableResponseBodyDataProducts[];
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      foundation: 'foundation',
      products: 'products',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      foundation: GetDeliverableResponseBodyDataFoundation,
      products: { 'type': 'array', 'itemType': GetDeliverableResponseBodyDataProducts },
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryPackageResponseBodyData extends $tea.Model {
  deliverableUID?: string;
  originDeliverableUID?: string;
  packageContentType?: string;
  packageSize?: string;
  packageStatus?: string;
  packageType?: string;
  packageUID?: string;
  packageURL?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      deliverableUID: 'deliverableUID',
      originDeliverableUID: 'originDeliverableUID',
      packageContentType: 'packageContentType',
      packageSize: 'packageSize',
      packageStatus: 'packageStatus',
      packageType: 'packageType',
      packageUID: 'packageUID',
      packageURL: 'packageURL',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverableUID: 'string',
      originDeliverableUID: 'string',
      packageContentType: 'string',
      packageSize: 'string',
      packageStatus: 'string',
      packageType: 'string',
      packageUID: 'string',
      packageURL: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentRequestOptions extends $tea.Model {
  withSiteSurveyReport?: boolean;
  static names(): { [key: string]: string } {
    return {
      withSiteSurveyReport: 'withSiteSurveyReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withSiteSurveyReport: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyDataAdvancedConfigs extends $tea.Model {
  enableDeploySimulation?: boolean;
  enableSiteSurvey?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDeploySimulation: 'enableDeploySimulation',
      enableSiteSurvey: 'enableSiteSurvey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDeploySimulation: 'boolean',
      enableSiteSurvey: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyDataPlatform extends $tea.Model {
  architecture?: string;
  os?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyDataSiteSurveyReportCheckListFailedList extends $tea.Model {
  ip?: string;
  reason?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      reason: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyDataSiteSurveyReportCheckList extends $tea.Model {
  description?: { [key: string]: any };
  failedList?: GetEnvironmentResponseBodyDataSiteSurveyReportCheckListFailedList[];
  level?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      failedList: 'failedList',
      level: 'level',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      failedList: { 'type': 'array', 'itemType': GetEnvironmentResponseBodyDataSiteSurveyReportCheckListFailedList },
      level: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyDataSiteSurveyReport extends $tea.Model {
  checkList?: GetEnvironmentResponseBodyDataSiteSurveyReportCheckList[];
  result?: string;
  static names(): { [key: string]: string } {
    return {
      checkList: 'checkList',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkList: { 'type': 'array', 'itemType': GetEnvironmentResponseBodyDataSiteSurveyReportCheckList },
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentResponseBodyData extends $tea.Model {
  advancedConfigs?: GetEnvironmentResponseBodyDataAdvancedConfigs;
  clusterId?: string;
  clusterUID?: string;
  createdAt?: string;
  description?: string;
  expiredAt?: string;
  foundationType?: string;
  foundationVersion?: string;
  foundationVersionUID?: string;
  instanceList?: InstanceInfo[];
  instanceStatus?: string;
  location?: string;
  name?: string;
  oldProductVersion?: string;
  oldProductVersionUID?: string;
  platform?: GetEnvironmentResponseBodyDataPlatform;
  platformList?: Platform[];
  platformStatus?: string;
  productName?: string;
  productVersion?: string;
  siteSurveyReport?: GetEnvironmentResponseBodyDataSiteSurveyReport;
  uid?: string;
  vendorConfig?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedConfigs: 'advancedConfigs',
      clusterId: 'clusterId',
      clusterUID: 'clusterUID',
      createdAt: 'createdAt',
      description: 'description',
      expiredAt: 'expiredAt',
      foundationType: 'foundationType',
      foundationVersion: 'foundationVersion',
      foundationVersionUID: 'foundationVersionUID',
      instanceList: 'instanceList',
      instanceStatus: 'instanceStatus',
      location: 'location',
      name: 'name',
      oldProductVersion: 'oldProductVersion',
      oldProductVersionUID: 'oldProductVersionUID',
      platform: 'platform',
      platformList: 'platformList',
      platformStatus: 'platformStatus',
      productName: 'productName',
      productVersion: 'productVersion',
      siteSurveyReport: 'siteSurveyReport',
      uid: 'uid',
      vendorConfig: 'vendorConfig',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfigs: GetEnvironmentResponseBodyDataAdvancedConfigs,
      clusterId: 'string',
      clusterUID: 'string',
      createdAt: 'string',
      description: 'string',
      expiredAt: 'string',
      foundationType: 'string',
      foundationVersion: 'string',
      foundationVersionUID: 'string',
      instanceList: { 'type': 'array', 'itemType': InstanceInfo },
      instanceStatus: 'string',
      location: 'string',
      name: 'string',
      oldProductVersion: 'string',
      oldProductVersionUID: 'string',
      platform: GetEnvironmentResponseBodyDataPlatform,
      platformList: { 'type': 'array', 'itemType': Platform },
      platformStatus: 'string',
      productName: 'string',
      productVersion: 'string',
      siteSurveyReport: GetEnvironmentResponseBodyDataSiteSurveyReport,
      uid: 'string',
      vendorConfig: 'string',
      vendorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentDeliveryInstanceResponseBodyData extends $tea.Model {
  clusterUID?: string;
  deliverableConfigUID?: string;
  deliverableUID?: string;
  envUID?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterUID: 'clusterUID',
      deliverableConfigUID: 'deliverableConfigUID',
      deliverableUID: 'deliverableUID',
      envUID: 'envUID',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterUID: 'string',
      deliverableConfigUID: 'string',
      deliverableUID: 'string',
      envUID: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseRequestOptions extends $tea.Model {
  withSecretYAML?: boolean;
  static names(): { [key: string]: string } {
    return {
      withSecretYAML: 'withSecretYAML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withSecretYAML: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseResponseBodyDataLicenseQuotaClusterQuota extends $tea.Model {
  cpuCoreLimit?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreLimit: 'cpuCoreLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseResponseBodyDataLicenseQuotaComponentQuotas extends $tea.Model {
  componentName?: string;
  componentSource?: string;
  instanceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      componentSource: 'componentSource',
      instanceLimit: 'instanceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentSource: 'string',
      instanceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseResponseBodyDataLicenseQuotaCustomQuotas extends $tea.Model {
  description?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseResponseBodyDataLicenseQuota extends $tea.Model {
  clusterQuota?: GetEnvironmentLicenseResponseBodyDataLicenseQuotaClusterQuota;
  componentQuotas?: GetEnvironmentLicenseResponseBodyDataLicenseQuotaComponentQuotas[];
  customQuotas?: GetEnvironmentLicenseResponseBodyDataLicenseQuotaCustomQuotas[];
  static names(): { [key: string]: string } {
    return {
      clusterQuota: 'clusterQuota',
      componentQuotas: 'componentQuotas',
      customQuotas: 'customQuotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterQuota: GetEnvironmentLicenseResponseBodyDataLicenseQuotaClusterQuota,
      componentQuotas: { 'type': 'array', 'itemType': GetEnvironmentLicenseResponseBodyDataLicenseQuotaComponentQuotas },
      customQuotas: { 'type': 'array', 'itemType': GetEnvironmentLicenseResponseBodyDataLicenseQuotaCustomQuotas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnvironmentLicenseResponseBodyData extends $tea.Model {
  expireTime?: string;
  licenseKey?: string;
  licenseQuota?: GetEnvironmentLicenseResponseBodyDataLicenseQuota;
  productVersionUID?: string;
  rejectReason?: string;
  scope?: string;
  secretYAML?: string;
  status?: string;
  type?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      licenseKey: 'licenseKey',
      licenseQuota: 'licenseQuota',
      productVersionUID: 'productVersionUID',
      rejectReason: 'rejectReason',
      scope: 'scope',
      secretYAML: 'secretYAML',
      status: 'status',
      type: 'type',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      licenseKey: 'string',
      licenseQuota: GetEnvironmentLicenseResponseBodyDataLicenseQuota,
      productVersionUID: 'string',
      rejectReason: 'string',
      scope: 'string',
      secretYAML: 'string',
      status: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationComponentReferenceResponseBodyData extends $tea.Model {
  list?: FoundationComponentReferenceDetail[];
  static names(): { [key: string]: string } {
    return {
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': FoundationComponentReferenceDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationReferenceResponseBodyData extends $tea.Model {
  clusterConfig?: string;
  foundationVersionUID?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'clusterConfig',
      foundationVersionUID: 'foundationVersionUID',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      foundationVersionUID: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationVersionResponseBodyDataSiteSurveyTool extends $tea.Model {
  clusterCheckerURL?: string;
  clusterInfoBrief?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCheckerURL: 'clusterCheckerURL',
      clusterInfoBrief: 'clusterInfoBrief',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCheckerURL: 'string',
      clusterInfoBrief: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFoundationVersionResponseBodyData extends $tea.Model {
  description?: string;
  features?: string[];
  isDefault?: boolean;
  labels?: string;
  name?: string;
  platforms?: Platform[];
  siteSurveyTool?: GetFoundationVersionResponseBodyDataSiteSurveyTool;
  specName?: string;
  status?: string;
  type?: string;
  uid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      features: 'features',
      isDefault: 'isDefault',
      labels: 'labels',
      name: 'name',
      platforms: 'platforms',
      siteSurveyTool: 'siteSurveyTool',
      specName: 'specName',
      status: 'status',
      type: 'type',
      uid: 'uid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      isDefault: 'boolean',
      labels: 'string',
      name: 'string',
      platforms: { 'type': 'array', 'itemType': Platform },
      siteSurveyTool: GetFoundationVersionResponseBodyDataSiteSurveyTool,
      specName: 'string',
      status: 'string',
      type: 'string',
      uid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductResponseBodyDataIcons extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductResponseBodyData extends $tea.Model {
  categories?: string[];
  description?: string;
  displayName?: string;
  icons?: GetProductResponseBodyDataIcons[];
  name?: string;
  uid?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      description: 'description',
      displayName: 'displayName',
      icons: 'icons',
      name: 'name',
      uid: 'uid',
      vendor: 'vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
      icons: { 'type': 'array', 'itemType': GetProductResponseBodyDataIcons },
      name: 'string',
      uid: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductComponentVersionResponseBodyData extends $tea.Model {
  appVersion?: string;
  category?: string;
  componentDescription?: string;
  componentName?: string;
  componentUID?: string;
  componentVersionDescription?: string;
  componentVersionUID?: string;
  enable?: boolean;
  namespace?: string;
  orchestrationValues?: string;
  parentComponent?: boolean;
  parentComponentVersionRelationUID?: string;
  parentComponentVersionUID?: string;
  productVersionUID?: string;
  relationUID?: string;
  releaseName?: string;
  resources?: string;
  sequence?: number;
  source?: string;
  values?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      category: 'category',
      componentDescription: 'componentDescription',
      componentName: 'componentName',
      componentUID: 'componentUID',
      componentVersionDescription: 'componentVersionDescription',
      componentVersionUID: 'componentVersionUID',
      enable: 'enable',
      namespace: 'namespace',
      orchestrationValues: 'orchestrationValues',
      parentComponent: 'parentComponent',
      parentComponentVersionRelationUID: 'parentComponentVersionRelationUID',
      parentComponentVersionUID: 'parentComponentVersionUID',
      productVersionUID: 'productVersionUID',
      relationUID: 'relationUID',
      releaseName: 'releaseName',
      resources: 'resources',
      sequence: 'sequence',
      source: 'source',
      values: 'values',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      category: 'string',
      componentDescription: 'string',
      componentName: 'string',
      componentUID: 'string',
      componentVersionDescription: 'string',
      componentVersionUID: 'string',
      enable: 'boolean',
      namespace: 'string',
      orchestrationValues: 'string',
      parentComponent: 'boolean',
      parentComponentVersionRelationUID: 'string',
      parentComponentVersionUID: 'string',
      productVersionUID: 'string',
      relationUID: 'string',
      releaseName: 'string',
      resources: 'string',
      sequence: 'number',
      source: 'string',
      values: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductDeploymentResponseBodyData extends $tea.Model {
  envParams?: string;
  envUID?: string;
  status?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'envParams',
      envUID: 'envUID',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: 'string',
      envUID: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponseBodyDataDocumentations extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponseBodyDataExtendedResources extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponseBodyData extends $tea.Model {
  continuousIntegration?: boolean;
  description?: string;
  documentations?: GetProductVersionResponseBodyDataDocumentations[];
  extendedResources?: GetProductVersionResponseBodyDataExtendedResources[];
  foundationVersionUID?: string;
  packageURL?: string;
  platforms?: Platform[];
  productName?: string;
  productUID?: string;
  provider?: string;
  timeout?: number;
  uid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      continuousIntegration: 'continuousIntegration',
      description: 'description',
      documentations: 'documentations',
      extendedResources: 'extendedResources',
      foundationVersionUID: 'foundationVersionUID',
      packageURL: 'packageURL',
      platforms: 'platforms',
      productName: 'productName',
      productUID: 'productUID',
      provider: 'provider',
      timeout: 'timeout',
      uid: 'uid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuousIntegration: 'boolean',
      description: 'string',
      documentations: { 'type': 'array', 'itemType': GetProductVersionResponseBodyDataDocumentations },
      extendedResources: { 'type': 'array', 'itemType': GetProductVersionResponseBodyDataExtendedResources },
      foundationVersionUID: 'string',
      packageURL: 'string',
      platforms: { 'type': 'array', 'itemType': Platform },
      productName: 'string',
      productUID: 'string',
      provider: 'string',
      timeout: 'number',
      uid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionDifferencesResponseBodyData extends $tea.Model {
  componentName?: string;
  difference?: string;
  message?: string;
  preVersion?: string;
  releaseName?: string;
  upgradeFlag?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      difference: 'difference',
      message: 'message',
      preVersion: 'preVersion',
      releaseName: 'releaseName',
      upgradeFlag: 'upgradeFlag',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      difference: 'string',
      message: 'string',
      preVersion: 'string',
      releaseName: 'string',
      upgradeFlag: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionPackageResponseBodyData extends $tea.Model {
  packageContentType?: string;
  packageSize?: string;
  packageStatus?: string;
  packageType?: string;
  packageUID?: string;
  packageURL?: string;
  platform?: Platform;
  platformList?: Platform[];
  static names(): { [key: string]: string } {
    return {
      packageContentType: 'packageContentType',
      packageSize: 'packageSize',
      packageStatus: 'packageStatus',
      packageType: 'packageType',
      packageUID: 'packageUID',
      packageURL: 'packageURL',
      platform: 'platform',
      platformList: 'platformList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageContentType: 'string',
      packageSize: 'string',
      packageStatus: 'string',
      packageType: 'string',
      packageUID: 'string',
      packageURL: 'string',
      platform: Platform,
      platformList: { 'type': 'array', 'itemType': Platform },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotResponseBodyAdpInfoComponents extends $tea.Model {
  CPULimit?: string;
  CPURequest?: string;
  componentName?: string;
  componentReleaseName?: string;
  componentVersion?: string;
  memoryLimit?: string;
  memoryRequest?: string;
  orchestrationValue?: string;
  status?: string;
  storageRequest?: string;
  static names(): { [key: string]: string } {
    return {
      CPULimit: 'CPULimit',
      CPURequest: 'CPURequest',
      componentName: 'componentName',
      componentReleaseName: 'componentReleaseName',
      componentVersion: 'componentVersion',
      memoryLimit: 'memoryLimit',
      memoryRequest: 'memoryRequest',
      orchestrationValue: 'orchestrationValue',
      status: 'status',
      storageRequest: 'storageRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPULimit: 'string',
      CPURequest: 'string',
      componentName: 'string',
      componentReleaseName: 'string',
      componentVersion: 'string',
      memoryLimit: 'string',
      memoryRequest: 'string',
      orchestrationValue: 'string',
      status: 'string',
      storageRequest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotResponseBodyAdpInfo extends $tea.Model {
  CPURequest?: string;
  componentNum?: number;
  components?: GetResourceSnapshotResponseBodyAdpInfoComponents[];
  memoryRequest?: string;
  podNum?: number;
  storageRequest?: string;
  workloadNum?: number;
  static names(): { [key: string]: string } {
    return {
      CPURequest: 'CPURequest',
      componentNum: 'componentNum',
      components: 'components',
      memoryRequest: 'memoryRequest',
      podNum: 'podNum',
      storageRequest: 'storageRequest',
      workloadNum: 'workloadNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPURequest: 'string',
      componentNum: 'number',
      components: { 'type': 'array', 'itemType': GetResourceSnapshotResponseBodyAdpInfoComponents },
      memoryRequest: 'string',
      podNum: 'number',
      storageRequest: 'string',
      workloadNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotResponseBodyProductInfoComponents extends $tea.Model {
  CPULimit?: string;
  CPURequest?: string;
  componentName?: string;
  componentReleaseName?: string;
  componentVersion?: string;
  memoryLimit?: string;
  memoryRequest?: string;
  orchestrationValue?: string;
  status?: string;
  storageRequest?: string;
  static names(): { [key: string]: string } {
    return {
      CPULimit: 'CPULimit',
      CPURequest: 'CPURequest',
      componentName: 'componentName',
      componentReleaseName: 'componentReleaseName',
      componentVersion: 'componentVersion',
      memoryLimit: 'memoryLimit',
      memoryRequest: 'memoryRequest',
      orchestrationValue: 'orchestrationValue',
      status: 'status',
      storageRequest: 'storageRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPULimit: 'string',
      CPURequest: 'string',
      componentName: 'string',
      componentReleaseName: 'string',
      componentVersion: 'string',
      memoryLimit: 'string',
      memoryRequest: 'string',
      orchestrationValue: 'string',
      status: 'string',
      storageRequest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotResponseBodyProductInfo extends $tea.Model {
  CPURequest?: string;
  componentNum?: number;
  components?: GetResourceSnapshotResponseBodyProductInfoComponents[];
  memoryRequest?: string;
  podNum?: number;
  storageRequest?: string;
  workloadNum?: number;
  static names(): { [key: string]: string } {
    return {
      CPURequest: 'CPURequest',
      componentNum: 'componentNum',
      components: 'components',
      memoryRequest: 'memoryRequest',
      podNum: 'podNum',
      storageRequest: 'storageRequest',
      workloadNum: 'workloadNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPURequest: 'string',
      componentNum: 'number',
      components: { 'type': 'array', 'itemType': GetResourceSnapshotResponseBodyProductInfoComponents },
      memoryRequest: 'string',
      podNum: 'number',
      storageRequest: 'string',
      workloadNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceSnapshotResponseBodySpecParamConfigs extends $tea.Model {
  componentName?: string;
  componentReleaseName?: string;
  componentSource?: string;
  componentVersion?: string;
  name?: string;
  paramType?: string;
  parentComponentName?: string;
  parentComponentReleaseName?: string;
  parentComponentVersion?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      componentReleaseName: 'componentReleaseName',
      componentSource: 'componentSource',
      componentVersion: 'componentVersion',
      name: 'name',
      paramType: 'paramType',
      parentComponentName: 'parentComponentName',
      parentComponentReleaseName: 'parentComponentReleaseName',
      parentComponentVersion: 'parentComponentVersion',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentReleaseName: 'string',
      componentSource: 'string',
      componentVersion: 'string',
      name: 'string',
      paramType: 'string',
      parentComponentName: 'string',
      parentComponentReleaseName: 'string',
      parentComponentVersion: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowStatusResponseBodyDataStepStatusWorkflowTasks extends $tea.Model {
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowStatusResponseBodyDataStepStatus extends $tea.Model {
  name?: string;
  status?: string;
  workflowTasks?: GetWorkflowStatusResponseBodyDataStepStatusWorkflowTasks[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
      workflowTasks: 'workflowTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
      workflowTasks: { 'type': 'array', 'itemType': GetWorkflowStatusResponseBodyDataStepStatusWorkflowTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowStatusResponseBodyData extends $tea.Model {
  status?: string;
  stepStatus?: GetWorkflowStatusResponseBodyDataStepStatus[];
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      stepStatus: 'stepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stepStatus: { 'type': 'array', 'itemType': GetWorkflowStatusResponseBodyDataStepStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitEnvironmentResourceResponseBodyData extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentVersionsRequestPlatforms extends $tea.Model {
  architecture?: string;
  os?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentVersionsResponseBodyDataList extends $tea.Model {
  appVersion?: string;
  componentName?: string;
  componentUID?: string;
  description?: string;
  documents?: string;
  imagesMapping?: string;
  orchestrationValues?: string;
  packageURL?: string;
  parentComponent?: boolean;
  readme?: string;
  resources?: string;
  uid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      componentName: 'componentName',
      componentUID: 'componentUID',
      description: 'description',
      documents: 'documents',
      imagesMapping: 'imagesMapping',
      orchestrationValues: 'orchestrationValues',
      packageURL: 'packageURL',
      parentComponent: 'parentComponent',
      readme: 'readme',
      resources: 'resources',
      uid: 'uid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      componentName: 'string',
      componentUID: 'string',
      description: 'string',
      documents: 'string',
      imagesMapping: 'string',
      orchestrationValues: 'string',
      packageURL: 'string',
      parentComponent: 'boolean',
      readme: 'string',
      resources: 'string',
      uid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentVersionsResponseBodyData extends $tea.Model {
  list?: ListComponentVersionsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListComponentVersionsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyDataListAnnotations extends $tea.Model {
  annotations?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyDataList extends $tea.Model {
  annotations?: ListComponentsResponseBodyDataListAnnotations;
  category?: string;
  description?: string;
  documents?: string;
  name?: string;
  provider?: string;
  public?: boolean;
  singleton?: boolean;
  source?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      category: 'category',
      description: 'description',
      documents: 'documents',
      name: 'name',
      provider: 'provider',
      public: 'public',
      singleton: 'singleton',
      source: 'source',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: ListComponentsResponseBodyDataListAnnotations,
      category: 'string',
      description: 'string',
      documents: 'string',
      name: 'string',
      provider: 'string',
      public: 'boolean',
      singleton: 'boolean',
      source: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyData extends $tea.Model {
  list?: ListComponentsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListComponentsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryInstanceChangeRecordsResponseBodyDataEnvNodeInfo extends $tea.Model {
  capacity?: string;
  cpu?: string;
  identifier?: string;
  label?: { [key: string]: any };
  memory?: string;
  name?: string;
  privateIP?: string;
  taints?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      capacity: 'capacity',
      cpu: 'cpu',
      identifier: 'identifier',
      label: 'label',
      memory: 'memory',
      name: 'name',
      privateIP: 'privateIP',
      taints: 'taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      cpu: 'string',
      identifier: 'string',
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      memory: 'string',
      name: 'string',
      privateIP: 'string',
      taints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryInstanceChangeRecordsResponseBodyData extends $tea.Model {
  deliverableUID?: string;
  envChangeRecords?: { [key: string]: any };
  envNodeInfo?: ListDeliveryInstanceChangeRecordsResponseBodyDataEnvNodeInfo[];
  envPackageConfig?: string;
  originDeliverableUID?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      deliverableUID: 'deliverableUID',
      envChangeRecords: 'envChangeRecords',
      envNodeInfo: 'envNodeInfo',
      envPackageConfig: 'envPackageConfig',
      originDeliverableUID: 'originDeliverableUID',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverableUID: 'string',
      envChangeRecords: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      envNodeInfo: { 'type': 'array', 'itemType': ListDeliveryInstanceChangeRecordsResponseBodyDataEnvNodeInfo },
      envPackageConfig: 'string',
      originDeliverableUID: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryPackageResponseBodyData extends $tea.Model {
  deliverableUID?: string;
  originDeliverableUID?: string;
  packageContentType?: string;
  packageSize?: string;
  packageStatus?: string;
  packageType?: string;
  packageUID?: string;
  packageURL?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      deliverableUID: 'deliverableUID',
      originDeliverableUID: 'originDeliverableUID',
      packageContentType: 'packageContentType',
      packageSize: 'packageSize',
      packageStatus: 'packageStatus',
      packageType: 'packageType',
      packageUID: 'packageUID',
      packageURL: 'packageURL',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverableUID: 'string',
      originDeliverableUID: 'string',
      packageContentType: 'string',
      packageSize: 'string',
      packageStatus: 'string',
      packageType: 'string',
      packageUID: 'string',
      packageURL: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponseBodyDataListLicenseQuotaClusterQuota extends $tea.Model {
  cpuCoreLimit?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreLimit: 'cpuCoreLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponseBodyDataListLicenseQuotaComponentQuotas extends $tea.Model {
  componentName?: string;
  componentSource?: string;
  instanceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      componentSource: 'componentSource',
      instanceLimit: 'instanceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentSource: 'string',
      instanceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponseBodyDataListLicenseQuotaCustomQuotas extends $tea.Model {
  description?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponseBodyDataListLicenseQuota extends $tea.Model {
  clusterQuota?: ListEnvironmentLicensesResponseBodyDataListLicenseQuotaClusterQuota;
  componentQuotas?: ListEnvironmentLicensesResponseBodyDataListLicenseQuotaComponentQuotas[];
  customQuotas?: ListEnvironmentLicensesResponseBodyDataListLicenseQuotaCustomQuotas[];
  static names(): { [key: string]: string } {
    return {
      clusterQuota: 'clusterQuota',
      componentQuotas: 'componentQuotas',
      customQuotas: 'customQuotas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterQuota: ListEnvironmentLicensesResponseBodyDataListLicenseQuotaClusterQuota,
      componentQuotas: { 'type': 'array', 'itemType': ListEnvironmentLicensesResponseBodyDataListLicenseQuotaComponentQuotas },
      customQuotas: { 'type': 'array', 'itemType': ListEnvironmentLicensesResponseBodyDataListLicenseQuotaCustomQuotas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponseBodyDataList extends $tea.Model {
  expireTime?: string;
  licenseKey?: string;
  licenseQuota?: ListEnvironmentLicensesResponseBodyDataListLicenseQuota;
  productVersionUID?: string;
  rejectReason?: string;
  scope?: string;
  status?: string;
  type?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      licenseKey: 'licenseKey',
      licenseQuota: 'licenseQuota',
      productVersionUID: 'productVersionUID',
      rejectReason: 'rejectReason',
      scope: 'scope',
      status: 'status',
      type: 'type',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      licenseKey: 'string',
      licenseQuota: ListEnvironmentLicensesResponseBodyDataListLicenseQuota,
      productVersionUID: 'string',
      rejectReason: 'string',
      scope: 'string',
      status: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentLicensesResponseBodyData extends $tea.Model {
  list?: ListEnvironmentLicensesResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListEnvironmentLicensesResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentNodesResponseBodyData extends $tea.Model {
  list?: InstanceInfo[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': InstanceInfo },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentTunnelsResponseBodyDataListTunnelConfig extends $tea.Model {
  hostname?: string;
  password?: string;
  regionId?: string;
  sshPort?: number;
  username?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'hostname',
      password: 'password',
      regionId: 'regionId',
      sshPort: 'sshPort',
      username: 'username',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      password: 'string',
      regionId: 'string',
      sshPort: 'number',
      username: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentTunnelsResponseBodyDataList extends $tea.Model {
  tunnelConfig?: ListEnvironmentTunnelsResponseBodyDataListTunnelConfig;
  tunnelType?: string;
  static names(): { [key: string]: string } {
    return {
      tunnelConfig: 'tunnelConfig',
      tunnelType: 'tunnelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelConfig: ListEnvironmentTunnelsResponseBodyDataListTunnelConfig,
      tunnelType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentTunnelsResponseBodyData extends $tea.Model {
  list?: ListEnvironmentTunnelsResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListEnvironmentTunnelsResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyDataListPlatform extends $tea.Model {
  architecture?: string;
  os?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyDataList extends $tea.Model {
  createdAt?: string;
  description?: string;
  expireAt?: string;
  instanceStatus?: string;
  location?: string;
  name?: string;
  platform?: ListEnvironmentsResponseBodyDataListPlatform;
  platformList?: Platform[];
  platformStatus?: string;
  productName?: string;
  productVersion?: string;
  productVersionUID?: string;
  uid?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      expireAt: 'expireAt',
      instanceStatus: 'instanceStatus',
      location: 'location',
      name: 'name',
      platform: 'platform',
      platformList: 'platformList',
      platformStatus: 'platformStatus',
      productName: 'productName',
      productVersion: 'productVersion',
      productVersionUID: 'productVersionUID',
      uid: 'uid',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      expireAt: 'string',
      instanceStatus: 'string',
      location: 'string',
      name: 'string',
      platform: ListEnvironmentsResponseBodyDataListPlatform,
      platformList: { 'type': 'array', 'itemType': Platform },
      platformStatus: 'string',
      productName: 'string',
      productVersion: 'string',
      productVersionUID: 'string',
      uid: 'string',
      vendorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBodyData extends $tea.Model {
  list?: ListEnvironmentsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListEnvironmentsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationComponentVersionsResponseBodyData extends $tea.Model {
  list?: ComponentVersion[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ComponentVersion },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoundationVersionsResponseBodyData extends $tea.Model {
  list?: FoundationVersion[];
  static names(): { [key: string]: string } {
    return {
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': FoundationVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductComponentVersionsResponseBodyData extends $tea.Model {
  list?: ProductComponentRelationDetail[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ProductComponentRelationDetail },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDeploymentsResponseBodyDataList extends $tea.Model {
  envParams?: string;
  envUID?: string;
  oldProductVersion?: string;
  packageContentType?: string;
  packageInfoUID?: string;
  packageType?: string;
  productName?: string;
  productVersion?: string;
  status?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      envParams: 'envParams',
      envUID: 'envUID',
      oldProductVersion: 'oldProductVersion',
      packageContentType: 'packageContentType',
      packageInfoUID: 'packageInfoUID',
      packageType: 'packageType',
      productName: 'productName',
      productVersion: 'productVersion',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envParams: 'string',
      envUID: 'string',
      oldProductVersion: 'string',
      packageContentType: 'string',
      packageInfoUID: 'string',
      packageType: 'string',
      productName: 'string',
      productVersion: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductDeploymentsResponseBodyData extends $tea.Model {
  list?: ListProductDeploymentsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListProductDeploymentsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductEnvironmentsRequestOptions extends $tea.Model {
  filterWithSpecUID?: boolean;
  specUID?: string;
  static names(): { [key: string]: string } {
    return {
      filterWithSpecUID: 'filterWithSpecUID',
      specUID: 'specUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterWithSpecUID: 'boolean',
      specUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductEnvironmentsRequestPlatforms extends $tea.Model {
  architecture?: string;
  os?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductEnvironmentsResponseBodyData extends $tea.Model {
  envName?: string;
  envType?: string;
  envUID?: string;
  instanceStatus?: string;
  oldProductVersion?: string;
  oldProductVersionUID?: string;
  platformStatus?: string;
  productName?: string;
  productUID?: string;
  productVersion?: string;
  productVersionUID?: string;
  provider?: string;
  uid?: string;
  vendorConfig?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      envName: 'envName',
      envType: 'envType',
      envUID: 'envUID',
      instanceStatus: 'instanceStatus',
      oldProductVersion: 'oldProductVersion',
      oldProductVersionUID: 'oldProductVersionUID',
      platformStatus: 'platformStatus',
      productName: 'productName',
      productUID: 'productUID',
      productVersion: 'productVersion',
      productVersionUID: 'productVersionUID',
      provider: 'provider',
      uid: 'uid',
      vendorConfig: 'vendorConfig',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envName: 'string',
      envType: 'string',
      envUID: 'string',
      instanceStatus: 'string',
      oldProductVersion: 'string',
      oldProductVersionUID: 'string',
      platformStatus: 'string',
      productName: 'string',
      productUID: 'string',
      productVersion: 'string',
      productVersionUID: 'string',
      provider: 'string',
      uid: 'string',
      vendorConfig: 'string',
      vendorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductFoundationReferencesResponseBodyData extends $tea.Model {
  foundationReferenceUID?: string;
  foundationVersion?: string;
  foundationVersionName?: string;
  foundationVersionType?: string;
  foundationVersionUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      foundationReferenceUID: 'foundationReferenceUID',
      foundationVersion: 'foundationVersion',
      foundationVersionName: 'foundationVersionName',
      foundationVersionType: 'foundationVersionType',
      foundationVersionUID: 'foundationVersionUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      foundationReferenceUID: 'string',
      foundationVersion: 'string',
      foundationVersionName: 'string',
      foundationVersionType: 'string',
      foundationVersionUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstanceConfigsResponseBodyDataList extends $tea.Model {
  componentName?: string;
  componentReleaseName?: string;
  componentUID?: string;
  componentVersionUID?: string;
  createdAt?: string;
  description?: string;
  envUID?: string;
  name?: string;
  parentComponentName?: string;
  parentComponentReleaseName?: string;
  parentComponentVersionUID?: string;
  productName?: string;
  productVersion?: string;
  productVersionUID?: string;
  uid?: string;
  value?: string;
  valueType?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      componentReleaseName: 'componentReleaseName',
      componentUID: 'componentUID',
      componentVersionUID: 'componentVersionUID',
      createdAt: 'createdAt',
      description: 'description',
      envUID: 'envUID',
      name: 'name',
      parentComponentName: 'parentComponentName',
      parentComponentReleaseName: 'parentComponentReleaseName',
      parentComponentVersionUID: 'parentComponentVersionUID',
      productName: 'productName',
      productVersion: 'productVersion',
      productVersionUID: 'productVersionUID',
      uid: 'uid',
      value: 'value',
      valueType: 'valueType',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentReleaseName: 'string',
      componentUID: 'string',
      componentVersionUID: 'string',
      createdAt: 'string',
      description: 'string',
      envUID: 'string',
      name: 'string',
      parentComponentName: 'string',
      parentComponentReleaseName: 'string',
      parentComponentVersionUID: 'string',
      productName: 'string',
      productVersion: 'string',
      productVersionUID: 'string',
      uid: 'string',
      value: 'string',
      valueType: 'string',
      vendorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstanceConfigsResponseBodyData extends $tea.Model {
  list?: ListProductInstanceConfigsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListProductInstanceConfigsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstancesRequestOptions extends $tea.Model {
  filterWithSpecUID?: boolean;
  specUID?: string;
  static names(): { [key: string]: string } {
    return {
      filterWithSpecUID: 'filterWithSpecUID',
      specUID: 'specUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterWithSpecUID: 'boolean',
      specUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstancesResponseBodyDataList extends $tea.Model {
  clusterUID?: string;
  continuousDeployment?: boolean;
  namespace?: string;
  productName?: string;
  productUID?: string;
  productVersion?: string;
  productVersionSpecUID?: string;
  productVersionUID?: string;
  status?: string;
  timeout?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterUID: 'clusterUID',
      continuousDeployment: 'continuousDeployment',
      namespace: 'namespace',
      productName: 'productName',
      productUID: 'productUID',
      productVersion: 'productVersion',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
      status: 'status',
      timeout: 'timeout',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterUID: 'string',
      continuousDeployment: 'boolean',
      namespace: 'string',
      productName: 'string',
      productUID: 'string',
      productVersion: 'string',
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
      status: 'string',
      timeout: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductInstancesResponseBodyData extends $tea.Model {
  list?: ListProductInstancesResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListProductInstancesResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionConfigsResponseBodyDataList extends $tea.Model {
  componentName?: string;
  componentReleaseName?: string;
  componentVersionUID?: string;
  description?: string;
  name?: string;
  parentComponentName?: string;
  parentComponentReleaseName?: string;
  parentComponentVersionUID?: string;
  productVersionUID?: string;
  scope?: string;
  uid?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'componentName',
      componentReleaseName: 'componentReleaseName',
      componentVersionUID: 'componentVersionUID',
      description: 'description',
      name: 'name',
      parentComponentName: 'parentComponentName',
      parentComponentReleaseName: 'parentComponentReleaseName',
      parentComponentVersionUID: 'parentComponentVersionUID',
      productVersionUID: 'productVersionUID',
      scope: 'scope',
      uid: 'uid',
      value: 'value',
      valueType: 'valueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentReleaseName: 'string',
      componentVersionUID: 'string',
      description: 'string',
      name: 'string',
      parentComponentName: 'string',
      parentComponentReleaseName: 'string',
      parentComponentVersionUID: 'string',
      productVersionUID: 'string',
      scope: 'string',
      uid: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionConfigsResponseBodyData extends $tea.Model {
  list?: ListProductVersionConfigsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListProductVersionConfigsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsRequestPlatforms extends $tea.Model {
  architecture?: string;
  os?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      os: 'os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponseBodyDataListAnnotations extends $tea.Model {
  additionalProp1?: string;
  additionalProp2?: string;
  additionalProp3?: string;
  static names(): { [key: string]: string } {
    return {
      additionalProp1: 'additionalProp1',
      additionalProp2: 'additionalProp2',
      additionalProp3: 'additionalProp3',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalProp1: 'string',
      additionalProp2: 'string',
      additionalProp3: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponseBodyDataListTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponseBodyDataList extends $tea.Model {
  annotations?: ListProductVersionsResponseBodyDataListAnnotations;
  description?: string;
  packageURL?: string;
  productName?: string;
  productUID?: string;
  provider?: string;
  releasedAt?: string;
  tags?: ListProductVersionsResponseBodyDataListTags[];
  uid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      description: 'description',
      packageURL: 'packageURL',
      productName: 'productName',
      productUID: 'productUID',
      provider: 'provider',
      releasedAt: 'releasedAt',
      tags: 'tags',
      uid: 'uid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: ListProductVersionsResponseBodyDataListAnnotations,
      description: 'string',
      packageURL: 'string',
      productName: 'string',
      productUID: 'string',
      provider: 'string',
      releasedAt: 'string',
      tags: { 'type': 'array', 'itemType': ListProductVersionsResponseBodyDataListTags },
      uid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponseBodyData extends $tea.Model {
  list?: ListProductVersionsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListProductVersionsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataList extends $tea.Model {
  description?: string;
  name?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyData extends $tea.Model {
  list?: ListProductsResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListProductsResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowTaskLogsResponseBodyData extends $tea.Model {
  list?: string[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentTunnelRequestTunnelConfig extends $tea.Model {
  hostname?: string;
  password?: string;
  regionId?: string;
  sshPort?: number;
  username?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'hostname',
      password: 'password',
      regionId: 'regionId',
      sshPort: 'sshPort',
      username: 'username',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      password: 'string',
      regionId: 'string',
      sshPort: 'number',
      username: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEnvironmentTunnelResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProductInstanceConfigResponseBodyData extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliverableRequestFoundation extends $tea.Model {
  clusterConfig?: string;
  foundationReferenceUID?: string;
  foundationVersion?: string;
  foundationVersionUID?: string;
  reusable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'clusterConfig',
      foundationReferenceUID: 'foundationReferenceUID',
      foundationVersion: 'foundationVersion',
      foundationVersionUID: 'foundationVersionUID',
      reusable: 'reusable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      foundationReferenceUID: 'string',
      foundationVersion: 'string',
      foundationVersionUID: 'string',
      reusable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliverableRequestProducts extends $tea.Model {
  namespace?: string;
  productName?: string;
  productType?: string;
  productUID?: string;
  productVersion?: string;
  productVersionSpecName?: string;
  productVersionSpecUID?: string;
  productVersionUID?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      productName: 'productName',
      productType: 'productType',
      productUID: 'productUID',
      productVersion: 'productVersion',
      productVersionSpecName: 'productVersionSpecName',
      productVersionSpecUID: 'productVersionSpecUID',
      productVersionUID: 'productVersionUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      productName: 'string',
      productType: 'string',
      productUID: 'string',
      productVersion: 'string',
      productVersionSpecName: 'string',
      productVersionSpecUID: 'string',
      productVersionUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentRequestAdvancedConfigs extends $tea.Model {
  enableDeploySimulation?: boolean;
  enableSiteSurvey?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDeploySimulation: 'enableDeploySimulation',
      enableSiteSurvey: 'enableSiteSurvey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDeploySimulation: 'boolean',
      enableSiteSurvey: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnvironmentNodeRequestTaints extends $tea.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductComponentVersionRequestPolicyMultiCluster extends $tea.Model {
  autoInstall?: boolean;
  targetClusters?: string[];
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'autoInstall',
      targetClusters: 'targetClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      targetClusters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductComponentVersionRequestPolicy extends $tea.Model {
  multiCluster?: UpdateProductComponentVersionRequestPolicyMultiCluster;
  static names(): { [key: string]: string } {
    return {
      multiCluster: 'multiCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiCluster: UpdateProductComponentVersionRequestPolicyMultiCluster,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductComponentVersionResponseBodyData extends $tea.Model {
  relationUID?: string;
  static names(): { [key: string]: string } {
    return {
      relationUID: 'relationUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateEnvironmentTunnelRequestTunnelConfig extends $tea.Model {
  hostname?: string;
  password?: string;
  regionId?: string;
  sshPort?: number;
  username?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'hostname',
      password: 'password',
      regionId: 'regionId',
      sshPort: 'sshPort',
      username: 'username',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      password: 'string',
      regionId: 'string',
      sshPort: 'number',
      username: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("adp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addEnvironmentNodesWithOptions(uid: string, request: AddEnvironmentNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddEnvironmentNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationDisk)) {
      body["applicationDisk"] = request.applicationDisk;
    }

    if (!Util.isUnset(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.dataDisk)) {
      body["dataDisk"] = request.dataDisk;
    }

    if (!Util.isUnset(request.etcdDisk)) {
      body["etcdDisk"] = request.etcdDisk;
    }

    if (!Util.isUnset(request.hostName)) {
      body["hostName"] = request.hostName;
    }

    if (!Util.isUnset(request.labels)) {
      body["labels"] = request.labels;
    }

    if (!Util.isUnset(request.masterPrivateIPs)) {
      body["masterPrivateIPs"] = request.masterPrivateIPs;
    }

    if (!Util.isUnset(request.memory)) {
      body["memory"] = request.memory;
    }

    if (!Util.isUnset(request.os)) {
      body["os"] = request.os;
    }

    if (!Util.isUnset(request.rootPassword)) {
      body["rootPassword"] = request.rootPassword;
    }

    if (!Util.isUnset(request.systemDisk)) {
      body["systemDisk"] = request.systemDisk;
    }

    if (!Util.isUnset(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!Util.isUnset(request.tridentSystemDisk)) {
      body["tridentSystemDisk"] = request.tridentSystemDisk;
    }

    if (!Util.isUnset(request.tridentSystemSizeDisk)) {
      body["tridentSystemSizeDisk"] = request.tridentSystemSizeDisk;
    }

    if (!Util.isUnset(request.workerPrivateIPs)) {
      body["workerPrivateIPs"] = request.workerPrivateIPs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddEnvironmentNodes",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/nodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddEnvironmentNodesResponse>(await this.callApi(params, req, runtime), new AddEnvironmentNodesResponse({}));
  }

  async addEnvironmentNodes(uid: string, request: AddEnvironmentNodesRequest): Promise<AddEnvironmentNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addEnvironmentNodesWithOptions(uid, request, headers, runtime);
  }

  async addEnvironmentProductVersionsWithOptions(uid: string, request: AddEnvironmentProductVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddEnvironmentProductVersionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productVersionInfoList)) {
      body["productVersionInfoList"] = request.productVersionInfoList;
    }

    if (!Util.isUnset(request.productVersionUIDList)) {
      body["productVersionUIDList"] = request.productVersionUIDList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddEnvironmentProductVersions",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/product-versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddEnvironmentProductVersionsResponse>(await this.callApi(params, req, runtime), new AddEnvironmentProductVersionsResponse({}));
  }

  async addEnvironmentProductVersions(uid: string, request: AddEnvironmentProductVersionsRequest): Promise<AddEnvironmentProductVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addEnvironmentProductVersionsWithOptions(uid, request, headers, runtime);
  }

  async addProductComponentVersionWithOptions(uid: string, componentVersionUID: string, request: AddProductComponentVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddProductComponentVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentVersionSpecUID)) {
      body["componentVersionSpecUID"] = request.componentVersionSpecUID;
    }

    if (!Util.isUnset(request.componentVersionSpecValues)) {
      body["componentVersionSpecValues"] = request.componentVersionSpecValues;
    }

    if (!Util.isUnset(request.releaseName)) {
      body["releaseName"] = request.releaseName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddProductComponentVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/integration/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/component-versions/${OpenApiUtil.getEncodeParam(componentVersionUID)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddProductComponentVersionResponse>(await this.callApi(params, req, runtime), new AddProductComponentVersionResponse({}));
  }

  async addProductComponentVersion(uid: string, componentVersionUID: string, request: AddProductComponentVersionRequest): Promise<AddProductComponentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addProductComponentVersionWithOptions(uid, componentVersionUID, request, headers, runtime);
  }

  async addProductVersionConfigWithOptions(uid: string, request: AddProductVersionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddProductVersionConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentReleaseName)) {
      body["componentReleaseName"] = request.componentReleaseName;
    }

    if (!Util.isUnset(request.componentVersionUID)) {
      body["componentVersionUID"] = request.componentVersionUID;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parentComponentReleaseName)) {
      body["parentComponentReleaseName"] = request.parentComponentReleaseName;
    }

    if (!Util.isUnset(request.parentComponentVersionUID)) {
      body["parentComponentVersionUID"] = request.parentComponentVersionUID;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.value)) {
      body["value"] = request.value;
    }

    if (!Util.isUnset(request.valueType)) {
      body["valueType"] = request.valueType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddProductVersionConfig",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddProductVersionConfigResponse>(await this.callApi(params, req, runtime), new AddProductVersionConfigResponse({}));
  }

  async addProductVersionConfig(uid: string, request: AddProductVersionConfigRequest): Promise<AddProductVersionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addProductVersionConfigWithOptions(uid, request, headers, runtime);
  }

  async addResourceSnapshotWithOptions(request: AddResourceSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddResourceSnapshotResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterUID)) {
      query["clusterUID"] = request.clusterUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddResourceSnapshot",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/resource-snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddResourceSnapshotResponse>(await this.callApi(params, req, runtime), new AddResourceSnapshotResponse({}));
  }

  async addResourceSnapshot(request: AddResourceSnapshotRequest): Promise<AddResourceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addResourceSnapshotWithOptions(request, headers, runtime);
  }

  async batchAddEnvironmentNodesWithOptions(uid: string, request: BatchAddEnvironmentNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchAddEnvironmentNodesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceList)) {
      body["instanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.overwrite)) {
      body["overwrite"] = request.overwrite;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddEnvironmentNodes",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/batch/nodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchAddEnvironmentNodesResponse>(await this.callApi(params, req, runtime), new BatchAddEnvironmentNodesResponse({}));
  }

  async batchAddEnvironmentNodes(uid: string, request: BatchAddEnvironmentNodesRequest): Promise<BatchAddEnvironmentNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchAddEnvironmentNodesWithOptions(uid, request, headers, runtime);
  }

  async batchAddProductVersionConfigWithOptions(uid: string, request: BatchAddProductVersionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchAddProductVersionConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productVersionConfigList)) {
      body["productVersionConfigList"] = request.productVersionConfigList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddProductVersionConfig",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/batch/configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchAddProductVersionConfigResponse>(await this.callApi(params, req, runtime), new BatchAddProductVersionConfigResponse({}));
  }

  async batchAddProductVersionConfig(uid: string, request: BatchAddProductVersionConfigRequest): Promise<BatchAddProductVersionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchAddProductVersionConfigWithOptions(uid, request, headers, runtime);
  }

  async createDeliverableWithOptions(request: CreateDeliverableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDeliverableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.foundation)) {
      body["foundation"] = request.foundation;
    }

    if (!Util.isUnset(request.products)) {
      body["products"] = request.products;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeliverable",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/deliverables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDeliverableResponse>(await this.callApi(params, req, runtime), new CreateDeliverableResponse({}));
  }

  async createDeliverable(request: CreateDeliverableRequest): Promise<CreateDeliverableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDeliverableWithOptions(request, headers, runtime);
  }

  async createDeliveryInstanceWithOptions(request: CreateDeliveryInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDeliveryInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterUID)) {
      body["clusterUID"] = request.clusterUID;
    }

    if (!Util.isUnset(request.deliverableConfigUID)) {
      body["deliverableConfigUID"] = request.deliverableConfigUID;
    }

    if (!Util.isUnset(request.deliverableUID)) {
      body["deliverableUID"] = request.deliverableUID;
    }

    if (!Util.isUnset(request.envUID)) {
      body["envUID"] = request.envUID;
    }

    if (!Util.isUnset(request.foundation)) {
      body["foundation"] = request.foundation;
    }

    if (!Util.isUnset(request.products)) {
      body["products"] = request.products;
    }

    if (!Util.isUnset(request.templateUID)) {
      body["templateUID"] = request.templateUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeliveryInstance",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/delivery-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDeliveryInstanceResponse>(await this.callApi(params, req, runtime), new CreateDeliveryInstanceResponse({}));
  }

  async createDeliveryInstance(request: CreateDeliveryInstanceRequest): Promise<CreateDeliveryInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDeliveryInstanceWithOptions(request, headers, runtime);
  }

  async createDeliveryPackageWithOptions(request: CreateDeliveryPackageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDeliveryPackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliverableUID)) {
      body["deliverableUID"] = request.deliverableUID;
    }

    if (!Util.isUnset(request.deliveryInstanceUID)) {
      body["deliveryInstanceUID"] = request.deliveryInstanceUID;
    }

    if (!Util.isUnset(request.originDeliverableUID)) {
      body["originDeliverableUID"] = request.originDeliverableUID;
    }

    if (!Util.isUnset(request.packageContentType)) {
      body["packageContentType"] = request.packageContentType;
    }

    if (!Util.isUnset(request.packageType)) {
      body["packageType"] = request.packageType;
    }

    if (!Util.isUnset(request.platform)) {
      body["platform"] = request.platform;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeliveryPackage",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/delivery-packages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDeliveryPackageResponse>(await this.callApi(params, req, runtime), new CreateDeliveryPackageResponse({}));
  }

  async createDeliveryPackage(request: CreateDeliveryPackageRequest): Promise<CreateDeliveryPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDeliveryPackageWithOptions(request, headers, runtime);
  }

  async createEnvironmentWithOptions(request: CreateEnvironmentRequest, headers: CreateEnvironmentHeaders, runtime: $Util.RuntimeOptions): Promise<CreateEnvironmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.annotations)) {
      body["annotations"] = request.annotations;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.expiredAt)) {
      body["expiredAt"] = request.expiredAt;
    }

    if (!Util.isUnset(request.location)) {
      body["location"] = request.location;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!Util.isUnset(request.platformList)) {
      body["platformList"] = request.platformList;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      body["productVersionUID"] = request.productVersionUID;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.vendorConfig)) {
      body["vendorConfig"] = request.vendorConfig;
    }

    if (!Util.isUnset(request.vendorType)) {
      body["vendorType"] = request.vendorType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.clientToken)) {
      realHeaders["ClientToken"] = Util.toJSONString(headers.clientToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnvironment",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new CreateEnvironmentResponse({}));
  }

  async createEnvironment(request: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateEnvironmentHeaders({ });
    return await this.createEnvironmentWithOptions(request, headers, runtime);
  }

  async createEnvironmentLicenseWithOptions(uid: string, request: CreateEnvironmentLicenseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateEnvironmentLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyName)) {
      body["companyName"] = request.companyName;
    }

    if (!Util.isUnset(request.contact)) {
      body["contact"] = request.contact;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.licenseQuota)) {
      body["licenseQuota"] = request.licenseQuota;
    }

    if (!Util.isUnset(request.machineFingerprint)) {
      body["machineFingerprint"] = request.machineFingerprint;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      body["productVersionUID"] = request.productVersionUID;
    }

    if (!Util.isUnset(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnvironmentLicense",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/licenses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateEnvironmentLicenseResponse>(await this.callApi(params, req, runtime), new CreateEnvironmentLicenseResponse({}));
  }

  async createEnvironmentLicense(uid: string, request: CreateEnvironmentLicenseRequest): Promise<CreateEnvironmentLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentLicenseWithOptions(uid, request, headers, runtime);
  }

  async createFoundationReferenceWithOptions(request: CreateFoundationReferenceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFoundationReferenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterConfig)) {
      body["clusterConfig"] = request.clusterConfig;
    }

    if (!Util.isUnset(request.componentConfigs)) {
      body["componentConfigs"] = request.componentConfigs;
    }

    if (!Util.isUnset(request.foundationReferenceConfigs)) {
      body["foundationReferenceConfigs"] = request.foundationReferenceConfigs;
    }

    if (!Util.isUnset(request.foundationVersionUID)) {
      body["foundationVersionUID"] = request.foundationVersionUID;
    }

    if (!Util.isUnset(request.originFoundationReferenceUID)) {
      body["originFoundationReferenceUID"] = request.originFoundationReferenceUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFoundationReference",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation-references`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFoundationReferenceResponse>(await this.callApi(params, req, runtime), new CreateFoundationReferenceResponse({}));
  }

  async createFoundationReference(request: CreateFoundationReferenceRequest): Promise<CreateFoundationReferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFoundationReferenceWithOptions(request, headers, runtime);
  }

  async createProductWithOptions(request: CreateProductRequest, headers: CreateProductHeaders, runtime: $Util.RuntimeOptions): Promise<CreateProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categories)) {
      body["categories"] = request.categories;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.foundationVersionUID)) {
      body["foundationVersionUID"] = request.foundationVersionUID;
    }

    if (!Util.isUnset(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!Util.isUnset(request.vendor)) {
      body["vendor"] = request.vendor;
    }

    if (!Util.isUnset(request.withoutProductVersion)) {
      body["withoutProductVersion"] = request.withoutProductVersion;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.clientToken)) {
      realHeaders["ClientToken"] = Util.toJSONString(headers.clientToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProduct",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/integration/api/v2/products`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProductResponse>(await this.callApi(params, req, runtime), new CreateProductResponse({}));
  }

  async createProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateProductHeaders({ });
    return await this.createProductWithOptions(request, headers, runtime);
  }

  async createProductDeploymentWithOptions(request: CreateProductDeploymentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProductDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environmentUID)) {
      body["environmentUID"] = request.environmentUID;
    }

    if (!Util.isUnset(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.oldProductVersionUID)) {
      body["oldProductVersionUID"] = request.oldProductVersionUID;
    }

    if (!Util.isUnset(request.packageConfig)) {
      body["packageConfig"] = request.packageConfig;
    }

    if (!Util.isUnset(request.packageUID)) {
      body["packageUID"] = request.packageUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      body["productVersionUID"] = request.productVersionUID;
    }

    if (!Util.isUnset(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProductDeployment",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances/deployments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProductDeploymentResponse>(await this.callApi(params, req, runtime), new CreateProductDeploymentResponse({}));
  }

  async createProductDeployment(request: CreateProductDeploymentRequest): Promise<CreateProductDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductDeploymentWithOptions(request, headers, runtime);
  }

  async createProductVersionWithOptions(uid: string, request: CreateProductVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProductVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.baseProductVersionUID)) {
      query["baseProductVersionUID"] = request.baseProductVersionUID;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      body["version"] = request.version;
    }

    if (!Util.isUnset(request.withoutBaseProductVersion)) {
      body["withoutBaseProductVersion"] = request.withoutBaseProductVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProductVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/integration/api/v2/products/${OpenApiUtil.getEncodeParam(uid)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProductVersionResponse>(await this.callApi(params, req, runtime), new CreateProductVersionResponse({}));
  }

  async createProductVersion(uid: string, request: CreateProductVersionRequest): Promise<CreateProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductVersionWithOptions(uid, request, headers, runtime);
  }

  /**
    * @deprecated
    *
    * @param request CreateProductVersionPackageRequest
    * @param headers CreateProductVersionPackageHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateProductVersionPackageResponse
   */
  // Deprecated
  async createProductVersionPackageWithOptions(uid: string, request: CreateProductVersionPackageRequest, headers: CreateProductVersionPackageHeaders, runtime: $Util.RuntimeOptions): Promise<CreateProductVersionPackageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterEngineType)) {
      query["clusterEngineType"] = request.clusterEngineType;
    }

    if (!Util.isUnset(request.foundationReferenceUID)) {
      query["foundationReferenceUID"] = request.foundationReferenceUID;
    }

    if (!Util.isUnset(request.oldFoundationReferenceUID)) {
      query["oldFoundationReferenceUID"] = request.oldFoundationReferenceUID;
    }

    if (!Util.isUnset(request.oldProductVersionUID)) {
      query["oldProductVersionUID"] = request.oldProductVersionUID;
    }

    if (!Util.isUnset(request.packageContentType)) {
      query["packageContentType"] = request.packageContentType;
    }

    if (!Util.isUnset(request.packageToolType)) {
      query["packageToolType"] = request.packageToolType;
    }

    if (!Util.isUnset(request.packageType)) {
      query["packageType"] = request.packageType;
    }

    if (!Util.isUnset(request.platform)) {
      query["platform"] = request.platform;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.clientToken)) {
      realHeaders["ClientToken"] = Util.toJSONString(headers.clientToken);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProductVersionPackage",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/hosting/product-versions/${OpenApiUtil.getEncodeParam(uid)}/packages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProductVersionPackageResponse>(await this.callApi(params, req, runtime), new CreateProductVersionPackageResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request CreateProductVersionPackageRequest
    * @return CreateProductVersionPackageResponse
   */
  // Deprecated
  async createProductVersionPackage(uid: string, request: CreateProductVersionPackageRequest): Promise<CreateProductVersionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateProductVersionPackageHeaders({ });
    return await this.createProductVersionPackageWithOptions(uid, request, headers, runtime);
  }

  async deleteEnvironmentWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironment",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentResponse({}));
  }

  async deleteEnvironment(uid: string): Promise<DeleteEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(uid, headers, runtime);
  }

  async deleteEnvironmentLicenseWithOptions(uid: string, licenseUID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentLicenseResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironmentLicense",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/licenses/${OpenApiUtil.getEncodeParam(licenseUID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnvironmentLicenseResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentLicenseResponse({}));
  }

  async deleteEnvironmentLicense(uid: string, licenseUID: string): Promise<DeleteEnvironmentLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentLicenseWithOptions(uid, licenseUID, headers, runtime);
  }

  async deleteEnvironmentNodeWithOptions(uid: string, nodeUID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentNodeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironmentNode",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/nodes/${OpenApiUtil.getEncodeParam(nodeUID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnvironmentNodeResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentNodeResponse({}));
  }

  async deleteEnvironmentNode(uid: string, nodeUID: string): Promise<DeleteEnvironmentNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentNodeWithOptions(uid, nodeUID, headers, runtime);
  }

  async deleteEnvironmentProductVersionWithOptions(uid: string, productVersionUID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteEnvironmentProductVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteEnvironmentProductVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/product-versions/${OpenApiUtil.getEncodeParam(productVersionUID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnvironmentProductVersionResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentProductVersionResponse({}));
  }

  async deleteEnvironmentProductVersion(uid: string, productVersionUID: string): Promise<DeleteEnvironmentProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentProductVersionWithOptions(uid, productVersionUID, headers, runtime);
  }

  async deleteProductWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProductResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProduct",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/integration/api/v2/products/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProductResponse>(await this.callApi(params, req, runtime), new DeleteProductResponse({}));
  }

  async deleteProduct(uid: string): Promise<DeleteProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProductWithOptions(uid, headers, runtime);
  }

  async deleteProductComponentVersionWithOptions(uid: string, relationUID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProductComponentVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProductComponentVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/relations/${OpenApiUtil.getEncodeParam(relationUID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProductComponentVersionResponse>(await this.callApi(params, req, runtime), new DeleteProductComponentVersionResponse({}));
  }

  async deleteProductComponentVersion(uid: string, relationUID: string): Promise<DeleteProductComponentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProductComponentVersionWithOptions(uid, relationUID, headers, runtime);
  }

  async deleteProductInstanceConfigWithOptions(configUID: string, request: DeleteProductInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProductInstanceConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environmentUID)) {
      query["environmentUID"] = request.environmentUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProductInstanceConfig",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances/configs/${OpenApiUtil.getEncodeParam(configUID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProductInstanceConfigResponse>(await this.callApi(params, req, runtime), new DeleteProductInstanceConfigResponse({}));
  }

  async deleteProductInstanceConfig(configUID: string, request: DeleteProductInstanceConfigRequest): Promise<DeleteProductInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProductInstanceConfigWithOptions(configUID, request, headers, runtime);
  }

  async deleteProductVersionWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProductVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProductVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProductVersionResponse>(await this.callApi(params, req, runtime), new DeleteProductVersionResponse({}));
  }

  async deleteProductVersion(uid: string): Promise<DeleteProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProductVersionWithOptions(uid, headers, runtime);
  }

  async deleteProductVersionConfigWithOptions(uid: string, configUID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProductVersionConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProductVersionConfig",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/configs/${OpenApiUtil.getEncodeParam(configUID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProductVersionConfigResponse>(await this.callApi(params, req, runtime), new DeleteProductVersionConfigResponse({}));
  }

  async deleteProductVersionConfig(uid: string, configUID: string): Promise<DeleteProductVersionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProductVersionConfigWithOptions(uid, configUID, headers, runtime);
  }

  async generateProductInstanceDeploymentConfigWithOptions(request: GenerateProductInstanceDeploymentConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateProductInstanceDeploymentConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environmentUID)) {
      body["environmentUID"] = request.environmentUID;
    }

    if (!Util.isUnset(request.packageContentType)) {
      body["packageContentType"] = request.packageContentType;
    }

    if (!Util.isUnset(request.packageUID)) {
      body["packageUID"] = request.packageUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      body["productVersionUID"] = request.productVersionUID;
    }

    if (!Util.isUnset(request.productVersionUIDList)) {
      body["productVersionUIDList"] = request.productVersionUIDList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateProductInstanceDeploymentConfig",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances/package-configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateProductInstanceDeploymentConfigResponse>(await this.callApi(params, req, runtime), new GenerateProductInstanceDeploymentConfigResponse({}));
  }

  async generateProductInstanceDeploymentConfig(request: GenerateProductInstanceDeploymentConfigRequest): Promise<GenerateProductInstanceDeploymentConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateProductInstanceDeploymentConfigWithOptions(request, headers, runtime);
  }

  async getComponentWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetComponentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetComponent",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/components/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetComponentResponse>(await this.callApi(params, req, runtime), new GetComponentResponse({}));
  }

  async getComponent(uid: string): Promise<GetComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComponentWithOptions(uid, headers, runtime);
  }

  async getComponentVersionWithOptions(uid: string, versionUID: string, request: GetComponentVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetComponentVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.withoutChartContent)) {
      query["withoutChartContent"] = request.withoutChartContent;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetComponentVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/integration/api/v2/components/${OpenApiUtil.getEncodeParam(uid)}/versions/${OpenApiUtil.getEncodeParam(versionUID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetComponentVersionResponse>(await this.callApi(params, req, runtime), new GetComponentVersionResponse({}));
  }

  async getComponentVersion(uid: string, versionUID: string, request: GetComponentVersionRequest): Promise<GetComponentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getComponentVersionWithOptions(uid, versionUID, request, headers, runtime);
  }

  async getDeliverableWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeliverableResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDeliverable",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/deliverables/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeliverableResponse>(await this.callApi(params, req, runtime), new GetDeliverableResponse({}));
  }

  async getDeliverable(uid: string): Promise<GetDeliverableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeliverableWithOptions(uid, headers, runtime);
  }

  async getDeliveryPackageWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeliveryPackageResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDeliveryPackage",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/delivery-packages/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeliveryPackageResponse>(await this.callApi(params, req, runtime), new GetDeliveryPackageResponse({}));
  }

  async getDeliveryPackage(uid: string): Promise<GetDeliveryPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeliveryPackageWithOptions(uid, headers, runtime);
  }

  async getEnvironmentWithOptions(uid: string, tmpReq: GetEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentResponse> {
    Util.validateModel(tmpReq);
    let request = new GetEnvironmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "options", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.optionsShrink)) {
      query["options"] = request.optionsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironment",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
  }

  async getEnvironment(uid: string, request: GetEnvironmentRequest): Promise<GetEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(uid, request, headers, runtime);
  }

  async getEnvironmentDeliveryInstanceWithOptions(request: GetEnvironmentDeliveryInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentDeliveryInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterUID)) {
      query["clusterUID"] = request.clusterUID;
    }

    if (!Util.isUnset(request.envUID)) {
      query["envUID"] = request.envUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironmentDeliveryInstance",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/delivery-instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentDeliveryInstanceResponse>(await this.callApi(params, req, runtime), new GetEnvironmentDeliveryInstanceResponse({}));
  }

  async getEnvironmentDeliveryInstance(request: GetEnvironmentDeliveryInstanceRequest): Promise<GetEnvironmentDeliveryInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentDeliveryInstanceWithOptions(request, headers, runtime);
  }

  async getEnvironmentLicenseWithOptions(uid: string, licenseUID: string, tmpReq: GetEnvironmentLicenseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentLicenseResponse> {
    Util.validateModel(tmpReq);
    let request = new GetEnvironmentLicenseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "options", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.optionsShrink)) {
      query["options"] = request.optionsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironmentLicense",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/licenses/${OpenApiUtil.getEncodeParam(licenseUID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentLicenseResponse>(await this.callApi(params, req, runtime), new GetEnvironmentLicenseResponse({}));
  }

  async getEnvironmentLicense(uid: string, licenseUID: string, request: GetEnvironmentLicenseRequest): Promise<GetEnvironmentLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentLicenseWithOptions(uid, licenseUID, request, headers, runtime);
  }

  async getEnvironmentNodeWithOptions(uid: string, nodeUID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEnvironmentNodeResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetEnvironmentNode",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/nodes/${OpenApiUtil.getEncodeParam(nodeUID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetEnvironmentNodeResponse>(await this.callApi(params, req, runtime), new GetEnvironmentNodeResponse({}));
  }

  async getEnvironmentNode(uid: string, nodeUID: string): Promise<GetEnvironmentNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentNodeWithOptions(uid, nodeUID, headers, runtime);
  }

  async getFoundationComponentReferenceWithOptions(componentReferenceUID: string, uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFoundationComponentReferenceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFoundationComponentReference",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation-references/${OpenApiUtil.getEncodeParam(uid)}/components/${OpenApiUtil.getEncodeParam(componentReferenceUID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFoundationComponentReferenceResponse>(await this.callApi(params, req, runtime), new GetFoundationComponentReferenceResponse({}));
  }

  async getFoundationComponentReference(componentReferenceUID: string, uid: string): Promise<GetFoundationComponentReferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFoundationComponentReferenceWithOptions(componentReferenceUID, uid, headers, runtime);
  }

  async getFoundationReferenceWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFoundationReferenceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFoundationReference",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation-references/${OpenApiUtil.getEncodeParam(uid)}/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFoundationReferenceResponse>(await this.callApi(params, req, runtime), new GetFoundationReferenceResponse({}));
  }

  async getFoundationReference(uid: string): Promise<GetFoundationReferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFoundationReferenceWithOptions(uid, headers, runtime);
  }

  async getFoundationVersionWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFoundationVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFoundationVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation/versions/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFoundationVersionResponse>(await this.callApi(params, req, runtime), new GetFoundationVersionResponse({}));
  }

  async getFoundationVersion(uid: string): Promise<GetFoundationVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFoundationVersionWithOptions(uid, headers, runtime);
  }

  async getProductWithOptions(uid: string, request: GetProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProductResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.withIconURL)) {
      query["withIconURL"] = request.withIconURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProduct",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/products/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProductResponse>(await this.callApi(params, req, runtime), new GetProductResponse({}));
  }

  async getProduct(uid: string, request: GetProductRequest): Promise<GetProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductWithOptions(uid, request, headers, runtime);
  }

  async getProductComponentVersionWithOptions(relationUID: string, uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProductComponentVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProductComponentVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/integration/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/relations/${OpenApiUtil.getEncodeParam(relationUID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProductComponentVersionResponse>(await this.callApi(params, req, runtime), new GetProductComponentVersionResponse({}));
  }

  async getProductComponentVersion(relationUID: string, uid: string): Promise<GetProductComponentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductComponentVersionWithOptions(relationUID, uid, headers, runtime);
  }

  async getProductDeploymentWithOptions(deploymentUID: string, request: GetProductDeploymentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProductDeploymentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environmentUID)) {
      query["environmentUID"] = request.environmentUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    if (!Util.isUnset(request.withParamConfig)) {
      query["withParamConfig"] = request.withParamConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProductDeployment",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances/deployments/${OpenApiUtil.getEncodeParam(deploymentUID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProductDeploymentResponse>(await this.callApi(params, req, runtime), new GetProductDeploymentResponse({}));
  }

  async getProductDeployment(deploymentUID: string, request: GetProductDeploymentRequest): Promise<GetProductDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductDeploymentWithOptions(deploymentUID, request, headers, runtime);
  }

  async getProductVersionWithOptions(uid: string, request: GetProductVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProductVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.withDocumentationURL)) {
      query["withDocumentationURL"] = request.withDocumentationURL;
    }

    if (!Util.isUnset(request.withExtendResourceURL)) {
      query["withExtendResourceURL"] = request.withExtendResourceURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProductVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProductVersionResponse>(await this.callApi(params, req, runtime), new GetProductVersionResponse({}));
  }

  async getProductVersion(uid: string, request: GetProductVersionRequest): Promise<GetProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductVersionWithOptions(uid, request, headers, runtime);
  }

  async getProductVersionDifferencesWithOptions(uid: string, versionUID: string, request: GetProductVersionDifferencesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProductVersionDifferencesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.preVersionUID)) {
      query["preVersionUID"] = request.preVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProductVersionDifferences",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/integration/api/v2/products/${OpenApiUtil.getEncodeParam(uid)}/versions/${OpenApiUtil.getEncodeParam(versionUID)}/differences`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProductVersionDifferencesResponse>(await this.callApi(params, req, runtime), new GetProductVersionDifferencesResponse({}));
  }

  async getProductVersionDifferences(uid: string, versionUID: string, request: GetProductVersionDifferencesRequest): Promise<GetProductVersionDifferencesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductVersionDifferencesWithOptions(uid, versionUID, request, headers, runtime);
  }

  async getProductVersionPackageWithOptions(uid: string, request: GetProductVersionPackageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProductVersionPackageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.foundationReferenceUID)) {
      query["foundationReferenceUID"] = request.foundationReferenceUID;
    }

    if (!Util.isUnset(request.oldFoundationReferenceUID)) {
      query["oldFoundationReferenceUID"] = request.oldFoundationReferenceUID;
    }

    if (!Util.isUnset(request.oldProductVersionUID)) {
      query["oldProductVersionUID"] = request.oldProductVersionUID;
    }

    if (!Util.isUnset(request.packageContentType)) {
      query["packageContentType"] = request.packageContentType;
    }

    if (!Util.isUnset(request.packageType)) {
      query["packageType"] = request.packageType;
    }

    if (!Util.isUnset(request.packageUID)) {
      query["packageUID"] = request.packageUID;
    }

    if (!Util.isUnset(request.platform)) {
      query["platform"] = request.platform;
    }

    if (!Util.isUnset(request.withURL)) {
      query["withURL"] = request.withURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProductVersionPackage",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/hosting/product-versions/${OpenApiUtil.getEncodeParam(uid)}/packages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProductVersionPackageResponse>(await this.callApi(params, req, runtime), new GetProductVersionPackageResponse({}));
  }

  async getProductVersionPackage(uid: string, request: GetProductVersionPackageRequest): Promise<GetProductVersionPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProductVersionPackageWithOptions(uid, request, headers, runtime);
  }

  async getResourceSnapshotWithOptions(request: GetResourceSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceSnapshotResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    if (!Util.isUnset(request.uid)) {
      query["uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceSnapshot",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/resource-snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceSnapshotResponse>(await this.callApi(params, req, runtime), new GetResourceSnapshotResponse({}));
  }

  async getResourceSnapshot(request: GetResourceSnapshotRequest): Promise<GetResourceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceSnapshotWithOptions(request, headers, runtime);
  }

  async getWorkflowStatusWithOptions(request: GetWorkflowStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWorkflowStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workflowType)) {
      query["workflowType"] = request.workflowType;
    }

    if (!Util.isUnset(request.xuid)) {
      query["xuid"] = request.xuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkflowStatus",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/workflows/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWorkflowStatusResponse>(await this.callApi(params, req, runtime), new GetWorkflowStatusResponse({}));
  }

  async getWorkflowStatus(request: GetWorkflowStatusRequest): Promise<GetWorkflowStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkflowStatusWithOptions(request, headers, runtime);
  }

  async initEnvironmentResourceWithOptions(uid: string, request: InitEnvironmentResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InitEnvironmentResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKeyID)) {
      body["accessKeyID"] = request.accessKeyID;
    }

    if (!Util.isUnset(request.accessKeySecret)) {
      body["accessKeySecret"] = request.accessKeySecret;
    }

    if (!Util.isUnset(request.securityToken)) {
      body["securityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitEnvironmentResource",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InitEnvironmentResourceResponse>(await this.callApi(params, req, runtime), new InitEnvironmentResourceResponse({}));
  }

  async initEnvironmentResource(uid: string, request: InitEnvironmentResourceRequest): Promise<InitEnvironmentResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initEnvironmentResourceWithOptions(uid, request, headers, runtime);
  }

  async listComponentVersionsWithOptions(uid: string, tmpReq: ListComponentVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListComponentVersionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListComponentVersionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.platforms)) {
      request.platformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.platforms, "platforms", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platformsShrink)) {
      query["platforms"] = request.platformsShrink;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListComponentVersions",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/components/${OpenApiUtil.getEncodeParam(uid)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListComponentVersionsResponse>(await this.callApi(params, req, runtime), new ListComponentVersionsResponse({}));
  }

  async listComponentVersions(uid: string, request: ListComponentVersionsRequest): Promise<ListComponentVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentVersionsWithOptions(uid, request, headers, runtime);
  }

  async listComponentsWithOptions(request: ListComponentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListComponentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      query["category"] = request.category;
    }

    if (!Util.isUnset(request.fuzzy)) {
      query["fuzzy"] = request.fuzzy;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.public)) {
      query["public"] = request.public;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListComponents",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListComponentsResponse>(await this.callApi(params, req, runtime), new ListComponentsResponse({}));
  }

  async listComponents(request: ListComponentsRequest): Promise<ListComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentsWithOptions(request, headers, runtime);
  }

  async listDeliveryInstanceChangeRecordsWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeliveryInstanceChangeRecordsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDeliveryInstanceChangeRecords",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/delivery-instances/${OpenApiUtil.getEncodeParam(uid)}/delivery-records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeliveryInstanceChangeRecordsResponse>(await this.callApi(params, req, runtime), new ListDeliveryInstanceChangeRecordsResponse({}));
  }

  async listDeliveryInstanceChangeRecords(uid: string): Promise<ListDeliveryInstanceChangeRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeliveryInstanceChangeRecordsWithOptions(uid, headers, runtime);
  }

  async listDeliveryPackageWithOptions(request: ListDeliveryPackageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeliveryPackageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliverableUID)) {
      query["deliverableUID"] = request.deliverableUID;
    }

    if (!Util.isUnset(request.platform)) {
      query["platform"] = request.platform;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeliveryPackage",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/delivery-packages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeliveryPackageResponse>(await this.callApi(params, req, runtime), new ListDeliveryPackageResponse({}));
  }

  async listDeliveryPackage(request: ListDeliveryPackageRequest): Promise<ListDeliveryPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeliveryPackageWithOptions(request, headers, runtime);
  }

  async listEnvironmentLicensesWithOptions(uid: string, request: ListEnvironmentLicensesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentLicensesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scope)) {
      query["scope"] = request.scope;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironmentLicenses",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/licenses`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentLicensesResponse>(await this.callApi(params, req, runtime), new ListEnvironmentLicensesResponse({}));
  }

  async listEnvironmentLicenses(uid: string, request: ListEnvironmentLicensesRequest): Promise<ListEnvironmentLicensesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentLicensesWithOptions(uid, request, headers, runtime);
  }

  async listEnvironmentNodesWithOptions(uid: string, request: ListEnvironmentNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentNodesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironmentNodes",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentNodesResponse>(await this.callApi(params, req, runtime), new ListEnvironmentNodesResponse({}));
  }

  async listEnvironmentNodes(uid: string, request: ListEnvironmentNodesRequest): Promise<ListEnvironmentNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentNodesWithOptions(uid, request, headers, runtime);
  }

  async listEnvironmentTunnelsWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentTunnelsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironmentTunnels",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/tunnels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentTunnelsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentTunnelsResponse({}));
  }

  async listEnvironmentTunnels(uid: string): Promise<ListEnvironmentTunnelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentTunnelsWithOptions(uid, headers, runtime);
  }

  async listEnvironmentsWithOptions(request: ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterUID)) {
      query["clusterUID"] = request.clusterUID;
    }

    if (!Util.isUnset(request.endpoint)) {
      query["endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.foundationType)) {
      query["foundationType"] = request.foundationType;
    }

    if (!Util.isUnset(request.fuzzy)) {
      query["fuzzy"] = request.fuzzy;
    }

    if (!Util.isUnset(request.instanceStatus)) {
      query["instanceStatus"] = request.instanceStatus;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.vendorType)) {
      query["vendorType"] = request.vendorType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnvironments",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
  }

  async listEnvironments(request: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(request, headers, runtime);
  }

  async listFoundationComponentVersionsWithOptions(uid: string, request: ListFoundationComponentVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFoundationComponentVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.onlyEnabled)) {
      query["onlyEnabled"] = request.onlyEnabled;
    }

    if (!Util.isUnset(request.parentComponentRelationUID)) {
      query["parentComponentRelationUID"] = request.parentComponentRelationUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFoundationComponentVersions",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation/versions/${OpenApiUtil.getEncodeParam(uid)}/component-versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFoundationComponentVersionsResponse>(await this.callApi(params, req, runtime), new ListFoundationComponentVersionsResponse({}));
  }

  async listFoundationComponentVersions(uid: string, request: ListFoundationComponentVersionsRequest): Promise<ListFoundationComponentVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFoundationComponentVersionsWithOptions(uid, request, headers, runtime);
  }

  async listFoundationReferenceComponentsWithOptions(request: ListFoundationReferenceComponentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFoundationReferenceComponentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.foundationReferenceUID)) {
      query["foundationReferenceUID"] = request.foundationReferenceUID;
    }

    if (!Util.isUnset(request.foundationVersionUID)) {
      query["foundationVersionUID"] = request.foundationVersionUID;
    }

    if (!Util.isUnset(request.onlyEnabled)) {
      query["onlyEnabled"] = request.onlyEnabled;
    }

    if (!Util.isUnset(request.parentComponentReferenceUID)) {
      query["parentComponentReferenceUID"] = request.parentComponentReferenceUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFoundationReferenceComponents",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation-references/component-versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFoundationReferenceComponentsResponse>(await this.callApi(params, req, runtime), new ListFoundationReferenceComponentsResponse({}));
  }

  async listFoundationReferenceComponents(request: ListFoundationReferenceComponentsRequest): Promise<ListFoundationReferenceComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFoundationReferenceComponentsWithOptions(request, headers, runtime);
  }

  async listFoundationVersionsWithOptions(request: ListFoundationVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFoundationVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.onlyDefault)) {
      query["onlyDefault"] = request.onlyDefault;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortDirect)) {
      query["sortDirect"] = request.sortDirect;
    }

    if (!Util.isUnset(request.sortKey)) {
      query["sortKey"] = request.sortKey;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFoundationVersions",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFoundationVersionsResponse>(await this.callApi(params, req, runtime), new ListFoundationVersionsResponse({}));
  }

  async listFoundationVersions(request: ListFoundationVersionsRequest): Promise<ListFoundationVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFoundationVersionsWithOptions(request, headers, runtime);
  }

  async listProductComponentVersionsWithOptions(uid: string, request: ListProductComponentVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductComponentVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.category)) {
      query["category"] = request.category;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.releaseName)) {
      query["releaseName"] = request.releaseName;
    }

    if (!Util.isUnset(request.sortDirect)) {
      query["sortDirect"] = request.sortDirect;
    }

    if (!Util.isUnset(request.sortKey)) {
      query["sortKey"] = request.sortKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductComponentVersions",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/component-versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductComponentVersionsResponse>(await this.callApi(params, req, runtime), new ListProductComponentVersionsResponse({}));
  }

  async listProductComponentVersions(uid: string, request: ListProductComponentVersionsRequest): Promise<ListProductComponentVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductComponentVersionsWithOptions(uid, request, headers, runtime);
  }

  async listProductDeploymentsWithOptions(request: ListProductDeploymentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductDeploymentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.environmentUID)) {
      query["environmentUID"] = request.environmentUID;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductDeployments",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances/deployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductDeploymentsResponse>(await this.callApi(params, req, runtime), new ListProductDeploymentsResponse({}));
  }

  async listProductDeployments(request: ListProductDeploymentsRequest): Promise<ListProductDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductDeploymentsWithOptions(request, headers, runtime);
  }

  async listProductEnvironmentsWithOptions(uid: string, tmpReq: ListProductEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductEnvironmentsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProductEnvironmentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "options", "json");
    }

    if (!Util.isUnset(tmpReq.platforms)) {
      request.platformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.platforms, "platforms", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.compatibleProductVersionUID)) {
      query["compatibleProductVersionUID"] = request.compatibleProductVersionUID;
    }

    if (!Util.isUnset(request.envType)) {
      query["envType"] = request.envType;
    }

    if (!Util.isUnset(request.optionsShrink)) {
      query["options"] = request.optionsShrink;
    }

    if (!Util.isUnset(request.platformsShrink)) {
      query["platforms"] = request.platformsShrink;
    }

    if (!Util.isUnset(request.productVersionSpecUID)) {
      query["productVersionSpecUID"] = request.productVersionSpecUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductEnvironments",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/hosting/products/${OpenApiUtil.getEncodeParam(uid)}/environments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListProductEnvironmentsResponse({}));
  }

  async listProductEnvironments(uid: string, request: ListProductEnvironmentsRequest): Promise<ListProductEnvironmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductEnvironmentsWithOptions(uid, request, headers, runtime);
  }

  /**
    * @deprecated
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListProductFoundationReferencesResponse
   */
  // Deprecated
  async listProductFoundationReferencesWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductFoundationReferencesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListProductFoundationReferences",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/foundation-references`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductFoundationReferencesResponse>(await this.callApi(params, req, runtime), new ListProductFoundationReferencesResponse({}));
  }

  /**
    * @deprecated
    *
    * @return ListProductFoundationReferencesResponse
   */
  // Deprecated
  async listProductFoundationReferences(uid: string): Promise<ListProductFoundationReferencesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductFoundationReferencesWithOptions(uid, headers, runtime);
  }

  async listProductInstanceConfigsWithOptions(request: ListProductInstanceConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductInstanceConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentReleaseName)) {
      query["componentReleaseName"] = request.componentReleaseName;
    }

    if (!Util.isUnset(request.environmentUID)) {
      query["environmentUID"] = request.environmentUID;
    }

    if (!Util.isUnset(request.fuzzy)) {
      query["fuzzy"] = request.fuzzy;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paramType)) {
      query["paramType"] = request.paramType;
    }

    if (!Util.isUnset(request.parameter)) {
      query["parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductInstanceConfigs",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductInstanceConfigsResponse>(await this.callApi(params, req, runtime), new ListProductInstanceConfigsResponse({}));
  }

  async listProductInstanceConfigs(request: ListProductInstanceConfigsRequest): Promise<ListProductInstanceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductInstanceConfigsWithOptions(request, headers, runtime);
  }

  async listProductInstancesWithOptions(tmpReq: ListProductInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProductInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "options", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.envUID)) {
      query["envUID"] = request.envUID;
    }

    if (!Util.isUnset(request.optionsShrink)) {
      query["options"] = request.optionsShrink;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      query["productVersionUID"] = request.productVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductInstances",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductInstancesResponse>(await this.callApi(params, req, runtime), new ListProductInstancesResponse({}));
  }

  async listProductInstances(request: ListProductInstancesRequest): Promise<ListProductInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductInstancesWithOptions(request, headers, runtime);
  }

  async listProductVersionConfigsWithOptions(uid: string, request: ListProductVersionConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductVersionConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentReleaseName)) {
      query["componentReleaseName"] = request.componentReleaseName;
    }

    if (!Util.isUnset(request.configType)) {
      query["configType"] = request.configType;
    }

    if (!Util.isUnset(request.fuzzy)) {
      query["fuzzy"] = request.fuzzy;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parameter)) {
      query["parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.scope)) {
      query["scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductVersionConfigs",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductVersionConfigsResponse>(await this.callApi(params, req, runtime), new ListProductVersionConfigsResponse({}));
  }

  async listProductVersionConfigs(uid: string, request: ListProductVersionConfigsRequest): Promise<ListProductVersionConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductVersionConfigsWithOptions(uid, request, headers, runtime);
  }

  async listProductVersionsWithOptions(tmpReq: ListProductVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductVersionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProductVersionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.platforms)) {
      request.platformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.platforms, "platforms", "json");
    }

    if (!Util.isUnset(tmpReq.supportedFoundationTypes)) {
      request.supportedFoundationTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.supportedFoundationTypes, "supportedFoundationTypes", "json");
    }

    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fuzzy)) {
      query["fuzzy"] = request.fuzzy;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.platformsShrink)) {
      query["platforms"] = request.platformsShrink;
    }

    if (!Util.isUnset(request.productName)) {
      query["productName"] = request.productName;
    }

    if (!Util.isUnset(request.productUID)) {
      query["productUID"] = request.productUID;
    }

    if (!Util.isUnset(request.released)) {
      query["released"] = request.released;
    }

    if (!Util.isUnset(request.supportedFoundationTypesShrink)) {
      query["supportedFoundationTypes"] = request.supportedFoundationTypesShrink;
    }

    if (!Util.isUnset(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProductVersions",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductVersionsResponse>(await this.callApi(params, req, runtime), new ListProductVersionsResponse({}));
  }

  async listProductVersions(request: ListProductVersionsRequest): Promise<ListProductVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductVersionsWithOptions(request, headers, runtime);
  }

  async listProductsWithOptions(request: ListProductsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProductsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.fuzzy)) {
      query["fuzzy"] = request.fuzzy;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProducts",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
  }

  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductsWithOptions(request, headers, runtime);
  }

  async listWorkflowTaskLogsWithOptions(stepName: string, taskName: string, tmpReq: ListWorkflowTaskLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkflowTaskLogsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWorkflowTaskLogsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filterValues)) {
      request.filterValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterValues, "filterValues", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterValuesShrink)) {
      query["filterValues"] = request.filterValuesShrink;
    }

    if (!Util.isUnset(request.orderType)) {
      query["orderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workflowType)) {
      query["workflowType"] = request.workflowType;
    }

    if (!Util.isUnset(request.xuid)) {
      query["xuid"] = request.xuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflowTaskLogs",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/workflows/steps/${OpenApiUtil.getEncodeParam(stepName)}/tasks/${OpenApiUtil.getEncodeParam(taskName)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowTaskLogsResponse>(await this.callApi(params, req, runtime), new ListWorkflowTaskLogsResponse({}));
  }

  async listWorkflowTaskLogs(stepName: string, taskName: string, request: ListWorkflowTaskLogsRequest): Promise<ListWorkflowTaskLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowTaskLogsWithOptions(stepName, taskName, request, headers, runtime);
  }

  async putEnvironmentTunnelWithOptions(uid: string, request: PutEnvironmentTunnelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutEnvironmentTunnelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tunnelConfig)) {
      body["tunnelConfig"] = request.tunnelConfig;
    }

    if (!Util.isUnset(request.tunnelType)) {
      body["tunnelType"] = request.tunnelType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutEnvironmentTunnel",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/tunnels`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutEnvironmentTunnelResponse>(await this.callApi(params, req, runtime), new PutEnvironmentTunnelResponse({}));
  }

  async putEnvironmentTunnel(uid: string, request: PutEnvironmentTunnelRequest): Promise<PutEnvironmentTunnelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putEnvironmentTunnelWithOptions(uid, request, headers, runtime);
  }

  async putProductInstanceConfigWithOptions(request: PutProductInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutProductInstanceConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentUID)) {
      body["componentUID"] = request.componentUID;
    }

    if (!Util.isUnset(request.componentVersionUID)) {
      body["componentVersionUID"] = request.componentVersionUID;
    }

    if (!Util.isUnset(request.configUID)) {
      body["configUID"] = request.configUID;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.environmentUID)) {
      body["environmentUID"] = request.environmentUID;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parentComponentName)) {
      body["parentComponentName"] = request.parentComponentName;
    }

    if (!Util.isUnset(request.parentComponentVersionUID)) {
      body["parentComponentVersionUID"] = request.parentComponentVersionUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      body["productVersionUID"] = request.productVersionUID;
    }

    if (!Util.isUnset(request.releaseName)) {
      body["releaseName"] = request.releaseName;
    }

    if (!Util.isUnset(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!Util.isUnset(request.value)) {
      body["value"] = request.value;
    }

    if (!Util.isUnset(request.valueType)) {
      body["valueType"] = request.valueType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutProductInstanceConfig",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-instances/configs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutProductInstanceConfigResponse>(await this.callApi(params, req, runtime), new PutProductInstanceConfigResponse({}));
  }

  async putProductInstanceConfig(request: PutProductInstanceConfigRequest): Promise<PutProductInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProductInstanceConfigWithOptions(request, headers, runtime);
  }

  async setEnvironmentFoundationReferenceWithOptions(uid: string, foundationReferenceUID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SetEnvironmentFoundationReferenceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "SetEnvironmentFoundationReference",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/foundation-references/${OpenApiUtil.getEncodeParam(foundationReferenceUID)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetEnvironmentFoundationReferenceResponse>(await this.callApi(params, req, runtime), new SetEnvironmentFoundationReferenceResponse({}));
  }

  async setEnvironmentFoundationReference(uid: string, foundationReferenceUID: string): Promise<SetEnvironmentFoundationReferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setEnvironmentFoundationReferenceWithOptions(uid, foundationReferenceUID, headers, runtime);
  }

  async updateDeliverableWithOptions(uid: string, request: UpdateDeliverableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDeliverableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.foundation)) {
      body["foundation"] = request.foundation;
    }

    if (!Util.isUnset(request.products)) {
      body["products"] = request.products;
    }

    if (!Util.isUnset(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeliverable",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/deliverables/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeliverableResponse>(await this.callApi(params, req, runtime), new UpdateDeliverableResponse({}));
  }

  async updateDeliverable(uid: string, request: UpdateDeliverableRequest): Promise<UpdateDeliverableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDeliverableWithOptions(uid, request, headers, runtime);
  }

  async updateDeliveryInstanceWithOptions(uid: string, request: UpdateDeliveryInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDeliveryInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deliverableConfigUID)) {
      body["deliverableConfigUID"] = request.deliverableConfigUID;
    }

    if (!Util.isUnset(request.deliverableUID)) {
      body["deliverableUID"] = request.deliverableUID;
    }

    if (!Util.isUnset(request.desc)) {
      body["desc"] = request.desc;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeliveryInstance",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/delivery/delivery-instances/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeliveryInstanceResponse>(await this.callApi(params, req, runtime), new UpdateDeliveryInstanceResponse({}));
  }

  async updateDeliveryInstance(uid: string, request: UpdateDeliveryInstanceRequest): Promise<UpdateDeliveryInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDeliveryInstanceWithOptions(uid, request, headers, runtime);
  }

  async updateEnvironmentWithOptions(uid: string, request: UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEnvironmentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.advancedConfigs)) {
      body["advancedConfigs"] = request.advancedConfigs;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.location)) {
      body["location"] = request.location;
    }

    if (!Util.isUnset(request.vendorConfig)) {
      body["vendorConfig"] = request.vendorConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnvironment",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentResponse({}));
  }

  async updateEnvironment(uid: string, request: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(uid, request, headers, runtime);
  }

  async updateEnvironmentNodeWithOptions(uid: string, nodeUID: string, request: UpdateEnvironmentNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEnvironmentNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationDisk)) {
      body["applicationDisk"] = request.applicationDisk;
    }

    if (!Util.isUnset(request.etcdDisk)) {
      body["etcdDisk"] = request.etcdDisk;
    }

    if (!Util.isUnset(request.labels)) {
      body["labels"] = request.labels;
    }

    if (!Util.isUnset(request.rootPassword)) {
      body["rootPassword"] = request.rootPassword;
    }

    if (!Util.isUnset(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!Util.isUnset(request.tridentSystemDisk)) {
      body["tridentSystemDisk"] = request.tridentSystemDisk;
    }

    if (!Util.isUnset(request.tridentSystemSizeDisk)) {
      body["tridentSystemSizeDisk"] = request.tridentSystemSizeDisk;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnvironmentNode",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/nodes/${OpenApiUtil.getEncodeParam(nodeUID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnvironmentNodeResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentNodeResponse({}));
  }

  async updateEnvironmentNode(uid: string, nodeUID: string, request: UpdateEnvironmentNodeRequest): Promise<UpdateEnvironmentNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentNodeWithOptions(uid, nodeUID, request, headers, runtime);
  }

  async updateEnvironmentProductVersionWithOptions(uid: string, request: UpdateEnvironmentProductVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEnvironmentProductVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.oldProductVersionSpecUID)) {
      body["oldProductVersionSpecUID"] = request.oldProductVersionSpecUID;
    }

    if (!Util.isUnset(request.oldProductVersionUID)) {
      body["oldProductVersionUID"] = request.oldProductVersionUID;
    }

    if (!Util.isUnset(request.productVersionSpecUID)) {
      body["productVersionSpecUID"] = request.productVersionSpecUID;
    }

    if (!Util.isUnset(request.productVersionUID)) {
      body["productVersionUID"] = request.productVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnvironmentProductVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/product-versions`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnvironmentProductVersionResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentProductVersionResponse({}));
  }

  async updateEnvironmentProductVersion(uid: string, request: UpdateEnvironmentProductVersionRequest): Promise<UpdateEnvironmentProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentProductVersionWithOptions(uid, request, headers, runtime);
  }

  async updateFoundationComponentReferenceWithOptions(uid: string, componentReferenceUID: string, request: UpdateFoundationComponentReferenceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFoundationComponentReferenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentOrchestrationValues)) {
      body["componentOrchestrationValues"] = request.componentOrchestrationValues;
    }

    if (!Util.isUnset(request.enable)) {
      body["enable"] = request.enable;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFoundationComponentReference",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation-references/${OpenApiUtil.getEncodeParam(uid)}/components/${OpenApiUtil.getEncodeParam(componentReferenceUID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFoundationComponentReferenceResponse>(await this.callApi(params, req, runtime), new UpdateFoundationComponentReferenceResponse({}));
  }

  async updateFoundationComponentReference(uid: string, componentReferenceUID: string, request: UpdateFoundationComponentReferenceRequest): Promise<UpdateFoundationComponentReferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFoundationComponentReferenceWithOptions(uid, componentReferenceUID, request, headers, runtime);
  }

  async updateFoundationReferenceWithOptions(uid: string, request: UpdateFoundationReferenceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFoundationReferenceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterConfig)) {
      body["clusterConfig"] = request.clusterConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFoundationReference",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/foundation-references/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFoundationReferenceResponse>(await this.callApi(params, req, runtime), new UpdateFoundationReferenceResponse({}));
  }

  async updateFoundationReference(uid: string, request: UpdateFoundationReferenceRequest): Promise<UpdateFoundationReferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFoundationReferenceWithOptions(uid, request, headers, runtime);
  }

  async updateProductWithOptions(uid: string, request: UpdateProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categories)) {
      body["categories"] = request.categories;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.vendor)) {
      body["vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProduct",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/products/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProductResponse>(await this.callApi(params, req, runtime), new UpdateProductResponse({}));
  }

  async updateProduct(uid: string, request: UpdateProductRequest): Promise<UpdateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProductWithOptions(uid, request, headers, runtime);
  }

  async updateProductComponentVersionWithOptions(uid: string, relationUID: string, request: UpdateProductComponentVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProductComponentVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentOrchestrationValues)) {
      body["componentOrchestrationValues"] = request.componentOrchestrationValues;
    }

    if (!Util.isUnset(request.componentSpecificationUid)) {
      body["componentSpecificationUid"] = request.componentSpecificationUid;
    }

    if (!Util.isUnset(request.componentSpecificationValues)) {
      body["componentSpecificationValues"] = request.componentSpecificationValues;
    }

    if (!Util.isUnset(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!Util.isUnset(request.newComponentVersionUID)) {
      body["newComponentVersionUID"] = request.newComponentVersionUID;
    }

    if (!Util.isUnset(request.policy)) {
      body["policy"] = request.policy;
    }

    if (!Util.isUnset(request.releaseName)) {
      body["releaseName"] = request.releaseName;
    }

    if (!Util.isUnset(request.unsetComponentVersionSpec)) {
      body["unsetComponentVersionSpec"] = request.unsetComponentVersionSpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProductComponentVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/relations/${OpenApiUtil.getEncodeParam(relationUID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProductComponentVersionResponse>(await this.callApi(params, req, runtime), new UpdateProductComponentVersionResponse({}));
  }

  async updateProductComponentVersion(uid: string, relationUID: string, request: UpdateProductComponentVersionRequest): Promise<UpdateProductComponentVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProductComponentVersionWithOptions(uid, relationUID, request, headers, runtime);
  }

  /**
    * @deprecated
    *
    * @param request UpdateProductFoundationVersionRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateProductFoundationVersionResponse
   */
  // Deprecated
  async updateProductFoundationVersionWithOptions(uid: string, request: UpdateProductFoundationVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProductFoundationVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.foundationVersionUID)) {
      body["foundationVersionUID"] = request.foundationVersionUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProductFoundationVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/foundation`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProductFoundationVersionResponse>(await this.callApi(params, req, runtime), new UpdateProductFoundationVersionResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request UpdateProductFoundationVersionRequest
    * @return UpdateProductFoundationVersionResponse
   */
  // Deprecated
  async updateProductFoundationVersion(uid: string, request: UpdateProductFoundationVersionRequest): Promise<UpdateProductFoundationVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProductFoundationVersionWithOptions(uid, request, headers, runtime);
  }

  async updateProductVersionWithOptions(uid: string, request: UpdateProductVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProductVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      query["action"] = request.action;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.continuousIntegration)) {
      body["continuousIntegration"] = request.continuousIntegration;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.entry)) {
      body["entry"] = request.entry;
    }

    if (!Util.isUnset(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProductVersion",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProductVersionResponse>(await this.callApi(params, req, runtime), new UpdateProductVersionResponse({}));
  }

  async updateProductVersion(uid: string, request: UpdateProductVersionRequest): Promise<UpdateProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProductVersionWithOptions(uid, request, headers, runtime);
  }

  async updateProductVersionConfigWithOptions(uid: string, configUID: string, request: UpdateProductVersionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProductVersionConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.componentVersionUID)) {
      body["componentVersionUID"] = request.componentVersionUID;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parentComponentVersionUID)) {
      body["parentComponentVersionUID"] = request.parentComponentVersionUID;
    }

    if (!Util.isUnset(request.value)) {
      body["value"] = request.value;
    }

    if (!Util.isUnset(request.valueType)) {
      body["valueType"] = request.valueType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProductVersionConfig",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/product-versions/${OpenApiUtil.getEncodeParam(uid)}/configs/${OpenApiUtil.getEncodeParam(configUID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProductVersionConfigResponse>(await this.callApi(params, req, runtime), new UpdateProductVersionConfigResponse({}));
  }

  async updateProductVersionConfig(uid: string, configUID: string, request: UpdateProductVersionConfigRequest): Promise<UpdateProductVersionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProductVersionConfigWithOptions(uid, configUID, request, headers, runtime);
  }

  async validateEnvironmentTunnelWithOptions(uid: string, request: ValidateEnvironmentTunnelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateEnvironmentTunnelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tunnelConfig)) {
      body["tunnelConfig"] = request.tunnelConfig;
    }

    if (!Util.isUnset(request.tunnelType)) {
      body["tunnelType"] = request.tunnelType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateEnvironmentTunnel",
      version: "2021-07-20",
      protocol: "HTTPS",
      pathname: `/api/v2/environments/${OpenApiUtil.getEncodeParam(uid)}/tunnels/validation`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ValidateEnvironmentTunnelResponse>(await this.callApi(params, req, runtime), new ValidateEnvironmentTunnelResponse({}));
  }

  async validateEnvironmentTunnel(uid: string, request: ValidateEnvironmentTunnelRequest): Promise<ValidateEnvironmentTunnelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateEnvironmentTunnelWithOptions(uid, request, headers, runtime);
  }

}
