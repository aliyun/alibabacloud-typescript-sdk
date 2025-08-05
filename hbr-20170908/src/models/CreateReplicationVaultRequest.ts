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
   * The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
   * 
   * *   **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
   * *   **KMS**: The source data is encrypted by using Key Management Service (KMS).
   * 
   * @example
   * HBR_PRIVATE
   */
  encryptType?: string;
  /**
   * @remarks
   * The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
   * 
   * @example
   * alias/test
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The data redundancy type of the backup vault. Valid values:
   * 
   * *   LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies of each object on multiple devices of different facilities in the same zone. This way, Cloud Backup ensures data durability and availability even if hardware failures occur.
   * *   ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
   * 
   * @example
   * LRS
   */
  redundancyType?: string;
  /**
   * @remarks
   * The ID of the region where the source vault resides.
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
   * The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.
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

