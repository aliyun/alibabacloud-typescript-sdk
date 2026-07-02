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
   * The ciphertext to be decrypted. The ciphertext is encoded in Base64.
   * 
   * > You can generate a ciphertext by calling the [AsymmetricEncrypt](https://help.aliyun.com/document_detail/148131.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * Specifies whether to enable the dry run feature.
   * 
   * - true: enables the dry run feature.
   * 
   * - false: disables the dry run feature. This is the default value.
   * 
   * The dry run feature is used to test API calls, verify the permissions on the specified resources, and check the validity of the request parameters. If you enable the dry run feature, KMS always returns a failure response and the cause of the failure. The causes of the failure include the following:
   * 
   * - DryRunOperationError: The request would have succeeded if the DryRun parameter is not specified.
   * 
   * - ValidationError: The specified parameter in the request is invalid.
   * 
   * - AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The ID of the key. You can also specify the alias or Amazon Resource Name (ARN) of the key. For more information about aliases, see [Manage aliases](https://help.aliyun.com/document_detail/480655.html).
   * 
   * > When you access a key in another Alibaba Cloud account, you must specify the ARN of the key. The ARN of a key is in the `acs:kms:${region}:${account}:key/${keyid}` format.
   * 
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version. The globally unique identifier of the key version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      ciphertextBlob: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

