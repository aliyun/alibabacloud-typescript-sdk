// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Lingjun subnet ID
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  /**
   * @remarks
   * Lingjun CIDR block ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-iv2zm1qf
   */
  vpdId?: string;
  /**
   * @remarks
   * Zone
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
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

