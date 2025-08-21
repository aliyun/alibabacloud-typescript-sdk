// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionConfigurationResponseBodyResultClientNodeAmountRange extends $dara.Model {
  /**
   * @example
   * 25
   */
  maxAmount?: number;
  /**
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
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @example
   * 20
   */
  minSize?: number;
  /**
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
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * 5120
   */
  maxSize?: number;
  /**
   * @example
   * 20
   */
  minSize?: number;
  /**
   * @example
   * 2048
   */
  scaleLimit?: number;
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
   * @example
   * 25
   */
  maxAmount?: number;
  /**
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
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * 5120
   */
  maxSize?: number;
  /**
   * @example
   * 500
   */
  minSize?: number;
  /**
   * @example
   * 2048
   */
  scaleLimit?: number;
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
  amountRange?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange;
  diskList?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList[];
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
   * @example
   * 5.5_with_X-Pack
   */
  key?: string;
  /**
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
   * @example
   * 32
   */
  memory?: number;
  supportEsVersions?: string[];
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
   * @example
   * 20
   */
  maxAmount?: number;
  /**
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
  amountRange?: GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange;
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
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @example
   * 20
   */
  minSize?: number;
  /**
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
   * @example
   * 50
   */
  maxAmount?: number;
  /**
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
   * @example
   * 16
   */
  cpuCount?: number;
  /**
   * @example
   * 44000
   */
  disk?: number;
  /**
   * @example
   * local_efficiency
   */
  diskType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 64
   */
  memorySize?: number;
  /**
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
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
   * @example
   * 5.5
   */
  key?: string;
  /**
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
   * @example
   * x-pack
   */
  instanceCategory?: string;
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
   * @example
   * 50
   */
  maxAmount?: number;
  /**
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
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @example
   * 5120
   */
  maxSize?: number;
  /**
   * @example
   * 500
   */
  minSize?: number;
  /**
   * @example
   * 2048
   */
  scaleLimit?: number;
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
  amountRange?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange;
  diskList?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList[];
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
  clientNodeAmountRange?: GetRegionConfigurationResponseBodyResultClientNodeAmountRange;
  clientNodeDiskList?: GetRegionConfigurationResponseBodyResultClientNodeDiskList[];
  clientNodeSpec?: string[];
  /**
   * @example
   * https://common-buy.aliyun.com/?commodityCode=elasticsearch&orderType=BUY#/buy
   */
  createUrl?: string;
  dataDiskList?: GetRegionConfigurationResponseBodyResultDataDiskList[];
  elasticNodeProperties?: GetRegionConfigurationResponseBodyResultElasticNodeProperties;
  /**
   * @example
   * production
   */
  env?: string;
  esVersions?: string[];
  esVersionsLatestList?: GetRegionConfigurationResponseBodyResultEsVersionsLatestList[];
  instanceSupportNodes?: string[];
  jvmConfine?: GetRegionConfigurationResponseBodyResultJvmConfine;
  kibanaNodeProperties?: GetRegionConfigurationResponseBodyResultKibanaNodeProperties;
  logstashZones?: string[];
  masterDiskList?: GetRegionConfigurationResponseBodyResultMasterDiskList[];
  masterSpec?: string[];
  node?: GetRegionConfigurationResponseBodyResultNode;
  nodeSpecList?: GetRegionConfigurationResponseBodyResultNodeSpecList[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  supportVersions?: GetRegionConfigurationResponseBodyResultSupportVersions[];
  warmNodeProperties?: GetRegionConfigurationResponseBodyResultWarmNodeProperties;
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
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6F******
   */
  requestId?: string;
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

