// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelist of IP address ranges that are allowed to access the VPC. This parameter is required. If this parameter is not specified, an InvalidParameter error is returned, indicating that AclPolicyList must be set.
   */
  aclPolicyListShrink?: string;
  /**
   * @remarks
   * The ID of the VPC. For information about how to obtain the VPC ID, see DescribeVpcs.
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

