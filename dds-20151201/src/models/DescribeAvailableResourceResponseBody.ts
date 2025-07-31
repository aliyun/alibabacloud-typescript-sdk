// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResourceDBInstanceStorageRange extends $dara.Model {
  /**
   * @remarks
   * The maximum storage capacity. Unit: GB.
   * 
   * @example
   * 16000
   */
  max?: number;
  /**
   * @remarks
   * The minimum storage capacity. Unit: GB.
   * 
   * @example
   * 20
   */
  min?: number;
  /**
   * @remarks
   * The step size for adjusting the storage capacity. Unit: GB.
   * 
   * @example
   * 10
   */
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource extends $dara.Model {
  /**
   * @remarks
   * The storage capacity range of the instance.
   */
  DBInstanceStorageRange?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResourceDBInstanceStorageRange;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * mdb.shard.2x.xlarge.d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * 4 cores, 8 GB (Dedicated) (Current instance type: mdb.shard.2x.xlarge.d (4 cores, 8 GB (Dedicated cloud-disk), maximum connections: 3000, maximum IOPS: min{1800 + 50 × Storage capacity, 21000}))
   */
  instanceClassRemark?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceStorageRange: 'DBInstanceStorageRange',
      instanceClass: 'InstanceClass',
      instanceClassRemark: 'InstanceClassRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceStorageRange: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResourceDBInstanceStorageRange,
      instanceClass: 'string',
      instanceClassRemark: 'string',
    };
  }

  validate() {
    if(this.DBInstanceStorageRange && typeof (this.DBInstanceStorageRange as any).validate === 'function') {
      (this.DBInstanceStorageRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResources extends $dara.Model {
  availableResource?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource },
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeType extends $dara.Model {
  /**
   * @remarks
   * The details of the available resources.
   */
  availableResources?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResources;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * VPC
   */
  networkTypes?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * @example
   * 3
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      networkTypes: 'NetworkTypes',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeTypeAvailableResources,
      networkTypes: 'string',
      nodeType: 'string',
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypes extends $dara.Model {
  supportedNodeType?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeType[];
  static names(): { [key: string]: string } {
    return {
      supportedNodeType: 'SupportedNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNodeType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypesSupportedNodeType },
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngine extends $dara.Model {
  /**
   * @remarks
   * The storage engine of the instance.
   * 
   * @example
   * WiredTiger
   */
  engine?: string;
  /**
   * @remarks
   * The supported instance types.
   */
  supportedNodeTypes?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypes;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedNodeTypes: 'SupportedNodeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedNodeTypes: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngineSupportedNodeTypes,
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEngines extends $dara.Model {
  supportedEngine?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEnginesSupportedEngine },
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersion extends $dara.Model {
  /**
   * @remarks
   * The supported storage engines.
   */
  supportedEngines?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEngines;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 4.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersionSupportedEngines,
      version: 'string',
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersions extends $dara.Model {
  supportedEngineVersion?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersionsSupportedEngineVersion },
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZone extends $dara.Model {
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
   * The supported storage engine versions.
   */
  supportedEngineVersions?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersions;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supportedEngineVersions: 'SupportedEngineVersions',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportedEngineVersions: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZoneSupportedEngineVersions,
      zoneId: 'string',
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZones extends $dara.Model {
  availableZone?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZonesAvailableZone },
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

export class DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBType extends $dara.Model {
  /**
   * @remarks
   * The available zones.
   */
  availableZones?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZones;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **normal**: replica set instance
   * *   **sharding**: sharded cluster instance
   * 
   * @example
   * sharding
   */
  dbType?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      dbType: 'DbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBTypeAvailableZones,
      dbType: 'string',
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

export class DescribeAvailableResourceResponseBodySupportedDBTypes extends $dara.Model {
  supportedDBType?: DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBType[];
  static names(): { [key: string]: string } {
    return {
      supportedDBType: 'SupportedDBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedDBType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodySupportedDBTypesSupportedDBType },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDBType)) {
      $dara.Model.validateArray(this.supportedDBType);
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
   * The ID of the request.
   * 
   * @example
   * 344EE51D-8850-4935-B68B-58A8F4DCE3BD
   */
  requestId?: string;
  /**
   * @remarks
   * The supported database types.
   */
  supportedDBTypes?: DescribeAvailableResourceResponseBodySupportedDBTypes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportedDBTypes: 'SupportedDBTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportedDBTypes: DescribeAvailableResourceResponseBodySupportedDBTypes,
    };
  }

  validate() {
    if(this.supportedDBTypes && typeof (this.supportedDBTypes as any).validate === 'function') {
      (this.supportedDBTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

