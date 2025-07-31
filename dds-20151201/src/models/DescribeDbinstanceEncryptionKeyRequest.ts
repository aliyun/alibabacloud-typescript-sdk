// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEncryptionKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2235****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The custom key for the instance. You can call the [DescribeUserEncryptionKeyList](https://help.aliyun.com/document_detail/151729.html) operation to query the list of custom keys for an ApsaraDB for MongoDB instance.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      encryptionKey: 'EncryptionKey',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      encryptionKey: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

