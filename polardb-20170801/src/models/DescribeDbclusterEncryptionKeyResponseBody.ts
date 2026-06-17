// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEncryptionKeyResponseBodyEncryptionKeyList extends $dara.Model {
  /**
   * @remarks
   * The alias of the key.
   * 
   * @example
   * alias/your_default_key
   */
  aliasName?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that created the key.
   * 
   * @example
   * 1****1
   */
  creator?: string;
  /**
   * @remarks
   * The scheduled time to delete the key. The format is yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * - This field is empty if the key is not scheduled for deletion.
   * 
   * @example
   * 2026-05-08T08:14:16Z
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
   * 51858179-afb3-4369-8329-*********
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * 
   * - Enabled: The key is enabled.
   * 
   * - Disabled: The key is not enabled.
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The type of the key. Valid values:
   * 
   * - CMK: customer master key
   * 
   * - ServiceKey: service key
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
   * The expiration time of the key. The format is yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2025-10-18T08:14:16Z
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
   * The service that uses the key. Valid values:
   * 
   * - TDE: transparent data encryption (TDE).
   * 
   * - DiskEncryption: disk encryption.
   * 
   * @example
   * DiskEncryption
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

export class DescribeDBClusterEncryptionKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of keys.
   */
  encryptionKeyList?: DescribeDBClusterEncryptionKeyResponseBodyEncryptionKeyList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 137ECCC0-920E-5B3B-9F8E-B81632108BBE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionKeyList: 'EncryptionKeyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionKeyList: { 'type': 'array', 'itemType': DescribeDBClusterEncryptionKeyResponseBodyEncryptionKeyList },
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

