// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The retention policy for backup sets when the cluster is deleted. Valid values:
   * 
   * - **ALL**: permanently retains all backup sets.
   * 
   * - **LATEST**: permanently retains the last backup set. The system automatically creates a new backup before the cluster is deleted.
   * 
   * - **NONE**: does not retain any backup sets after the cluster is deleted.
   * 
   * @example
   * NONE
   */
  backupRetentionPolicyOnClusterDeletion?: string;
  /**
   * @remarks
   * The cloud service provider of the instance.
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

