// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResourcesSupportedResources extends $dara.Model {
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
   * mysql.x4.4xlarge.7cm
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      statusCategory: 'StatusCategory',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      statusCategory: 'string',
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

export class DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResources extends $dara.Model {
  supportedResources?: DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResourcesSupportedResources[];
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
      supportedResources: { 'type': 'array', 'itemType': DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResourcesSupportedResources },
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

export class DescribeRCResourcesModificationResponseBodyAvailableZones extends $dara.Model {
  availableResources?: DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResources[];
  /**
   * @example
   * cn-hangzhou
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
      availableResources: { 'type': 'array', 'itemType': DescribeRCResourcesModificationResponseBodyAvailableZonesAvailableResources },
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

export class DescribeRCResourcesModificationResponseBody extends $dara.Model {
  availableZones?: DescribeRCResourcesModificationResponseBodyAvailableZones[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
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
      availableZones: { 'type': 'array', 'itemType': DescribeRCResourcesModificationResponseBodyAvailableZones },
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

