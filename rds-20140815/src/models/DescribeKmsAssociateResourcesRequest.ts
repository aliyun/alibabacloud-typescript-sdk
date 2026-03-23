// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKmsAssociateResourcesRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  kmsResourceId?: string;
  kmsResourceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  kmsResourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  kmsResourceUser?: string;
  ownerAccount?: string;
  ownerId?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      kmsResourceId: 'KmsResourceId',
      kmsResourceRegionId: 'KmsResourceRegionId',
      kmsResourceType: 'KmsResourceType',
      kmsResourceUser: 'KmsResourceUser',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      kmsResourceId: 'string',
      kmsResourceRegionId: 'string',
      kmsResourceType: 'string',
      kmsResourceUser: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

