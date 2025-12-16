// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup vault. The description must be 0 to 255 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
   * 
   * *   **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
   * *   **KMS**: The source data is encrypted by using Key Management Service (KMS).
   * 
   * @example
   * KMS
   */
  encryptType?: string;
  /**
   * @remarks
   * The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
   * 
   * @example
   * alias/yzs-hhht
   */
  kmsKeyId?: string;
  replication?: boolean;
  /**
   * @remarks
   * The name of the backup vault. The name must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * backupvaultname
   */
  vaultName?: string;
  /**
   * @remarks
   * The ID of the region where the backup vault resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
  /**
   * @remarks
   * The storage type of the backup vault.
   * 
   * *   **STANDARD**: standard storage.
   * *   **ARCHIVE**: This parameter is deprecated.
   * *   **COLD_ARCHIVE**: This parameter is deprecated.
   * *   **IA**: This parameter is deprecated.
   * 
   * @example
   * STANDARD
   */
  vaultStorageClass?: string;
  /**
   * @remarks
   * The type of the backup vault. Valid values:
   * 
   * *   **STANDARD**: standard backup vault
   * *   **OTS_BACKUP**: backup vault for Tablestore
   * 
   * @example
   * STANDARD
   */
  vaultType?: string;
  /**
   * @remarks
   * Specifies whether to enable the immutable backup feature.
   * 
   * @example
   * false
   */
  wormEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      kmsKeyId: 'KmsKeyId',
      replication: 'Replication',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStorageClass: 'VaultStorageClass',
      vaultType: 'VaultType',
      wormEnabled: 'WormEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
      kmsKeyId: 'string',
      replication: 'boolean',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStorageClass: 'string',
      vaultType: 'string',
      wormEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

