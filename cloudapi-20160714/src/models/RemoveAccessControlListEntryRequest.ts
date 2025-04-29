// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAccessControlListEntryRequest extends $dara.Model {
  /**
   * @example
   * [{\\"entry\\":\\"192.168.1.0/24\\",\\"comment\\":\\"WhiteIp\\"}]
   */
  aclEntrys?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acl-bp12ag0xxcfhq1ll68wp9
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

