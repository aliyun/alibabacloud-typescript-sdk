// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallAclGroupListResponseBodyAclGroupList } from "./DescribeVpcFirewallAclGroupListResponseBodyAclGroupList";


export class DescribeVpcFirewallAclGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the policy groups.
   */
  aclGroupList?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the policy groups that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclGroupList: 'AclGroupList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclGroupList: { 'type': 'array', 'itemType': DescribeVpcFirewallAclGroupListResponseBodyAclGroupList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aclGroupList)) {
      $dara.Model.validateArray(this.aclGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

