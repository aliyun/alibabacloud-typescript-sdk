// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIPv6TranslatorAclListAttributesResponseBodyAclEntriesAclEntry extends $dara.Model {
  /**
   * @remarks
   * The remarks of the ACL entry.
   * 
   * @example
   * client IP
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The ID of the ACL entry.
   * 
   * @example
   * ipv6transaclentry-bp105jrs****
   */
  aclEntryId?: string;
  /**
   * @remarks
   * The IP address specified in the ACL entry.
   * 
   * @example
   * 12ab:0:0:XXXX::0102/128
   */
  aclEntryIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryId: 'AclEntryId',
      aclEntryIp: 'AclEntryIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryId: 'string',
      aclEntryIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

