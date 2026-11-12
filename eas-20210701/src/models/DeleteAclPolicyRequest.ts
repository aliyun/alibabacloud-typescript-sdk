// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAclPolicyRequestAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment for the IP address range that is allowed to access the VPC.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP address range that is allowed to access the VPC.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelist of IP address ranges that are allowed to access the VPC. This parameter is required. If this parameter is not specified, an InvalidParameter error is returned, indicating that AclPolicyList must be set.
   */
  aclPolicyList?: DeleteAclPolicyRequestAclPolicyList[];
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
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': DeleteAclPolicyRequestAclPolicyList },
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

