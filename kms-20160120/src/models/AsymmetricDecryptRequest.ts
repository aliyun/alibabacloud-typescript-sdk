// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricDecryptRequest extends $dara.Model {
  /**
   * @remarks
   * The decryption algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * The ciphertext to be decrypted, which is Base64-encoded. 
   * 
   * > You can call the [AsymmetricEncrypt](https://help.aliyun.com/document_detail/148131.html) operation to generate ciphertext.
   * 
   * This parameter is required.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * Specifies whether to enable the dry run mode.
   * 
   * - true: enables the dry run mode.
   * - false: disables the dry run mode. This is the default value.
   * 
   * The dry run mode is used to test API calls and verify whether you have the required permissions on the resources and whether the request parameters are correctly configured. When the dry run mode is enabled, KMS always returns a failure and provides the cause of the failure. The causes include:
   * 
   * - DryRunOperationError: The request would succeed if the DryRun parameter is not specified.
   * - ValidationError: A parameter specified in the request is invalid.
   * - AccessDeniedError: You are not authorized to perform the operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The ID of the key. You can also specify the alias or Alibaba Cloud Resource Name (ARN) of the key. For more information about aliases, refer to [Manage key aliases](https://help.aliyun.com/document_detail/480655.html).
   * > To access a key that belongs to another Alibaba Cloud account, you must enter the ARN of the key. The ARN of a key is in the `acs:kms:${region}:${account}:key/${keyid}` format.
   * 
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version, which is the globally unique identifier of the key version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The remote attestation.
   * 
   * @example
   * { "AttestationDocument":"base64-encoded-attestion-document",  "KeyEncryptionAlgorithm":"RSAES_OAEP_SHA_256" }
   */
  recipient?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      recipient: 'Recipient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      ciphertextBlob: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      recipient: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

