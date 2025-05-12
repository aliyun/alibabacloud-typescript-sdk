// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   */
  aclPolicyListShrink?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyListShrink: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyListShrink: 'string',
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

