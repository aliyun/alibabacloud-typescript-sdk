// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList } from "./ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList";


export class ListAclPolicyResponseBodyIntranetVpcAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the internal network.
   */
  aclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList[];
  /**
   * @remarks
   * The VPC ID. For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclPolicyList)) {
      $dara.Model.validateArray(this.aclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

