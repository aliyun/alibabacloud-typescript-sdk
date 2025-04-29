// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig extends $dara.Model {
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
   * The type of items to be delivered. Valid values:
   * 
   * *   SessionManager: session records.
   * *   Invocation: task execution records.
   * 
   * @example
   * SessionManager
   */
  deliveryType?: string;
  /**
   * @remarks
   * Indicates whether to deliver the specified items to OSS.
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
   * *   KMS: server-side encryption with Key Management Service (SSE-KMS).
   * 
   * @example
   * Inherit
   */
  encryptionType?: string;
  /**
   * @remarks
   * The prefix of the OSS bucket directory.
   * 
   * @example
   * sessionmanager/audit
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      deliveryType: 'DeliveryType',
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
      deliveryType: 'string',
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

