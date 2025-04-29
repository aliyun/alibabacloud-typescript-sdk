// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListsResponseBodyAclsAcl extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * acl-3nsohdozz0ru8fi5onwz1
   */
  aclId?: string;
  /**
   * @remarks
   * The name of the access control policy.
   * 
   * @example
   * testAcl
   */
  aclName?: string;
  /**
   * @remarks
   * 访问控制策略组的IP版本。
   * - **IPv4**。
   * - **IPv6**。
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
      addressIPVersion: 'AddressIPVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
      addressIPVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

