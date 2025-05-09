// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallIPSWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the list. Valid values:
   * 
   * *   **1**: user-defined
   * *   **2**: address book
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  listType?: number;
  /**
   * @remarks
   * The entry in the list.
   * 
   * @example
   * 10.130.0.0/20,10.130.17.11/32
   */
  listValue?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 1415189284827022
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-d7b8ce273791475b9b0b
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * *   **1**: destination
   * *   **2**: source
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      listType: 'ListType',
      listValue: 'ListValue',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      listType: 'number',
      listValue: 'string',
      memberUid: 'number',
      vpcFirewallId: 'string',
      whiteType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

