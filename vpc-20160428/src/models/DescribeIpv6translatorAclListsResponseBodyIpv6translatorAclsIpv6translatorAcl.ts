// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorAclListsResponseBodyIpv6TranslatorAclsIPv6TranslatorAcl extends $dara.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * ipv6transacl-bp1de2****
   */
  aclId?: string;
  /**
   * @remarks
   * The ACL name.
   * 
   * @example
   * acl1
   */
  aclName?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclName: 'AclName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

