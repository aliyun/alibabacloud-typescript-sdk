// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKMSEncryptionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the Secret-at-rest encryption feature.
   * 
   * * `true`: Disables the at-rest encryption feature.
   * * `false`: Enables the at-rest encryption feature.
   * 
   * @example
   * false
   */
  disableEncryption?: boolean;
  /**
   * @remarks
   * The KMS key ID used by the Secret-at-rest encryption feature.
   * 
   * >Notice: You cannot use a service key. You must use either a master key or a customer master key. The key type must be `Aliyun_AES_256`, and the key usage must be `ENCRYPT/DECRYPT`.
   * 
   * 
   * 
   * 
   * >Warning: During the process of enabling or disabling the at-rest encryption feature and after the feature is successfully enabled, do not disable or delete the KMS key via the KMS console or OpenAPI. Otherwise, the cluster API Server will become unavailable, preventing normal retrieval of objects such as Secrets and ServiceAccounts, which impacts the normal operation of business applications.
   * 
   * @example
   * key-abc***
   */
  kmsKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      disableEncryption: 'disable_encryption',
      kmsKeyId: 'kms_key_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableEncryption: 'boolean',
      kmsKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

