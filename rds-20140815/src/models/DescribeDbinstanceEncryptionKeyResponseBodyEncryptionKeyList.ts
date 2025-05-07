// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList extends $dara.Model {
  /**
   * @remarks
   * The alias of the key.
   * 
   * @example
   * alias/xxx
   */
  aliasName?: string;
  /**
   * @remarks
   * The user who created the key.
   * 
   * @example
   * 1443*****9604
   */
  creator?: string;
  /**
   * @remarks
   * The scheduled time at which the key is deleted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * The ID of the key.
   * 
   * @example
   * 5306d1b6-7fd3-42d9-9511-xxxxxxx
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The type of the key. Valid values:
   * 
   * *   **CMK**
   * *   **ServiceKey**
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
   * The time at which the key expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * The role of the instance. Valid values:
   * 
   * *   **Master**: primary instance
   * *   **slave**: read-only instance
   * 
   * @example
   * Master
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

