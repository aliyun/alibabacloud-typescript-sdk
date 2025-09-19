// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVpcHoneyPotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which you want to create a honeypot.
   * 
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to obtain the VPC ID. The VPC ID is the value of the InstanceId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-p0w5fgkfsl5a6791q****
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

