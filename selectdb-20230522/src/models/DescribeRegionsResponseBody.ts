// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionModelListZones extends $dara.Model {
  /**
   * @remarks
   * The zone description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the VPC is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * test
   */
  label?: string;
  /**
   * @remarks
   * The zone name.
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * cn-beijing-h-aliyun
   */
  subDomain?: string;
  /**
   * @remarks
   * Indicates whether the VPC is enabled.
   * 
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the virtual private cloud (VPC) is available.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      disabled: 'Disabled',
      label: 'Label',
      name: 'Name',
      regionId: 'RegionId',
      subDomain: 'SubDomain',
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disabled: 'boolean',
      label: 'string',
      name: 'string',
      regionId: 'string',
      subDomain: 'string',
      vpcEnabled: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionModelList extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * An array of zones.
   */
  zones?: DescribeRegionsResponseBodyRegionModelListZones[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModelListZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of regions.
   */
  regionModelList?: DescribeRegionsResponseBodyRegionModelList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionModelList: 'RegionModelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionModelList: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionModelList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionModelList)) {
      $dara.Model.validateArray(this.regionModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

