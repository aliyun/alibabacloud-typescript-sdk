// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOfficeSiteAcceleratorRequestAccelerateRegion extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to include in global acceleration.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The bandwidth that you want to allocate to the acceleration region. Unit: Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IP version used to connect to the GA instance.
   * 
   * >  Only pay-as-you-go standard GA instances support `DUAL_STACK`.
   * 
   * Valid values:
   * 
   * *   DUAL_STACK: IPv4 and IPv6.
   * *   IPv6: IPv6.
   * *   IPv4 (default): IPv4.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The line type of the elastic IP address (EIP) in the acceleration region.
   * 
   * > 
   * 
   * *   This parameter is required only if the bandwidth metering method of the GA instance is **pay-by-data transfer**.
   * 
   * *   Different acceleration regions support different line types of EIPs.
   * 
   * Valid values:
   * 
   * *   BGP: BGP (Multi-ISP) lines.
   * *   BGP_PRO: BGP (Multi-ISP) Pro.
   * 
   * This parameter is required.
   * 
   * @example
   * BGP
   */
  ispType?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipVersion: 'IpVersion',
      ispType: 'IspType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipVersion: 'string',
      ispType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeSiteAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * The regions to include in global acceleration.
   * 
   * This parameter is required.
   */
  accelerateRegion?: CreateOfficeSiteAcceleratorRequestAccelerateRegion[];
  /**
   * @remarks
   * The name of the GA instance.
   * 
   * @example
   * testGA
   */
  name?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+dir-259382****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-3mtuc28rx95lx****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegion: 'AccelerateRegion',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegion: { 'type': 'array', 'itemType': CreateOfficeSiteAcceleratorRequestAccelerateRegion },
      name: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accelerateRegion)) {
      $dara.Model.validateArray(this.accelerateRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

