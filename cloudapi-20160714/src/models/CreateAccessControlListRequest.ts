// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessControlListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the ACL. The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (/), and underscores (_). The name must be unique within the region.
   * 
   * This parameter is required.
   * 
   * @example
   * testAcl
   */
  aclName?: string;
  /**
   * @remarks
   * The IP protocol version of the ACL. Valid values:
   * 
   * *   **IPv4**
   * *   **IPv6**
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclName: 'string',
      addressIPVersion: 'string',
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

