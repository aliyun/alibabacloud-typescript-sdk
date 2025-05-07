// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKmsAssociateResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the KMS resource. Only key IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 494c98ce-f2b5-48ab-96ab-36c986b6****
   */
  kmsResourceId?: string;
  /**
   * @remarks
   * The ID of the region to which the KMS resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  kmsResourceRegionId?: string;
  /**
   * @remarks
   * The type of the KMS resource. Only key is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  kmsResourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the KMS resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 164882191396****
   */
  kmsResourceUser?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
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

