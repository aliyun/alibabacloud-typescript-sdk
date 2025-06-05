// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket that stores the DataCache. By default, the bucket is named default.
   * 
   * @example
   * default
   */
  bucket?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 5e74729e-ce21-4c3e-9163-cbaf0f02768e
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the DataCache.
   * 
   * @example
   * edc-bp1a7n7uawwwol******
   */
  dataCacheId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The directory in which the virtual host of the DataCache is located.
   * 
   * @example
   * /data/models/
   */
  path?: string;
  /**
   * @remarks
   * The region ID of the DataCache.
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
      bucket: 'Bucket',
      clientToken: 'ClientToken',
      dataCacheId: 'DataCacheId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      clientToken: 'string',
      dataCacheId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
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

