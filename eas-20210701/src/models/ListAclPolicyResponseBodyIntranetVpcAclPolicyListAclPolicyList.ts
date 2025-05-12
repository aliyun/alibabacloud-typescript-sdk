// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * Test Entry
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * 192.168.XX.XX/24
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

