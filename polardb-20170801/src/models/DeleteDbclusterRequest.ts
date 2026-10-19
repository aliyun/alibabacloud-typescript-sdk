// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The backup data retention policy when the cluster is deleted. Valid values:
   * * **ALL**: Long-term retention (LTR) of all backups.
   * * **LATEST**: Long-term retention (LTR) of the last backup (automatic backup before deletion).
   * * **NONE**: Does not retain any backups when the cluster is deleted.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The cloud service provider to which the instance belongs.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      cloudProvider: 'CloudProvider',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPolicyOnClusterDeletion: 'string',
      cloudProvider: 'string',
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

