// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIPv6TranslatorAclListEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the ACL rule.
   * 
   * It must be 2 to 100 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * client IP
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The ID of the ACL rule to which the IP entry belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6transaclentry-bp1jzyn7ra8pyxehd****
   */
  aclEntryId?: string;
  /**
   * @remarks
   * The ID of the ACL to which the IP entry belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6transacl-bp1b4z3tleyhq1s50****
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the ACL.
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
      aclEntryId: 'AclEntryId',
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
      aclEntryId: 'string',
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

