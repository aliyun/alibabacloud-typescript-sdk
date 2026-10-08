// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceHAConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk543****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The High-availability Mode. Valid values:
   * 
   * - RPO: Data consistency is preferred. The instance ensures data reliability to the greatest extent, which minimizes the amount of data loss. Use RPO mode if you have high requirements for data consistency.
   * - RTO: Instance availability is preferred. The instance recovers services as soon as possible, which maximizes the active time. Use RTO mode if you have high requirements for database uptime.
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
   * The data replication method. Valid values:
   * 
   * - Semi-sync: semi-synchronous replication.
   * - Sync: synchronous replication.
   * - Async: asynchronous replication.
   * 
   * <props="china">- Mgr: MySQL Group Replication.
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

