// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResourcesSupportedResource extends $dara.Model {
  max?: number;
  min?: number;
  status?: string;
  statusCategory?: string;
  unit?: string;
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
  supportedResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceSupportedResources;
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
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources;
  regionId?: string;
  status?: string;
  statusCategory?: string;
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
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  /**
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

