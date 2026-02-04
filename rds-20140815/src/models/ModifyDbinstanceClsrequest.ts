// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceCLSRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-t4n8t18o******6d5
   */
  DBInstanceId?: string;
  /**
   * @example
   * AES_256_GCM
   */
  encryptionAlgorithm?: string;
  /**
   * @example
   * acs:kms:cn-hangzhou:123456789:key/xxxxx
   */
  encryptionKey?: string;
  /**
   * @example
   * KMS
   */
  encryptionKeyMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  encryptionStatus?: string;
  /**
   * @example
   * true
   */
  isRotate?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * acs:123456789:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleArn?: string;
  /**
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

