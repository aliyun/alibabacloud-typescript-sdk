// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessControlListAttributeResponseBodyAclEntrysAclEntry extends $dara.Model {
  /**
   * @remarks
   * The entry description.
   * 
   * @example
   * default
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The ACL entry.
   * 
   * @example
   * 192.168.1.0/24
   */
  aclEntryIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryIp: 'AclEntryIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
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

