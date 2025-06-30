// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindZoneVpcRequestVpcs extends $dara.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The VPC ID. If the zone is already associated with VPCs and you do not specify this parameter, the associated VPCs are disassociated from the zone.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   **STANDARD**: standard VPC
   * *   **EDS**: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

