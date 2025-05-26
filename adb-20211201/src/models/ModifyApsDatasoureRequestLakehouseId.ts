// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsDatasoureRequestLakehouseId extends $dara.Model {
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-******
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vsw-******
   */
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
      vpcId: 'VpcId',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: 'string',
      vpcId: 'string',
      vswitch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

