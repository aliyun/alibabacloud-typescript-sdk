// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveIPv6TranslatorAclListEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL entry to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6transaclentry-bp105jrs****
   */
  aclEntryId?: string;
  /**
   * @remarks
   * The ID of the ACL to which the ACL entry belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6transacl-bp1de2****
   */
  aclId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
      aclEntryId: 'AclEntryId',
      aclId: 'AclId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryId: 'string',
      aclId: 'string',
      clientToken: 'string',
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

