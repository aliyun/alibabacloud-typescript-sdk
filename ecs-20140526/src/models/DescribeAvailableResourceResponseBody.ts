// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $dara.Model {
  /**
   * @remarks
   * The maximum disk capacity.
   * 
   * This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.
   * 
   * @example
   * 2
   */
  max?: number;
  /**
   * @remarks
   * The minimum disk capacity.
   * 
   * This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * *   Available
   * *   SoldOut
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The resource category based on the stock level. Valid values:
   * 
   * *   WithStock: Resources are in sufficient stock.
   * *   ClosedWithStock: Resources are in insufficient stock. We recommend that you use other resources that are in sufficient stock.
   * *   WithoutStock: Resources are out of stock and will be replenished. We recommend that you use other resources that are in sufficient stock.
   * *   ClosedWithoutStock: Resources are out of stock and will not be replenished. We recommend that you use other resources that are in sufficient stock.
   * 
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @remarks
   * The unit of the disk capacity.
   * 
   * This parameter takes effect only if DestinationResource is set to SystemDisk or DataDisk.
   * 
   * @example
   * null
   */
  unit?: string;
  /**
   * @remarks
   * The resource.
   * 
   * @example
   * ecs.d1ne.xlarge
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      status: 'Status',
      statusCategory: 'StatusCategory',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      status: 'string',
      statusCategory: 'string',
      unit: 'string',
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

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources extends $dara.Model {
  supportedResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      supportedResource: 'SupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResource)) {
      $dara.Model.validateArray(this.supportedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $dara.Model {
  /**
   * @remarks
   * The information about the resources.
   */
  supportedResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   Zone: zone
   * *   IoOptimized: I/O optimized resource
   * *   InstanceType: instance type
   * *   SystemDisk: system disk
   * *   DataDisk: data disk
   * *   Network: network type
   * *   ddh: dedicated host
   * 
   * @example
   * InstanceType
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      supportedResources: 'SupportedResources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources,
      type: 'string',
    };
  }

  validate() {
    if(this.supportedResources && typeof (this.supportedResources as any).validate === 'function') {
      (this.supportedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources extends $dara.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource },
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

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $dara.Model {
  /**
   * @remarks
   * The resources that are available in the zone.
   */
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of resources in the zone. Valid values:
   * 
   * *   Available
   * *   SoldOut
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The resource category based on the stock level in the zone. Valid values:
   * 
   * *   WithStock: Resources are in sufficient stock.
   * *   ClosedWithStock: Resources are in insufficient stock. We recommend that you use other resources that are in sufficient stock.
   * *   WithoutStock: Resources are out of stock and will be replenished. We recommend that you use other resources that are in sufficient stock.
   * *   ClosedWithoutStock: Resources are out of stock and will not be replenished. We recommend that you use other resources that are in sufficient stock.
   * 
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      regionId: 'RegionId',
      status: 'Status',
      statusCategory: 'StatusCategory',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources,
      regionId: 'string',
      status: 'string',
      statusCategory: 'string',
      zoneId: 'string',
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
   * Details about the zones in which resources are available.
   */
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0041D94C-FB92-4C49-B115-259DA1C*****
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

