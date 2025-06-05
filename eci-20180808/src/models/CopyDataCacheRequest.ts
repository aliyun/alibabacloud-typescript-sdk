// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopyDataCacheRequestTag } from "./CopyDataCacheRequestTag";


export class CopyDataCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket in which the DataCache is stored.
   * 
   * @example
   * default
   */
  bucket?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the DataCache in the source region.
   * 
   * This parameter is required.
   * 
   * @example
   * edc-bp15l4vvys94oo******
   */
  dataCacheId?: string;
  /**
   * @remarks
   * The destination region of the DataCache.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The DataCache name.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The storage path of the data.
   * 
   * @example
   * /bucket-test
   */
  path?: string;
  /**
   * @remarks
   * The source region of the DataCache.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group to which the DataCache belongs.
   * 
   * @example
   * rg-2df3isufhi38****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The number of days for which the DataCache is retained.
   * 
   * @example
   * 7
   */
  retentionDays?: number;
  /**
   * @remarks
   * The tags of the DataCache.
   */
  tag?: CopyDataCacheRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataCacheId: 'DataCacheId',
      destinationRegionId: 'DestinationRegionId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      clientToken: 'string',
      dataCacheId: 'string',
      destinationRegionId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      tag: { 'type': 'array', 'itemType': CopyDataCacheRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

