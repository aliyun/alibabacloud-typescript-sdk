// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the data center.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun subnet instance.
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-2avf0itf
   */
  subnetId?: string;
  /**
   * @remarks
   * The ID of the CIDR block to which Lingjun belongs.
   * 
   * @example
   * vpd-cxcmdk1m
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

