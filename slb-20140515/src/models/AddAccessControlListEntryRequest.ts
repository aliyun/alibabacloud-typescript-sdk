// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAccessControlListEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the network ACL. Valid values:
   * 
   * *   **entry**: the IP entries that you want to add to the network ACL. You can add CIDR blocks. Separate multiple CIDR blocks with commas (,).
   * *   **comment**: the comment on the network ACL.
   * 
   * > You can add at most 50 IP entries to a network ACL in each call. If the IP entry that you want to add to a network ACL already exists, the IP entry is not added. The IP entries that you add must be CIDR blocks.
   * 
   * @example
   * [{"entry":"``10.0.**.**``/24","comment":"privaterule1"},{"entry":"``192.168.**.**``/16","comment":"privaterule2"}]
   */
  aclEntrys?: string;
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * acl-bp1l0kk4gxce43kze*****
   */
  aclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network ACL.
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
      aclEntrys: 'AclEntrys',
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
      aclEntrys: 'string',
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

