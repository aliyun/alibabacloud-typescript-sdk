// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the Internet.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the Internet.
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

