// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIPv6TranslatorAclListEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the access control policy group entry.
   * 
   * The description must be 2 to 100 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * client IP
   */
  aclEntryComment?: string;
  /**
   * @remarks
   * The ID of the access control policy group entry that contains the IP entry.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6transaclentry-bp1jzyn7ra8pyxehd****
   */
  aclEntryId?: string;
  /**
   * @remarks
   * The ID of the access control policy group that contains the IP entry.
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
   * The region of the access control policy group.
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

