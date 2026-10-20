// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKMSEncryptionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the encryption at rest feature for Secrets.
   * 
   * * `true`: Disables the encryption at rest feature.
   * * `false`: Enables the encryption at rest feature.
   * 
   * @example
   * false
   */
  disableEncryption?: boolean;
  /**
   * @remarks
   * The KMS key ID used for the encryption at rest feature for Secrets.
   * 
   * >Notice: You cannot use a service key. You must use a master key or a customer master key (CMK). The key type must be `Aliyun_AES_256`, and the key usage must be `ENCRYPT/DECRYPT`.
   * 
   * 
   * 
   * 
   * >Warning: Do not use the KMS console or OpenAPI to disable or delete this KMS key during the enable or shutdown procedure for encryption at rest, or after the feature is successfully enabled. Otherwise, the cluster API server becomes inactive, which prevents you from retrieving objects such as Secrets and ServiceAccounts and affects the normal operation of your applications.
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

