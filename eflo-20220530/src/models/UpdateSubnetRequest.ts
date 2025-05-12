// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The subnet instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  /**
   * @remarks
   * The new name for the subnet instance.
   * 
   * @example
   * subnet-1
   */
  subnetName?: string;
  /**
   * @remarks
   * The ID of the VPD to which the subnet belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-aof7dat1
   */
  vpdId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      subnetName: 'SubnetName',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
      subnetName: 'string',
      vpdId: 'string',
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

