// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionRequestNetworkParameters extends $dara.Model {
  /**
   * @remarks
   * *   PublicNetwork: the Internet.
   * *   PrivateNetwork: virtual private cloud (VPC).
   * 
   * >  If you set this parameter to PrivateNetwork, you must also configure VpcId, VswitchId, and SecurityGroupId.
   * 
   * This parameter is required.
   * 
   * @example
   * PublicNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * eb-167adad548759-security_grop/sg-bp1addad26peuh9qh9****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * eb-test/vpc-bp1symadadwnwg****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1iu4x7aeradadown1og8,vsw-bp193sqmadadlaszpeq****
   */
  vswitcheId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitcheId: 'VswitcheId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitcheId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

