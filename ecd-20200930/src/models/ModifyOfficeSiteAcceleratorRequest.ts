// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfficeSiteAcceleratorRequestAccelerateRegion extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
  bandwidth?: number;
  /**
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
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
  accelerateRegion?: ModifyOfficeSiteAcceleratorRequestAccelerateRegion[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
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

