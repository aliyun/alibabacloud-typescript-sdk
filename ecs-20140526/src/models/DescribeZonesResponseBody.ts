// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes extends $dara.Model {
  dedicatedHostType?: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostType)) {
      $dara.Model.validateArray(this.dedicatedHostType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableDiskCategories extends $dara.Model {
  diskCategories?: string[];
  static names(): { [key: string]: string } {
    return {
      diskCategories: 'DiskCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.diskCategories)) {
      $dara.Model.validateArray(this.diskCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableInstanceTypes extends $dara.Model {
  instanceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourceCreation extends $dara.Model {
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories extends $dara.Model {
  supportedDataDiskCategory?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedDataDiskCategory: 'supportedDataDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedDataDiskCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDataDiskCategory)) {
      $dara.Model.validateArray(this.supportedDataDiskCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations extends $dara.Model {
  supportedInstanceGeneration?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceGeneration: 'supportedInstanceGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceGeneration: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceGeneration)) {
      $dara.Model.validateArray(this.supportedInstanceGeneration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies extends $dara.Model {
  supportedInstanceTypeFamily?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypeFamily: 'supportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceTypeFamily)) {
      $dara.Model.validateArray(this.supportedInstanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes extends $dara.Model {
  supportedInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceType: 'supportedInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceType)) {
      $dara.Model.validateArray(this.supportedInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes extends $dara.Model {
  supportedNetworkCategory?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedNetworkCategory: 'supportedNetworkCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNetworkCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedNetworkCategory)) {
      $dara.Model.validateArray(this.supportedNetworkCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories extends $dara.Model {
  supportedSystemDiskCategory?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedSystemDiskCategory: 'supportedSystemDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSystemDiskCategory: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedSystemDiskCategory)) {
      $dara.Model.validateArray(this.supportedSystemDiskCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo extends $dara.Model {
  /**
   * @remarks
   * The categories of data disks that can be created.
   */
  dataDiskCategories?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories;
  /**
   * @remarks
   * The supported generations of instance families.
   */
  instanceGenerations?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations;
  /**
   * @remarks
   * The supported instance families.
   */
  instanceTypeFamilies?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies;
  /**
   * @remarks
   * The supported instance types.
   */
  instanceTypes?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes;
  /**
   * @remarks
   * Indicates whether the instance is I/O optimized.
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * The supported network types.
   */
  networkTypes?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes;
  /**
   * @remarks
   * The categories of system disks that can be created.
   */
  systemDiskCategories?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategories: 'DataDiskCategories',
      instanceGenerations: 'InstanceGenerations',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      instanceTypes: 'InstanceTypes',
      ioOptimized: 'IoOptimized',
      networkTypes: 'NetworkTypes',
      systemDiskCategories: 'SystemDiskCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategories: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoDataDiskCategories,
      instanceGenerations: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations,
      instanceTypeFamilies: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies,
      instanceTypes: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes,
      ioOptimized: 'boolean',
      networkTypes: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoNetworkTypes,
      systemDiskCategories: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoSystemDiskCategories,
    };
  }

  validate() {
    if(this.dataDiskCategories && typeof (this.dataDiskCategories as any).validate === 'function') {
      (this.dataDiskCategories as any).validate();
    }
    if(this.instanceGenerations && typeof (this.instanceGenerations as any).validate === 'function') {
      (this.instanceGenerations as any).validate();
    }
    if(this.instanceTypeFamilies && typeof (this.instanceTypeFamilies as any).validate === 'function') {
      (this.instanceTypeFamilies as any).validate();
    }
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    if(this.networkTypes && typeof (this.networkTypes as any).validate === 'function') {
      (this.networkTypes as any).validate();
    }
    if(this.systemDiskCategories && typeof (this.systemDiskCategories as any).validate === 'function') {
      (this.systemDiskCategories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableResources extends $dara.Model {
  resourcesInfo?: DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcesInfo: 'ResourcesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcesInfo: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resourcesInfo)) {
      $dara.Model.validateArray(this.resourcesInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories extends $dara.Model {
  volumeCategories?: string[];
  static names(): { [key: string]: string } {
    return {
      volumeCategories: 'VolumeCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeCategories: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.volumeCategories)) {
      $dara.Model.validateArray(this.volumeCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations extends $dara.Model {
  dedicatedHostGeneration?: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGeneration: 'DedicatedHostGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGeneration: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostGeneration)) {
      $dara.Model.validateArray(this.dedicatedHostGeneration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * The supported dedicated host types.
   */
  availableDedicatedHostTypes?: DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes;
  /**
   * @remarks
   * The categories of cloud disks that can be created. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_ssd: standard SSD
   * *   cloud_efficiency: ultra disk
   * *   cloud_essd: ESSD
   */
  availableDiskCategories?: DescribeZonesResponseBodyZonesZoneAvailableDiskCategories;
  /**
   * @remarks
   * The supported instance types.
   */
  availableInstanceTypes?: DescribeZonesResponseBodyZonesZoneAvailableInstanceTypes;
  /**
   * @remarks
   * The types of resources that can be created. Valid values:
   * 
   * *   VSwitch: vSwitch
   * *   IoOptimized: I/O optimized instance
   * *   Instance: instance
   * *   DedicatedHost: dedicated host
   * *   disk: cloud disk
   */
  availableResourceCreation?: DescribeZonesResponseBodyZonesZoneAvailableResourceCreation;
  /**
   * @remarks
   * Details about the resources that can be created in the zone.
   */
  availableResources?: DescribeZonesResponseBodyZonesZoneAvailableResources;
  /**
   * @remarks
   * The supported Shared Block Storage device categories.
   */
  availableVolumeCategories?: DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories;
  /**
   * @remarks
   * The supported generations of dedicated hosts.
   */
  dedicatedHostGenerations?: DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations;
  /**
   * @remarks
   * The name of the zone in the local language.
   * 
   * @example
   * Hangzhou Zone G
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  /**
   * @remarks
   * The type of the zone. Valid values:
   * 
   * *   AvailabilityZone: zone for the Alibaba Cloud public cloud
   * *   CloudBoxZone: zone for CloudBox
   * 
   * @example
   * AvailabilityZone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      availableDedicatedHostTypes: 'AvailableDedicatedHostTypes',
      availableDiskCategories: 'AvailableDiskCategories',
      availableInstanceTypes: 'AvailableInstanceTypes',
      availableResourceCreation: 'AvailableResourceCreation',
      availableResources: 'AvailableResources',
      availableVolumeCategories: 'AvailableVolumeCategories',
      dedicatedHostGenerations: 'DedicatedHostGenerations',
      localName: 'LocalName',
      zoneId: 'ZoneId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDedicatedHostTypes: DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes,
      availableDiskCategories: DescribeZonesResponseBodyZonesZoneAvailableDiskCategories,
      availableInstanceTypes: DescribeZonesResponseBodyZonesZoneAvailableInstanceTypes,
      availableResourceCreation: DescribeZonesResponseBodyZonesZoneAvailableResourceCreation,
      availableResources: DescribeZonesResponseBodyZonesZoneAvailableResources,
      availableVolumeCategories: DescribeZonesResponseBodyZonesZoneAvailableVolumeCategories,
      dedicatedHostGenerations: DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations,
      localName: 'string',
      zoneId: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(this.availableDedicatedHostTypes && typeof (this.availableDedicatedHostTypes as any).validate === 'function') {
      (this.availableDedicatedHostTypes as any).validate();
    }
    if(this.availableDiskCategories && typeof (this.availableDiskCategories as any).validate === 'function') {
      (this.availableDiskCategories as any).validate();
    }
    if(this.availableInstanceTypes && typeof (this.availableInstanceTypes as any).validate === 'function') {
      (this.availableInstanceTypes as any).validate();
    }
    if(this.availableResourceCreation && typeof (this.availableResourceCreation as any).validate === 'function') {
      (this.availableResourceCreation as any).validate();
    }
    if(this.availableResources && typeof (this.availableResources as any).validate === 'function') {
      (this.availableResources as any).validate();
    }
    if(this.availableVolumeCategories && typeof (this.availableVolumeCategories as any).validate === 'function') {
      (this.availableVolumeCategories as any).validate();
    }
    if(this.dedicatedHostGenerations && typeof (this.dedicatedHostGenerations as any).validate === 'function') {
      (this.dedicatedHostGenerations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $dara.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the zones and their supported resources.
   */
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

