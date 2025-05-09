// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpcFirewallConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   */
  vpcFirewallIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallIdList: 'VpcFirewallIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      vpcFirewallIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcFirewallIdList)) {
      $dara.Model.validateArray(this.vpcFirewallIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

