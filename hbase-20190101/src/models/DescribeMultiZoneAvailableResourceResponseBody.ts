// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail extends $dara.Model {
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * 16
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource extends $dara.Model {
  /**
   * @example
   * hbase.sn2.large
   */
  instanceType?: string;
  instanceTypeDetail?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      instanceTypeDetail: 'InstanceTypeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      instanceTypeDetail: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResourceInstanceTypeDetail,
    };
  }

  validate() {
    if(this.instanceTypeDetail && typeof (this.instanceTypeDetail as any).validate === 'function') {
      (this.instanceTypeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources extends $dara.Model {
  masterResource?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource[];
  static names(): { [key: string]: string } {
    return {
      masterResource: 'MasterResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResource: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResourcesMasterResource },
    };
  }

  validate() {
    if(Array.isArray(this.masterResource)) {
      $dara.Model.validateArray(this.masterResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange extends $dara.Model {
  /**
   * @example
   * 64000
   */
  maxSize?: number;
  /**
   * @example
   * 400
   */
  minSize?: number;
  /**
   * @example
   * 40
   */
  stepSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'MaxSize',
      minSize: 'MinSize',
      stepSize: 'StepSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      minSize: 'number',
      stepSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail extends $dara.Model {
  /**
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @example
   * 8
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      mem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource extends $dara.Model {
  DBInstanceStorageRange?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange;
  /**
   * @example
   * hbase.sn2.2xlarge
   */
  instanceType?: string;
  instanceTypeDetail?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail;
  /**
   * @example
   * 30
   */
  maxCoreCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceStorageRange: 'DBInstanceStorageRange',
      instanceType: 'InstanceType',
      instanceTypeDetail: 'InstanceTypeDetail',
      maxCoreCount: 'MaxCoreCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceStorageRange: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceDBInstanceStorageRange,
      instanceType: 'string',
      instanceTypeDetail: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResourceInstanceTypeDetail,
      maxCoreCount: 'number',
    };
  }

  validate() {
    if(this.DBInstanceStorageRange && typeof (this.DBInstanceStorageRange as any).validate === 'function') {
      (this.DBInstanceStorageRange as any).validate();
    }
    if(this.instanceTypeDetail && typeof (this.instanceTypeDetail as any).validate === 'function') {
      (this.instanceTypeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources extends $dara.Model {
  coreResource?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource[];
  static names(): { [key: string]: string } {
    return {
      coreResource: 'CoreResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResource: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResourcesCoreResource },
    };
  }

  validate() {
    if(Array.isArray(this.coreResource)) {
      $dara.Model.validateArray(this.coreResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType extends $dara.Model {
  coreResources?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources;
  /**
   * @example
   * cloud_efficiency
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      coreResources: 'CoreResources',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreResources: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageTypeCoreResources,
      storageType: 'string',
    };
  }

  validate() {
    if(this.coreResources && typeof (this.coreResources as any).validate === 'function') {
      (this.coreResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes extends $dara.Model {
  supportedStorageType?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType[];
  static names(): { [key: string]: string } {
    return {
      supportedStorageType: 'SupportedStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageType: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypesSupportedStorageType },
    };
  }

  validate() {
    if(Array.isArray(this.supportedStorageType)) {
      $dara.Model.validateArray(this.supportedStorageType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories extends $dara.Model {
  /**
   * @example
   * cluster
   */
  category?: string;
  supportedStorageTypes?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      supportedStorageTypes: 'SupportedStorageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      supportedStorageTypes: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategoriesSupportedStorageTypes,
    };
  }

  validate() {
    if(this.supportedStorageTypes && typeof (this.supportedStorageTypes as any).validate === 'function') {
      (this.supportedStorageTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories extends $dara.Model {
  supportedCategories?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories[];
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategoriesSupportedCategories },
    };
  }

  validate() {
    if(Array.isArray(this.supportedCategories)) {
      $dara.Model.validateArray(this.supportedCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion extends $dara.Model {
  supportedCategories?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories;
  /**
   * @example
   * 2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedCategories: 'SupportedCategories',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategories: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategories,
      version: 'string',
    };
  }

  validate() {
    if(this.supportedCategories && typeof (this.supportedCategories as any).validate === 'function') {
      (this.supportedCategories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions extends $dara.Model {
  supportedEngineVersion?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngineVersion)) {
      $dara.Model.validateArray(this.supportedEngineVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $dara.Model {
  /**
   * @example
   * hbaseue
   */
  engine?: string;
  supportedEngineVersions?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEngineVersions: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions,
    };
  }

  validate() {
    if(this.supportedEngineVersions && typeof (this.supportedEngineVersions as any).validate === 'function') {
      (this.supportedEngineVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines extends $dara.Model {
  supportedEngine?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine },
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngine)) {
      $dara.Model.validateArray(this.supportedEngine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone extends $dara.Model {
  masterResources?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  supportedEngines?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  /**
   * @example
   * cn-hangzhou-bef-aliyun
   */
  zoneCombination?: string;
  static names(): { [key: string]: string } {
    return {
      masterResources: 'MasterResources',
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneCombination: 'ZoneCombination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterResources: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneMasterResources,
      regionId: 'string',
      supportedEngines: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
      zoneCombination: 'string',
    };
  }

  validate() {
    if(this.masterResources && typeof (this.masterResources as any).validate === 'function') {
      (this.masterResources as any).validate();
    }
    if(this.supportedEngines && typeof (this.supportedEngines as any).validate === 'function') {
      (this.supportedEngines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBodyAvailableZones extends $dara.Model {
  availableZone?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableResourceResponseBodyAvailableZonesAvailableZone },
    };
  }

  validate() {
    if(Array.isArray(this.availableZone)) {
      $dara.Model.validateArray(this.availableZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableResourceResponseBody extends $dara.Model {
  availableZones?: DescribeMultiZoneAvailableResourceResponseBodyAvailableZones;
  /**
   * @example
   * B2EEBBA9-C627-4415-81A0-B77BC54F1D52
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeMultiZoneAvailableResourceResponseBodyAvailableZones,
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableZones && typeof (this.availableZones as any).validate === 'function') {
      (this.availableZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

