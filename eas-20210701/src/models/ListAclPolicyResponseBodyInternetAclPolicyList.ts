// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList } from "./ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList";


export class ListAclPolicyResponseBodyInternetAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the Internet.
   */
  aclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList[];
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList },
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

