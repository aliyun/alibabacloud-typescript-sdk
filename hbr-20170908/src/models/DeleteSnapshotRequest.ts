// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. When deleting a backup snapshot of ECS File Backup Essential Edition, you must specify either this parameter or **InstanceId**.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  force?: boolean;
  /**
   * @remarks
   * The ECS instance ID. When deleting a backup snapshot of ECS File Backup Essential Edition, you must specify either this parameter or **ClientId**.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * The backup snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-*********************
   */
  snapshotId?: string;
  /**
   * @remarks
   * The backup source type. Valid values:
   * 
   * * **ECS_FILE**: backup snapshot of ECS File Backup Essential Edition.
   * * **OSS**: backup snapshot of Alibaba Cloud OSS.
   * * **NAS**: backup snapshot of Alibaba Cloud NAS.
   * * **UDM_ECS**: backup snapshot of an entire ECS instance.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The token for the deletion.
   * 
   * @example
   * 02WJDOE7
   */
  token?: string;
  /**
   * @remarks
   * The backup vault ID.
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

