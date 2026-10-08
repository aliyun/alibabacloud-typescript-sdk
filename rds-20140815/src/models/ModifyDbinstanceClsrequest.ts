// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceCLSRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n8t18o******6d5
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The encryption algorithm. Valid values:
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
   * The encryption key ID. This parameter is required when you use a KMS key.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The column encryption key mode. Valid values:
   * 
   * - client_key: configures a user-generated random key on the client side.
   * - kms_key: configures a custom key by using Alibaba Cloud Key Management Service (KMS).
   * 
   * >  After an instance is configured to use KMS for key management, you can no longer switch to the client-side random key mode.
   * 
   * @example
   * kms_key
   */
  encryptionKeyMode?: string;
  /**
   * @remarks
   * The column encryption status. Valid values:
   * -  1: Encryption is enabled.
   * -  0: Encryption is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  encryptionStatus?: string;
  /**
   * @remarks
   * Specifies whether to rotate the key.
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
   * The global resource descriptor of the RAM role, used to specify the role to assume. For details, see RAM role overview.
   * 
   * >  This parameter takes effect only when the column encryption key pattern is set to kms_key. If you do not specify this parameter, the internal default value is used.
   * 
   * @example
   * acs:ram::1406926****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * Specifies whether to enable the whitelist mode. A value of true indicates that only columns in the whitelist are encrypted. A value of false indicates that all columns are encrypted.
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

