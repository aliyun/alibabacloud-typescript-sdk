// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the key creator.
   * 
   * @example
   * 17649847********
   */
  creator?: string;
  /**
   * @remarks
   * The estimated time when the key is to be deleted. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > If this parameter is empty, the key will not be automatically deleted.
   * 
   * @example
   * 2021-09-24T18:22:03Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the key. By default, this parameter is empty.
   * 
   * @example
   * testkey
   */
  description?: string;
  /**
   * @remarks
   * The key ID of the instance.
   * 
   * @example
   * ad463061-992d-4195-8a94-ed63********
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The status of the key. Valid values:
   * * **Enabled**: The key is available.
   * * **Disabled**: The key is unavailable.
   * 
   * @example
   * Enabled
   */
  encryptionKeyStatus?: string;
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * AES-CTR-256
   */
  encryptionName?: string;
  /**
   * @remarks
   * The purpose of the key. The return value `ENCRYPT/DECRYPT` indicates that the key is used for encryption and decryption.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The expiration time of the key. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > If this parameter is empty, the key does not expire.
   * 
   * @example
   * 2021-09-24T18:22:03Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The source of the key material. The return value is **Aliyun_KMS**, which indicates Alibaba Cloud [Key Management Service (KMS)](https://help.aliyun.com/document_detail/28935.html).
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
   * 9A931CE5-C926-5E09-B0EC-6299C4A6****
   */
  requestId?: string;
  /**
   * @remarks
   * The global resource descriptor ARN (Alibaba Cloud Resource Name) of the role to be granted authorization.
   * 
   * @example
   * acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      encryptionKey: 'EncryptionKey',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      encryptionName: 'EncryptionName',
      keyUsage: 'KeyUsage',
      materialExpireTime: 'MaterialExpireTime',
      origin: 'Origin',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      encryptionKey: 'string',
      encryptionKeyStatus: 'string',
      encryptionName: 'string',
      keyUsage: 'string',
      materialExpireTime: 'string',
      origin: 'string',
      requestId: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

