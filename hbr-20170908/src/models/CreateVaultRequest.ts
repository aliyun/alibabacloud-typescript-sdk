// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVaultRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the backup vault. The description can be 0 to 255 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The encryption type of the source data. This parameter is valid only if you set VaultType to STANDARD or OTS_BACKUP. Valid values:
   * 
   * - **HBR_PRIVATE**: The backup vault is encrypted using the built-in encryption method of Cloud Backup.
   * 
   * - **KMS**: The backup vault is encrypted using a customer master key (CMK) from Key Management Service (KMS).
   * 
   * @example
   * KMS
   */
  encryptType?: string;
  /**
   * @remarks
   * The ID or alias of the KMS key. This parameter is required only if you set EncryptType to KMS.
   * 
   * @example
   * alias/yzs-hhht
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * Specifies whether to create a replication vault.
   * 
   * @example
   * true
   */
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
   * The region ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  vaultRegionId?: string;
  /**
   * @remarks
   * The storage class of the backup vault.
   * 
   * - **STANDARD**: Standard.
   * 
   * - **ARCHIVE**: This value is deprecated.
   * 
   * - **COLD_ARCHIVE**: This value is deprecated.
   * 
   * - **IA**: This value is deprecated.
   * 
   * @example
   * STANDARD
   */
  vaultStorageClass?: string;
  /**
   * @remarks
   * The type of the backup vault. Valid values:
   * 
   * - **STANDARD**: a standard backup vault.
   * 
   * - **OTS_BACKUP**: a Tablestore backup vault.
   * 
   * @example
   * STANDARD
   */
  vaultType?: string;
  /**
   * @remarks
   * Specifies whether to enable backup locking.
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

