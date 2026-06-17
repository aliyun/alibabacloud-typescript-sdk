// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountLockStateRequest extends $dara.Model {
  /**
   * @remarks
   * The lock status of the account. Valid values:
   * 
   * - **UnLock**: The account is not locked.
   * 
   * - **Lock**: The account is locked.
   * 
   * This parameter is required.
   * 
   * @example
   * Lock
   */
  accountLockState?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * your_account_name
   */
  accountName?: string;
  /**
   * @remarks
   * The expiration time of the account. The time must be in the \\`YYYY-MM-DDThh:mm:ssZ\\` format.
   * 
   * @example
   * 2026-09-17T10:00:00Z
   */
  accountPasswordValidTime?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view the details of all clusters in a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountLockState: 'AccountLockState',
      accountName: 'AccountName',
      accountPasswordValidTime: 'AccountPasswordValidTime',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountLockState: 'string',
      accountName: 'string',
      accountPasswordValidTime: 'string',
      DBClusterId: 'string',
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

