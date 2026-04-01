// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources extends $dara.Model {
  /**
   * @example
   * 2048
   */
  max?: number;
  /**
   * @example
   * 20
   */
  min?: number;
  /**
   * @example
   * Available
   */
  quotaStatus?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
   * @example
   * GiB
   */
  unit?: string;
  /**
   * @example
   * mysql.x4.4xlarge.7cm
   */
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
  /**
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
  /**
   * @example
   * 0041D94C-FB92-4C49-B115-259DA1C*****
   */
  regionId?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * WithStock
   */
  statusCategory?: string;
  /**
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

