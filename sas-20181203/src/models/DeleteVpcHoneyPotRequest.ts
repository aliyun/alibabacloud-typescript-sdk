// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpcHoneyPotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) on which the honeypot is deployed.
   * 
   * > You can call the [DescribeVpcHoneyPotList](~~DescribeVpcHoneyPotList~~) operation to query the IDs of VPCs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-d7o009q63fqy21r8u****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

