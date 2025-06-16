// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIPv6TranslatorAclListEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the ACL entry.
   * 
   * It must be 2 to 100 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * clientIP1
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The IPv6 address or IPv6 CIDR block that you want to add to the ACL entry, for example, 12XX:0:0:XXXX::0102 or 12XX:0:0:XXXX::/60.
   * 
   * This parameter is required.
   * 
   * @example
   * 12XX:0:0:XXXX::0102
   */
  aclEntryIp?: string;
  /**
   * @remarks
   * The ID of the ACL to which you want to add the IP entry.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6transacl-bp1dcdvfe2****
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aclEntryComment: 'AclEntryComment',
      aclEntryIp: 'AclEntryIp',
      aclId: 'AclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryComment: 'string',
      aclEntryIp: 'string',
      aclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

