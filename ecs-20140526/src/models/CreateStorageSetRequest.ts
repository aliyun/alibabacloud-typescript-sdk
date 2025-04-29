// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageSetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the storage set. The description must be 2 to 256 characters in length and cannot start with [http:// or https://](http://https://。).
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of partitions supported by the storage set. The value must be greater than or equal to 2 but cannot exceed the quota that you obtained by calling the [DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html) operation.
   * 
   * Default value: 2.
   * 
   * @example
   * 10
   */
  maxPartitionNumber?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the storage set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the storage set. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter and cannot start with [http:// or https:// ](http://https://。、（:）、（_）（-）。).
   * 
   * @example
   * testStorageSetName
   */
  storageSetName?: string;
  /**
   * @remarks
   * The zone ID of the storage set. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      maxPartitionNumber: 'MaxPartitionNumber',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageSetName: 'StorageSetName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      maxPartitionNumber: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageSetName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

