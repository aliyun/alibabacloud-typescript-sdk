// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client. If you delete a backup snapshot for Elastic Compute Service (ECS) instances, you must specify one of the ClientId and **InstanceId** parameters.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * Deprected.
   * 
   * @deprecated
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the ECS instance. If you delete a backup snapshot for ECS instances, you must specify one of the InstanceId and **ClientId** parameters.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * s-*********************
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the backup source. Valid values:
   * 
   * *   **ECS_FILE**: backup snapshots for ECS files
   * *   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
   * *   **NAS**: backup snapshots for Apsara File Storage NAS (NAS) file systems
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The token that you want to delete.
   * 
   * @example
   * 02WJDOE7
   */
  token?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      force: 'Force',
      instanceId: 'InstanceId',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      token: 'Token',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      force: 'boolean',
      instanceId: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      token: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

