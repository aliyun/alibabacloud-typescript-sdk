// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseReadWriteSplittingConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the primary instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the read/write splitting endpoint to be released. Valid values: ReadOnlyAddress (unified read-only endpoint) and BackupAddress (read-only endpoint of the secondary instance).
   * 
   * @example
   * ReadOnlyAddress
   */
  RWAddressType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      RWAddressType: 'RWAddressType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      RWAddressType: 'string',
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

