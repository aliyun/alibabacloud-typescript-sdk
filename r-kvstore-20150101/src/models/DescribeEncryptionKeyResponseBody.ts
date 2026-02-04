// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the custom key.
   * 
   * @example
   * 17649847********
   */
  creator?: string;
  /**
   * @remarks
   * The time when the custom key is expected to be deleted. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > If the return value is an empty string, the custom key cannot be automatically deleted.
   * 
   * @example
   * 2021-09-24T18:22:03Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the custom key. By default, an empty string is returned.
   * 
   * @example
   * testkey
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom key.
   * 
   * @example
   * ad463061-992d-4195-8a94-ed63********
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The state of the custom key. Valid values:
   * 
   * *   **Enabled**: The custom key is available.
   * *   **Disabled**: The custom key is unavailable.
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
   * The purpose of the custom key. A value of `ENCRYPT/DECRYPT` indicates encryption and decryption.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The time when the custom key expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > If the return value is an empty string, the custom key does not expire.
   * 
   * @example
   * 2021-09-24T18:22:03Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The source of the custom key. A value of **Aliyun_KMS** indicates [Key Management Service (KMS)](https://help.aliyun.com/document_detail/28935.html) of Alibaba Cloud.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9A931CE5-C926-5E09-B0EC-6299C4A6****
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role to which you want to grant permissions.
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

