// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountLockStateRequest extends $dara.Model {
  /**
   * @remarks
   * The lock status of the account. Valid values:
   * 
   * - **UnLock**: Unlocked.
   * - **Lock**: Locked.
   * 
   * This parameter is required.
   * 
   * @example
   * Lock
   */
  accountLockState?: string;
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * your_account_name
   */
  accountName?: string;
  /**
   * @remarks
   * The expiration time of the account, in the YYYY-MM-DDThh:mm:ssZ format. The account expires at the specified time.
   * 
   * @example
   * 2026-09-17T10:00:00Z
   */
  accountPasswordValidTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view all clusters in the target region, including their cluster IDs.
   * 
   * > This operation is supported only for PostgreSQL clusters (DBType=PostgreSQL). Before calling this operation, you can query the DBType and DBClusterStatus by using DescribeDBClusters to confirm that the cluster is in the Running state.
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

