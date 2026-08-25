// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationVaultRequest extends $dara.Model {
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
   * The encryption type of the replication target vault. This parameter is valid only when VaultType is set to STANDARD. The encryption type must be the same as that of the source backup repository. Valid values:
   * - **HBR_PRIVATE**: fully managed by Cloud Backup. The built-in secret key encryption method of the backup service is used.
   * - **KMS**: uses a custom key from Alibaba Cloud Key Management Service (KMS) for encryption.
   * 
   * @example
   * HBR_PRIVATE
   */
  encryptType?: string;
  /**
   * @remarks
   * The custom key or alias from Alibaba Cloud KMS. This parameter is required only when EncryptType is set to KMS.
   * 
   * @example
   * alias/test
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The data redundancy storage method of the backup vault. Valid values:
   * 
   * - LRS: locally redundant storage (LRS). The data redundancy storage mechanism is used to store redundant copies of each object on multiple devices across multiple facilities within the same zone, ensuring data durability and availability in the event of hardware failure.
   * - ZRS: zone-redundant storage (ZRS). The multi-zone mechanism is used to distribute user data across three zones in the same region. If one zone becomes unavailable, the data can still be accessed normally.
   * 
   * @example
   * LRS
   */
  redundancyType?: string;
  /**
   * @remarks
   * The region ID of the source vault.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  replicationSourceRegionId?: string;
  /**
   * @remarks
   * The ID of the source vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-*********************
   */
  replicationSourceVaultId?: string;
  /**
   * @remarks
   * The name of the backup vault. The name must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * mirrorvaultname
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
   * The storage class of the backup vault. The value can only be **STANDARD**, which indicates standard storage.
   * 
   * @example
   * STANDARD
   */
  vaultStorageClass?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      kmsKeyId: 'KmsKeyId',
      redundancyType: 'RedundancyType',
      replicationSourceRegionId: 'ReplicationSourceRegionId',
      replicationSourceVaultId: 'ReplicationSourceVaultId',
      vaultName: 'VaultName',
      vaultRegionId: 'VaultRegionId',
      vaultStorageClass: 'VaultStorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
      kmsKeyId: 'string',
      redundancyType: 'string',
      replicationSourceRegionId: 'string',
      replicationSourceVaultId: 'string',
      vaultName: 'string',
      vaultRegionId: 'string',
      vaultStorageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

