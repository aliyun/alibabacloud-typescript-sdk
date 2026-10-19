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
   * The custom encryption key of the instance. You can call [DescribeUserEncryptionKeyList](https://help.aliyun.com/document_detail/151729.html) to query the custom keys of the instance.
   * 
   * @example
   * 2axxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The key scenario to query. Valid values:
   * - TDE: Queries transparent data encryption key information.
   * - CloudDisk: Queries cloud disk encryption key information.
   * 
   * @example
   * TDE
   */
  encryptionType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
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
      encryptionType: 'string',
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

