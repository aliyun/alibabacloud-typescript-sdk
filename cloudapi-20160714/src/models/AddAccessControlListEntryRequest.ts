// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAccessControlListEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ACL settings.
   * 
   * *   entry: the entries that you want to add to the ACL. You can add CIDR blocks. Separate multiple CIDR blocks with commas (,).
   * *   comment: the description of the ACL.
   * 
   * > You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
   * 
   * @example
   * [{\\"entry\\": \\"192.168.1.0/24\\", \\"comment\\": \\"test\\"}]
   */
  aclEntrys?: string;
  /**
   * @remarks
   * The ID of the access control list (ACL).
   * 
   * This parameter is required.
   * 
   * @example
   * acl-bp1ohqkonqybecf4llbrc
   */
  aclId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntrys: 'AclEntrys',
      aclId: 'AclId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntrys: 'string',
      aclId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

