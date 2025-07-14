// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition extends $dara.Model {
  /**
   * @remarks
   * The condition name. Valid value:
   * 
   * DiskCategory, which indicates a disk category change.
   * 
   * @example
   * DiskCategory
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditions extends $dara.Model {
  condition?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition[];
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition },
    };
  }

  validate() {
    if(Array.isArray(this.condition)) {
      $dara.Model.validateArray(this.condition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResource extends $dara.Model {
  /**
   * @remarks
   * The conditions.
   */
  conditions?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditions;
  /**
   * @remarks
   * The maximum disk capacity.
   * 
   * This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * 2
   */
  max?: number;
  /**
   * @remarks
   * The minimum disk capacity.
   * 
   * This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The stock state of the resource. Valid values:
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
   * The category of the resource based on stock status. Valid values:
   * 
   * *   WithStock: resources that are in sufficient stock
   * *   ClosedWithStock: resources that are in insufficient stock
   * *   WithoutStock: resources that are out of stock
   * 
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @remarks
   * The unit of the disk capacity.
   * 
   * This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * null
   */
  unit?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ecs.g5.large
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
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
      conditions: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditions,
      max: 'number',
      min: 'number',
      status: 'string',
      statusCategory: 'string',
      unit: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.conditions && typeof (this.conditions as any).validate === 'function') {
      (this.conditions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources extends $dara.Model {
  conditionSupportedResource?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      conditionSupportedResource: 'ConditionSupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionSupportedResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResource },
    };
  }

  validate() {
    if(Array.isArray(this.conditionSupportedResource)) {
      $dara.Model.validateArray(this.conditionSupportedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $dara.Model {
  /**
   * @remarks
   * The maximum disk capacity.
   * 
   * This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * 2
   */
  max?: number;
  /**
   * @remarks
   * The minimum disk capacity.
   * 
   * This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * 1
   */
  min?: number;
  /**
   * @remarks
   * The state of the resource. Valid values:
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
   * The category of the resource based on stock status. Valid values:
   * 
   * *   WithStock: resources that are in sufficient stock
   * *   ClosedWithStock: resources that are in insufficient stock
   * *   WithoutStock: resources that are out of stock
   * 
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @remarks
   * The unit of the disk capacity. This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.
   * 
   * @example
   * null
   */
  unit?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ecs.g5.large
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

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources extends $dara.Model {
  supportedResource?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      supportedResource: 'SupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource },
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

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource extends $dara.Model {
  /**
   * @remarks
   * The resource types that resources can be changed to after the resources meet specified conditions. If the conditions are met, you can change the current resource to a resource in the list.
   */
  conditionSupportedResources?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources;
  /**
   * @remarks
   * The information about the supported resources.
   */
  supportedResources?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   InstanceType
   * *   SystemDisk
   * 
   * @example
   * InstanceType
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditionSupportedResources: 'ConditionSupportedResources',
      supportedResources: 'SupportedResources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionSupportedResources: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResources,
      supportedResources: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources,
      type: 'string',
    };
  }

  validate() {
    if(this.conditionSupportedResources && typeof (this.conditionSupportedResources as any).validate === 'function') {
      (this.conditionSupportedResources as any).validate();
    }
    if(this.supportedResources && typeof (this.supportedResources as any).validate === 'function') {
      (this.supportedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources extends $dara.Model {
  availableResource?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResource },
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

export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone extends $dara.Model {
  /**
   * @remarks
   * The resources that are available in the zone.
   */
  availableResources?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources;
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
   * The state of the resource. Valid values:
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
   * The category of the resource based on stock status. Valid values:
   * 
   * *   WithStock: resources that are in sufficient stock
   * *   ClosedWithStock: resources that are in insufficient stock
   * *   WithoutStock: resources that are out of stock
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
      availableResources: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResources,
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

export class DescribeResourcesModificationResponseBodyAvailableZones extends $dara.Model {
  availableZone?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone },
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

export class DescribeResourcesModificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried zones.
   */
  availableZones?: DescribeResourcesModificationResponseBodyAvailableZones;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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
      availableZones: DescribeResourcesModificationResponseBodyAvailableZones,
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

