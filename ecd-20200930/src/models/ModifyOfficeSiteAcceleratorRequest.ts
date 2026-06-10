// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteAcceleratorRequestAccelerateRegion extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to accelerate.
   * 
   * The number of regions that you can add is limited by the total bandwidth and the instance type of the GA instance. For more information about the number of access regions supported by each instance type, see [Overview of GA instances](t1855472.xdita#).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The peak public bandwidth. Unit: Mbps.
   * 
   * > For the pay-by-bandwidth metering method, the value ranges from 10 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IP protocol version used to access GA instances. Valid values:
   * 
   * - **IPv4** (default)
   * 
   * - **IPv6**
   * 
   * - **DUAL_STACK**: IPv4 and IPv6
   * 
   * > * Only standard pay-as-you-go GA instances support the DUAL_STACK option.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The Internet line type in the acceleration region. Valid values:
   * 
   * - **BGP**: BGP (Multi-ISP) lines.
   * 
   * - **BGP_PRO**: BGP (Multi-ISP) Pro lines.
   * 
   * > * This parameter is required for GA instances that use the pay-by-data-transfer metering method.
   * >
   * > * The supported line types vary based on the acceleration region.
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

export class ModifyOfficeSiteAcceleratorRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the regions to accelerate.
   */
  accelerateRegion?: ModifyOfficeSiteAcceleratorRequestAccelerateRegion[];
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegion: 'AccelerateRegion',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegion: { 'type': 'array', 'itemType': ModifyOfficeSiteAcceleratorRequestAccelerateRegion },
      officeSiteId: 'string',
      regionId: 'string',
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

