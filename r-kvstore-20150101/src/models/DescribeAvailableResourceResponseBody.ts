// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource extends $dara.Model {
  /**
   * @remarks
   * The memory size of the instance. Unit: MB.
   * 
   * @example
   * 16384
   */
  capacity?: number;
  /**
   * @remarks
   * The code of the instance type. If you want to view the code of an instance type, you can search for the code of the instance type in Help Center.
   * 
   * @example
   * redis.amber.logic.sharding.2g.8db.0rodb.24proxy.multithread
   */
  instanceClass?: string;
  /**
   * @remarks
   * The description of the instance type.
   * 
   * @example
   * 16 GB cluster instance with 8 nodes (1,920,000 queries per second and 240,000 connections)
   */
  instanceClassRemark?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      instanceClass: 'InstanceClass',
      instanceClassRemark: 'InstanceClassRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      instanceClass: 'string',
      instanceClassRemark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResources extends $dara.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource },
    };
  }

  validate() {
    if(Array.isArray(this.availableResource)) {
      $dara.Model.validateArray(this.availableResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeType extends $dara.Model {
  /**
   * @remarks
   * The available instance types.
   */
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResources;
  /**
   * @remarks
   * The node type of the instance. Valid values:
   * 
   * *   **single**: standalone
   * *   **double**: master-replica
   * 
   * @example
   * double
   */
  supportedNodeType?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      supportedNodeType: 'SupportedNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResources,
      supportedNodeType: 'string',
    };
  }

  validate() {
    if(this.availableResources && typeof (this.availableResources as any).validate === 'function') {
      (this.availableResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypes extends $dara.Model {
  supportedNodeType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeType[];
  static names(): { [key: string]: string } {
    return {
      supportedNodeType: 'SupportedNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNodeType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeType },
    };
  }

  validate() {
    if(Array.isArray(this.supportedNodeType)) {
      $dara.Model.validateArray(this.supportedNodeType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumber extends $dara.Model {
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 8
   */
  shardNumber?: string;
  /**
   * @remarks
   * The supported node types.
   */
  supportedNodeTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypes;
  static names(): { [key: string]: string } {
    return {
      shardNumber: 'ShardNumber',
      supportedNodeTypes: 'SupportedNodeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardNumber: 'string',
      supportedNodeTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypes,
    };
  }

  validate() {
    if(this.supportedNodeTypes && typeof (this.supportedNodeTypes as any).validate === 'function') {
      (this.supportedNodeTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbers extends $dara.Model {
  supportedShardNumber?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumber[];
  static names(): { [key: string]: string } {
    return {
      supportedShardNumber: 'SupportedShardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedShardNumber: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumber },
    };
  }

  validate() {
    if(Array.isArray(this.supportedShardNumber)) {
      $dara.Model.validateArray(this.supportedShardNumber);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureType extends $dara.Model {
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **standard**: standard architecture
   * *   **cluster**: cluster architecture
   * *   **rwsplit**: read/write splitting architecture
   * 
   * @example
   * cluster
   */
  architecture?: string;
  /**
   * @remarks
   * The numbers of available shards.
   */
  supportedShardNumbers?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbers;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      supportedShardNumbers: 'SupportedShardNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      supportedShardNumbers: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbers,
    };
  }

  validate() {
    if(this.supportedShardNumbers && typeof (this.supportedShardNumbers as any).validate === 'function') {
      (this.supportedShardNumbers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypes extends $dara.Model {
  supportedArchitectureType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureType[];
  static names(): { [key: string]: string } {
    return {
      supportedArchitectureType: 'SupportedArchitectureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedArchitectureType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureType },
    };
  }

  validate() {
    if(Array.isArray(this.supportedArchitectureType)) {
      $dara.Model.validateArray(this.supportedArchitectureType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersion extends $dara.Model {
  /**
   * @remarks
   * The available architectures.
   */
  supportedArchitectureTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypes;
  /**
   * @remarks
   * The engine version of the instance.
   * 
   * @example
   * 5.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedArchitectureTypes: 'SupportedArchitectureTypes',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedArchitectureTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypes,
      version: 'string',
    };
  }

  validate() {
    if(this.supportedArchitectureTypes && typeof (this.supportedArchitectureTypes as any).validate === 'function') {
      (this.supportedArchitectureTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersions extends $dara.Model {
  supportedEngineVersion?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersion },
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

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesType extends $dara.Model {
  /**
   * @remarks
   * The instance series. Valid values:
   * 
   * *   **enhanced_performance_type**: Tair (Enterprise Edition) DRAM-based instance
   * *   **hybrid_storage**: Redis Open-Source Edition hybrid-storage instance
   * 
   * @example
   * enhanced_performance_type
   */
  seriesType?: string;
  /**
   * @remarks
   * The available engine versions.
   */
  supportedEngineVersions?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersions;
  static names(): { [key: string]: string } {
    return {
      seriesType: 'SeriesType',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesType: 'string',
      supportedEngineVersions: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersions,
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

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypes extends $dara.Model {
  supportedSeriesType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesType[];
  static names(): { [key: string]: string } {
    return {
      supportedSeriesType: 'SupportedSeriesType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSeriesType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesType },
    };
  }

  validate() {
    if(Array.isArray(this.supportedSeriesType)) {
      $dara.Model.validateArray(this.supportedSeriesType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionType extends $dara.Model {
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **Community**: Community Edition
   * *   **Enterprise**: Enhanced Edition (Tair)
   * 
   * @example
   * Enterprise
   */
  editionType?: string;
  /**
   * @remarks
   * The instance series types.
   */
  supportedSeriesTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypes;
  static names(): { [key: string]: string } {
    return {
      editionType: 'EditionType',
      supportedSeriesTypes: 'SupportedSeriesTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editionType: 'string',
      supportedSeriesTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypes,
    };
  }

  validate() {
    if(this.supportedSeriesTypes && typeof (this.supportedSeriesTypes as any).validate === 'function') {
      (this.supportedSeriesTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypes extends $dara.Model {
  supportedEditionType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionType[];
  static names(): { [key: string]: string } {
    return {
      supportedEditionType: 'SupportedEditionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEditionType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionType },
    };
  }

  validate() {
    if(Array.isArray(this.supportedEditionType)) {
      $dara.Model.validateArray(this.supportedEditionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $dara.Model {
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The instance edition types.
   */
  supportedEditionTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypes;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEditionTypes: 'SupportedEditionTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEditionTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypes,
    };
  }

  validate() {
    if(this.supportedEditionTypes && typeof (this.supportedEditionTypes as any).validate === 'function') {
      (this.supportedEditionTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines extends $dara.Model {
  supportedEngine?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine },
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

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $dara.Model {
  /**
   * @remarks
   * An internal parameter.
   * 
   * @example
   * true
   */
  isMainSale?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The supported engines.
   */
  supportedEngines?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  /**
   * @remarks
   * The ID of the zone in which the instance is located.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone H
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      isMainSale: 'IsMainSale',
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMainSale: 'boolean',
      regionId: 'string',
      supportedEngines: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    if(this.supportedEngines && typeof (this.supportedEngines as any).validate === 'function') {
      (this.supportedEngines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZones extends $dara.Model {
  availableZone?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone },
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

export class DescribeAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the zones.
   */
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 493B7308-D9C2-55F6-B042-0313BD63****
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
      availableZones: DescribeAvailableResourceResponseBodyAvailableZones,
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

