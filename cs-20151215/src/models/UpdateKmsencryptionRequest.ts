// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKMSEncryptionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the Secret encryption at rest feature.
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
   * The key ID of the KMS key used by the Secret encryption at rest feature.
   * 
   * >Notice: You cannot use a service key. Use only a master key or a customer master key (CMK). The key type must be `Aliyun_AES_256`, and the key usage must be `ENCRYPT/DECRYPT`.
   * 
   * 
   * 
   * 
   * >Warning: During the procedure of enabling or shutdown of encryption at rest and after the feature is enabled, do not disable or delete the KMS key in the KMS console or through OpenAPI. Otherwise, the cluster API Server becomes not active, which prevents normal retrieval of objects such as Secrets and ServiceAccounts and affects the normal operation of business applications.
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

