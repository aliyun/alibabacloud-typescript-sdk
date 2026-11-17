// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOfficeSiteAcceleratorRequestAccelerateRegion extends $dara.Model {
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-1
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The bandwidth allocated to the acceleration region. Unit: Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IP address protocol used to access the Global Accelerator (GA) service.
   * 
   * > The `DUAL_STACK` type is supported only by standard Alibaba Cloud Global Accelerator (GA) instances that use the pay-as-you-go billing method.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The Internet line type of the acceleration region.
   * 
   * > - This parameter is required for Alibaba Cloud Global Accelerator (GA) instances that use the **pay-by-traffic** Billable methods.
   * > - The supported Internet line types vary based on the acceleration region.
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
   * The list of acceleration regions.
   * 
   * This parameter is required.
   */
  accelerateRegion?: CreateOfficeSiteAcceleratorRequestAccelerateRegion[];
  /**
   * @remarks
   * The name of the Alibaba Cloud Global Accelerator (GA) instance.
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

