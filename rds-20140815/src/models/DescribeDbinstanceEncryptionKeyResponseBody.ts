// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList extends $dara.Model {
  /**
   * @remarks
   * The alias of the key.
   * 
   * @example
   * alias/****
   */
  aliasName?: string;
  /**
   * @remarks
   * The creator of the key.
   * 
   * @example
   * 1443****9604
   */
  creator?: string;
  /**
   * @remarks
   * The scheduled time when the key is to be deleted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-08T08:14:16Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the key.
   * 
   * @example
   * Description of the key
   */
  description?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 5306d1b6-7fd3-42d9-9511-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The type of the key. Valid values:
   * - CMK: customer master key (CMK).
   * - ServiceKey: service key.
   * 
   * @example
   * ServiceKey
   */
  keyType?: string;
  /**
   * @remarks
   * The purpose of the key.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The expiration time of the key material. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-18T08:14:16Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The source of the key.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The usage of the key. Valid values:
   * 
   * - **TDE**: transparent data encryption.
   * - **DiskEncryption**: cloud disk encryption.
   * 
   * @example
   * TDE
   */
  usedBy?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      encryptionKey: 'EncryptionKey',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      keyType: 'KeyType',
      keyUsage: 'KeyUsage',
      materialExpireTime: 'MaterialExpireTime',
      origin: 'Origin',
      usedBy: 'UsedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      encryptionKey: 'string',
      encryptionKeyStatus: 'string',
      keyType: 'string',
      keyUsage: 'string',
      materialExpireTime: 'string',
      origin: 'string',
      usedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creator of the key.
   * 
   * @example
   * 1443****9604
   */
  creator?: string;
  /**
   * @remarks
   * The scheduled time when the key is to be deleted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-08T08:14:16Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the key.
   * 
   * @example
   * Description of the key
   */
  description?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 5306d1b6-7fd3-42d9-9511-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The list of keys.
   */
  encryptionKeyList?: DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList[];
  /**
   * @remarks
   * The status of the key. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The purpose of the key.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The expiration time of the key material. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-18T08:14:16Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The source of the key.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3BC2768E-DEDA-40FC-BBE9-6B884F3626AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      encryptionKey: 'EncryptionKey',
      encryptionKeyList: 'EncryptionKeyList',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      keyUsage: 'KeyUsage',
      materialExpireTime: 'MaterialExpireTime',
      origin: 'Origin',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      encryptionKey: 'string',
      encryptionKeyList: { 'type': 'array', 'itemType': DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList },
      encryptionKeyStatus: 'string',
      keyUsage: 'string',
      materialExpireTime: 'string',
      origin: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.encryptionKeyList)) {
      $dara.Model.validateArray(this.encryptionKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

