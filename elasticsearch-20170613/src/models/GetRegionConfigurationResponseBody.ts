// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionConfigurationResponseBodyResultClientNodeAmountRange extends $dara.Model {
  /**
   * @remarks
   * The maximum number of client nodes.
   * 
   * @example
   * 25
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of client nodes.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultClientNodeDiskList extends $dara.Model {
  /**
   * @remarks
   * The disk storage type.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The maximum value allowed for the disk.
   * 
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum value allowed for the disk.
   * 
   * @example
   * 20
   */
  minSize?: number;
  /**
   * @remarks
   * The maximum value allowed for continuous disk sizing.
   * 
   * @example
   * 18
   */
  scaleLimit?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The disk storage type.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The maximum value allowed for the disk.
   * 
   * @example
   * 5120
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum value allowed for the disk.
   * 
   * @example
   * 20
   */
  minSize?: number;
  /**
   * @remarks
   * The maximum value allowed for continuous disk sizing.
   * 
   * @example
   * 2048
   */
  scaleLimit?: number;
  /**
   * @remarks
   * The list of allowed discrete values for the data node disk capacity.
   */
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueLimitSet)) {
      $dara.Model.validateArray(this.valueLimitSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes.
   * 
   * @example
   * 25
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of nodes.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether disk encryption can be enabled. Valid values:
   * - true: Supported.
   * - false: Not supported.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The disk storage type.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The maximum value allowed for the disk.
   * 
   * @example
   * 5120
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum value allowed for the disk.
   * 
   * @example
   * 500
   */
  minSize?: number;
  /**
   * @remarks
   * The maximum value allowed for continuous disk sizing.
   * 
   * @example
   * 2048
   */
  scaleLimit?: number;
  /**
   * @remarks
   * The list of discrete values allowed for the disk capacity of elastic data nodes.
   */
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEncryption: 'boolean',
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueLimitSet)) {
      $dara.Model.validateArray(this.valueLimitSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultElasticNodeProperties extends $dara.Model {
  /**
   * @remarks
   * The range for the number of warm nodes.
   */
  amountRange?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange;
  /**
   * @remarks
   * The list of disk configurations.
   */
  diskList?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList[];
  /**
   * @remarks
   * The list of elastic data node specifications supported in the current region.
   */
  spec?: string[];
  static names(): { [key: string]: string } {
    return {
      amountRange: 'amountRange',
      diskList: 'diskList',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountRange: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange,
      diskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList },
      spec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.amountRange && typeof (this.amountRange as any).validate === 'function') {
      (this.amountRange as any).validate();
    }
    if(Array.isArray(this.diskList)) {
      $dara.Model.validateArray(this.diskList);
    }
    if(Array.isArray(this.spec)) {
      $dara.Model.validateArray(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultEsVersionsLatestList extends $dara.Model {
  /**
   * @remarks
   * The supported major version number.
   * 
   * @example
   * 5.5_with_X-Pack
   */
  key?: string;
  /**
   * @remarks
   * The full name of the supported minor version number.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultJvmConfine extends $dara.Model {
  /**
   * @remarks
   * The minimum memory size of the specification required to enable JVM garbage collection.
   * 
   * @example
   * 32
   */
  memory?: number;
  /**
   * @remarks
   * The list of Elasticsearch versions that support configuring the JVM garbage collector.
   */
  supportEsVersions?: string[];
  /**
   * @remarks
   * The list of allowed JVM garbage collectors.
   */
  supportGcs?: string[];
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
      supportEsVersions: 'supportEsVersions',
      supportGcs: 'supportGcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'number',
      supportEsVersions: { 'type': 'array', 'itemType': 'string' },
      supportGcs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportEsVersions)) {
      $dara.Model.validateArray(this.supportEsVersions);
    }
    if(Array.isArray(this.supportGcs)) {
      $dara.Model.validateArray(this.supportGcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes.
   * 
   * @example
   * 20
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of nodes.
   * 
   * @example
   * 1
   */
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultKibanaNodeProperties extends $dara.Model {
  /**
   * @remarks
   * The allowed range for the number of nodes.
   */
  amountRange?: GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange;
  /**
   * @remarks
   * The list of Kibana node specifications supported in the current region.
   */
  spec?: string[];
  static names(): { [key: string]: string } {
    return {
      amountRange: 'amountRange',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountRange: GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange,
      spec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.amountRange && typeof (this.amountRange as any).validate === 'function') {
      (this.amountRange as any).validate();
    }
    if(Array.isArray(this.spec)) {
      $dara.Model.validateArray(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultMasterDiskList extends $dara.Model {
  /**
   * @remarks
   * The disk storage type.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The maximum value allowed for the disk.
   * 
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum value allowed for the disk.
   * 
   * @example
   * 20
   */
  minSize?: number;
  /**
   * @remarks
   * The maximum value allowed for continuous disk sizing.
   * 
   * @example
   * 20
   */
  scaleLimit?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultNode extends $dara.Model {
  /**
   * @remarks
   * The maximum number of data nodes allowed.
   * 
   * @example
   * 50
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of data nodes allowed.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultNodeSpecList extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores for the specification.
   * 
   * @example
   * 16
   */
  cpuCount?: number;
  /**
   * @remarks
   * The disk size for the specification.
   * 
   * @example
   * 44000
   */
  disk?: number;
  /**
   * @remarks
   * The disk storage type.
   * 
   * @example
   * local_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * Specifies whether the specification is available for purchase. Valid values:
   * - true: Available.
   * - false: Unavailable.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The memory size of the node.
   * 
   * @example
   * 64
   */
  memorySize?: number;
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * - common: Cloud disk.
   * - local_efficiency: Local SATA disk.
   * - local_ssd: Local SSD.
   * 
   * @example
   * local_efficiency
   */
  specGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'cpuCount',
      disk: 'disk',
      diskType: 'diskType',
      enable: 'enable',
      memorySize: 'memorySize',
      spec: 'spec',
      specGroupType: 'specGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      disk: 'number',
      diskType: 'string',
      enable: 'boolean',
      memorySize: 'number',
      spec: 'string',
      specGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList extends $dara.Model {
  /**
   * @remarks
   * The version available for selection on the buy page.
   * 
   * @example
   * 5.5
   */
  key?: string;
  /**
   * @remarks
   * The detailed version number.
   * 
   * @example
   * 5.5.3
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultSupportVersions extends $dara.Model {
  /**
   * @remarks
   * The instance category. Valid values:
   * - advanced: Advanced Edition.
   * - x-pack: Commercial Edition.
   * 
   * @example
   * x-pack
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The supported Elasticsearch version information.
   */
  supportVersionList?: GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList[];
  static names(): { [key: string]: string } {
    return {
      instanceCategory: 'instanceCategory',
      supportVersionList: 'supportVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCategory: 'string',
      supportVersionList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList },
    };
  }

  validate() {
    if(Array.isArray(this.supportVersionList)) {
      $dara.Model.validateArray(this.supportVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes.
   * 
   * @example
   * 50
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of nodes.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether disk encryption can be enabled. Valid values:
   * - true: Supported.
   * - false: Not supported.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The disk storage type.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The maximum value allowed for the disk.
   * 
   * @example
   * 5120
   */
  maxSize?: number;
  /**
   * @remarks
   * The minimum value allowed for the disk.
   * 
   * @example
   * 500
   */
  minSize?: number;
  /**
   * @remarks
   * The maximum value allowed for continuous disk sizing.
   * 
   * @example
   * 2048
   */
  scaleLimit?: number;
  /**
   * @remarks
   * The list of allowed discrete values for the warm data node disk capacity.
   */
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEncryption: 'boolean',
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueLimitSet)) {
      $dara.Model.validateArray(this.valueLimitSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultWarmNodeProperties extends $dara.Model {
  /**
   * @remarks
   * The range for the number of nodes.
   */
  amountRange?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange;
  /**
   * @remarks
   * The list of disk configurations.
   */
  diskList?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList[];
  /**
   * @remarks
   * The list of warm data node specifications supported in the current region.
   */
  spec?: string[];
  static names(): { [key: string]: string } {
    return {
      amountRange: 'amountRange',
      diskList: 'diskList',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountRange: GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange,
      diskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList },
      spec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.amountRange && typeof (this.amountRange as any).validate === 'function') {
      (this.amountRange as any).validate();
    }
    if(Array.isArray(this.diskList)) {
      $dara.Model.validateArray(this.diskList);
    }
    if(Array.isArray(this.spec)) {
      $dara.Model.validateArray(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The range for the number of client nodes.
   */
  clientNodeAmountRange?: GetRegionConfigurationResponseBodyResultClientNodeAmountRange;
  /**
   * @remarks
   * The allowed disk values for client nodes.
   */
  clientNodeDiskList?: GetRegionConfigurationResponseBodyResultClientNodeDiskList[];
  /**
   * @remarks
   * The list of client node specifications supported in the current region.
   */
  clientNodeSpec?: string[];
  /**
   * @remarks
   * The URL of the buy page.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=elasticsearch&orderType=BUY#/buy
   */
  createUrl?: string;
  /**
   * @remarks
   * The allowed disk values for data nodes.
   */
  dataDiskList?: GetRegionConfigurationResponseBodyResultDataDiskList[];
  /**
   * @remarks
   * The elastic node configuration.
   */
  elasticNodeProperties?: GetRegionConfigurationResponseBodyResultElasticNodeProperties;
  /**
   * @remarks
   * The environment flag.
   * 
   * @example
   * production
   */
  env?: string;
  /**
   * @remarks
   * The list of Elasticsearch versions that can be created in the current region.
   */
  esVersions?: string[];
  /**
   * @remarks
   * The list of Elasticsearch versions available for purchase.
   */
  esVersionsLatestList?: GetRegionConfigurationResponseBodyResultEsVersionsLatestList[];
  /**
   * @remarks
   * The list of instance node types available in the current region.
   */
  instanceSupportNodes?: string[];
  /**
   * @remarks
   * The JVM validation configuration.
   */
  jvmConfine?: GetRegionConfigurationResponseBodyResultJvmConfine;
  /**
   * @remarks
   * The Kibana node configuration.
   */
  kibanaNodeProperties?: GetRegionConfigurationResponseBodyResultKibanaNodeProperties;
  /**
   * @remarks
   * The list of zones that support Logstash deployment in the current region.
   */
  logstashZones?: string[];
  /**
   * @remarks
   * The allowed disk values for dedicated master nodes.
   */
  masterDiskList?: GetRegionConfigurationResponseBodyResultMasterDiskList[];
  /**
   * @remarks
   * The list of dedicated master node specifications supported in the current region.
   */
  masterSpec?: string[];
  /**
   * @remarks
   * The node configuration.
   */
  node?: GetRegionConfigurationResponseBodyResultNode;
  /**
   * @remarks
   * The list of data node specifications.
   */
  nodeSpecList?: GetRegionConfigurationResponseBodyResultNodeSpecList[];
  /**
   * @remarks
   * The current region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The supported version configurations.
   */
  supportVersions?: GetRegionConfigurationResponseBodyResultSupportVersions[];
  /**
   * @remarks
   * The warm node configuration.
   */
  warmNodeProperties?: GetRegionConfigurationResponseBodyResultWarmNodeProperties;
  /**
   * @remarks
   * The list of zones supported in the current region.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      clientNodeAmountRange: 'clientNodeAmountRange',
      clientNodeDiskList: 'clientNodeDiskList',
      clientNodeSpec: 'clientNodeSpec',
      createUrl: 'createUrl',
      dataDiskList: 'dataDiskList',
      elasticNodeProperties: 'elasticNodeProperties',
      env: 'env',
      esVersions: 'esVersions',
      esVersionsLatestList: 'esVersionsLatestList',
      instanceSupportNodes: 'instanceSupportNodes',
      jvmConfine: 'jvmConfine',
      kibanaNodeProperties: 'kibanaNodeProperties',
      logstashZones: 'logstashZones',
      masterDiskList: 'masterDiskList',
      masterSpec: 'masterSpec',
      node: 'node',
      nodeSpecList: 'nodeSpecList',
      regionId: 'regionId',
      supportVersions: 'supportVersions',
      warmNodeProperties: 'warmNodeProperties',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientNodeAmountRange: GetRegionConfigurationResponseBodyResultClientNodeAmountRange,
      clientNodeDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultClientNodeDiskList },
      clientNodeSpec: { 'type': 'array', 'itemType': 'string' },
      createUrl: 'string',
      dataDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultDataDiskList },
      elasticNodeProperties: GetRegionConfigurationResponseBodyResultElasticNodeProperties,
      env: 'string',
      esVersions: { 'type': 'array', 'itemType': 'string' },
      esVersionsLatestList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultEsVersionsLatestList },
      instanceSupportNodes: { 'type': 'array', 'itemType': 'string' },
      jvmConfine: GetRegionConfigurationResponseBodyResultJvmConfine,
      kibanaNodeProperties: GetRegionConfigurationResponseBodyResultKibanaNodeProperties,
      logstashZones: { 'type': 'array', 'itemType': 'string' },
      masterDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultMasterDiskList },
      masterSpec: { 'type': 'array', 'itemType': 'string' },
      node: GetRegionConfigurationResponseBodyResultNode,
      nodeSpecList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultNodeSpecList },
      regionId: 'string',
      supportVersions: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultSupportVersions },
      warmNodeProperties: GetRegionConfigurationResponseBodyResultWarmNodeProperties,
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.clientNodeAmountRange && typeof (this.clientNodeAmountRange as any).validate === 'function') {
      (this.clientNodeAmountRange as any).validate();
    }
    if(Array.isArray(this.clientNodeDiskList)) {
      $dara.Model.validateArray(this.clientNodeDiskList);
    }
    if(Array.isArray(this.clientNodeSpec)) {
      $dara.Model.validateArray(this.clientNodeSpec);
    }
    if(Array.isArray(this.dataDiskList)) {
      $dara.Model.validateArray(this.dataDiskList);
    }
    if(this.elasticNodeProperties && typeof (this.elasticNodeProperties as any).validate === 'function') {
      (this.elasticNodeProperties as any).validate();
    }
    if(Array.isArray(this.esVersions)) {
      $dara.Model.validateArray(this.esVersions);
    }
    if(Array.isArray(this.esVersionsLatestList)) {
      $dara.Model.validateArray(this.esVersionsLatestList);
    }
    if(Array.isArray(this.instanceSupportNodes)) {
      $dara.Model.validateArray(this.instanceSupportNodes);
    }
    if(this.jvmConfine && typeof (this.jvmConfine as any).validate === 'function') {
      (this.jvmConfine as any).validate();
    }
    if(this.kibanaNodeProperties && typeof (this.kibanaNodeProperties as any).validate === 'function') {
      (this.kibanaNodeProperties as any).validate();
    }
    if(Array.isArray(this.logstashZones)) {
      $dara.Model.validateArray(this.logstashZones);
    }
    if(Array.isArray(this.masterDiskList)) {
      $dara.Model.validateArray(this.masterDiskList);
    }
    if(Array.isArray(this.masterSpec)) {
      $dara.Model.validateArray(this.masterSpec);
    }
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    if(Array.isArray(this.nodeSpecList)) {
      $dara.Model.validateArray(this.nodeSpecList);
    }
    if(Array.isArray(this.supportVersions)) {
      $dara.Model.validateArray(this.supportVersions);
    }
    if(this.warmNodeProperties && typeof (this.warmNodeProperties as any).validate === 'function') {
      (this.warmNodeProperties as any).validate();
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6F******
   */
  requestId?: string;
  /**
   * @remarks
   * The region configuration information.
   */
  result?: GetRegionConfigurationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRegionConfigurationResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

