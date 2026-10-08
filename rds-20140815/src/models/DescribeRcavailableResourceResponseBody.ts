// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources extends $dara.Model {
  max?: number;
  min?: number;
  quotaStatus?: string;
  status?: string;
  statusCategory?: string;
  unit?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      quotaStatus: 'QuotaStatus',
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
      quotaStatus: 'string',
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

export class DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources extends $dara.Model {
  supportedResources?: DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      supportedResources: 'SupportedResources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResources: { 'type': 'array', 'itemType': DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedResources)) {
      $dara.Model.validateArray(this.supportedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCAvailableResourceResponseBodyAvailableZones extends $dara.Model {
  availableResources?: DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources[];
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
      availableResources: { 'type': 'array', 'itemType': DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources },
      regionId: 'string',
      status: 'string',
      statusCategory: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableResources)) {
      $dara.Model.validateArray(this.availableResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCAvailableResourceResponseBody extends $dara.Model {
  availableZones?: DescribeRCAvailableResourceResponseBodyAvailableZones[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeRCAvailableResourceResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

