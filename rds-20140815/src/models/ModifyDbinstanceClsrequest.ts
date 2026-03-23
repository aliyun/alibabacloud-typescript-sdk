// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceCLSRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n8t18o******6d5
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Encryption algorithm to use. Valid values:
   * 
   * - AES_128_CBC
   * - AES_128_GCM
   * - AES_128_CTR
   * - AES_128_ECB
   * - AES_256_CBC
   * - AES_256_GCM
   * - AES_256_CTR
   * - AES_256_ECB
   * - SM4_128_CBC
   * - SM4_128_GCM
   * - SM4_128_CTR
   * - SM4_128_ECB
   * 
   * @example
   * AES_256_GCM
   */
  encryptionAlgorithm?: string;
  /**
   * @remarks
   * Encryption key ID. This parameter is required when using a KMS key.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Column encryption key mode. Valid values:
   * 
   * - client_key (configure a randomly generated user key on the client side)
   * - kms_key (use a custom key configured via Alibaba Cloud KMS)
   * 
   * Note:
   * Once an instance is configured to use a KMS key, it can no longer use the client-side random key configuration method.
   * 
   * @example
   * kms_key
   */
  encryptionKeyMode?: string;
  /**
   * @remarks
   * Column encryption status. Valid values:
   * - 1 (Enabled)
   * - 0 (Disabled)
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  encryptionStatus?: string;
  /**
   * @remarks
   * Whether to rotate the key
   * 
   * @example
   * true
   */
  isRotate?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Global Resource Descriptor (GRD) of the role used to specify the exact role. For more information, see RAM Role Overview.
   * 
   * Note:
   * This parameter takes effect only when the column encryption key mode is set to kms_key. If not provided, the system uses an internal default value.
   * 
   * @example
   * acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * Whether to enable whitelist mode. true indicates that only columns in the whitelist are encrypted; false indicates that all columns are encrypted.
   * 
   * @example
   * true
   */
  whiteListMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      encryptionAlgorithm: 'EncryptionAlgorithm',
      encryptionKey: 'EncryptionKey',
      encryptionKeyMode: 'EncryptionKeyMode',
      encryptionStatus: 'EncryptionStatus',
      isRotate: 'IsRotate',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
      whiteListMode: 'WhiteListMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      encryptionAlgorithm: 'string',
      encryptionKey: 'string',
      encryptionKeyMode: 'string',
      encryptionStatus: 'string',
      isRotate: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
      whiteListMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

