// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsRequestOssDeliveryConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * example-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * Specifies whether to deliver records to OSS. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The OSS encryption algorithm. Valid values:
   * 
   * *   AES256
   * *   SM4
   * 
   * @example
   * AES256
   */
  encryptionAlgorithm?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) when EncryptionType is set to KMS.
   * 
   * @example
   * a807****7a70e
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The OSS encryption method. Valid values:
   * 
   * *   Inherit: the encryption method used by the specified bucket.
   * *   OssManaged: server-side encryption by using OSS-managed keys (SSE-OSS).
   * *   KMS: server-side encryption by using Key Management Service managed keys (SSE-KMS).
   * 
   * @example
   * Inherit
   */
  encryptionType?: string;
  /**
   * @remarks
   * The prefix of the OSS bucket directory. The prefix must meet the following requirements:
   * 
   * *   The prefix can be up to 254 characters in length.
   * *   The prefix cannot start with a forward slash (/) or a backslash (\\\\).
   * 
   * Note: If you do not need a directory prefix, specify a pair of double quotation marks ("") for this parameter to clear the directory prefix that you specified.
   * 
   * @example
   * sessionmanager/audit
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      enabled: 'Enabled',
      encryptionAlgorithm: 'EncryptionAlgorithm',
      encryptionKeyId: 'EncryptionKeyId',
      encryptionType: 'EncryptionType',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      enabled: 'boolean',
      encryptionAlgorithm: 'string',
      encryptionKeyId: 'string',
      encryptionType: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

