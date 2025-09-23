// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEncryptionKeyResponseBodyEncryptionKeyList extends $dara.Model {
  /**
   * @example
   * alias/your_default_key
   */
  aliasName?: string;
  /**
   * @example
   * 1****1
   */
  creator?: string;
  /**
   * @example
   * 2026-05-08T08:14:16Z
   */
  deleteDate?: string;
  /**
   * @example
   * Description of the key
   */
  description?: string;
  /**
   * @example
   * 51858179-afb3-4369-8329-*********
   */
  encryptionKey?: string;
  /**
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @example
   * ServiceKey
   */
  keyType?: string;
  /**
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @example
   * 2025-10-18T08:14:16Z
   */
  materialExpireTime?: string;
  /**
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
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
  encryptionKeyList?: DescribeDBClusterEncryptionKeyResponseBodyEncryptionKeyList[];
  /**
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

