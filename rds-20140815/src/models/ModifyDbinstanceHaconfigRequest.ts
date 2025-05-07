// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceHAConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk543xxxxx
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The HA mode of the instance.
   * 
   * *   RPO: Data consistency is preferred. The instance ensures data reliability to minimize data losses. If you have high requirements on data consistency, select this mode.
   * *   RTO: Service availability is preferred. The instance restores the database service at the earliest opportunity to ensure service availability. If you have high requirements for service availability, select this mode.
   * 
   * This parameter is required.
   * 
   * @example
   * RPO
   */
  HAMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The data replication mode of the instance. For more information, see [Data replication mode](https://help.aliyun.com/document_detail/96055.html).
   * 
   * *   Semi-sync: the semi-synchronous mode.
   * *   Sync: the synchronous mode.
   * *   gAsyncg: the asynchronous mode.
   * *   Mgr: the MySQL group replication (MGR) mode. This mode is available only for the China site (aliyun.com).
   * 
   * > This parameter is not supported for instances that run SQL Server 2017 on RDS Cluster Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * Sync
   */
  syncMode?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      HAMode: 'HAMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      syncMode: 'SyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      HAMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      syncMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

