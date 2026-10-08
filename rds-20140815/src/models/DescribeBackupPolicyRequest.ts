// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. Valid values:
   * * **DataBackupPolicy**: data backup
   * * **LogBackupPolicy**: log backup
   * 
   * @example
   * DataBackupPolicy
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * The backup compression method. Valid values:
   * * **0**: no compression
   * * **1**: zlib compression
   * * **2**: parallel zlib compression
   * * **4**: QuickLZ compression with fast restoration for individual databases and tables enabled
   * * **8**: QuickLZ compression without fast restoration for individual databases and tables supported
   * 
   * @example
   * 1
   */
  compressType?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
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
   * The archived backup data retention policy for deleted **MySQL** instances. Valid values:
   * 
   * * **None**: No archived backups are retained.
   * * **Lastest**: Only the last archived backup is retained.
   * * **All**: All archived backups are retained.
   * 
   * @example
   * Lastest
   */
  releasedKeepPolicy?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupPolicyMode: 'BackupPolicyMode',
      compressType: 'CompressType',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyMode: 'string',
      compressType: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      releasedKeepPolicy: 'string',
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

