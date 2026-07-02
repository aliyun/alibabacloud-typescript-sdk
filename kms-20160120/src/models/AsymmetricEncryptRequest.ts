// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricEncryptRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable the dry run feature.
   * 
   * - true: enables the feature.
   * 
   * - false (default): disables the feature.
   * 
   * The dry run feature is used to test the API call and verify the permissions on the specified resources and the validity of the request parameters. If you enable the dry run feature, KMS always returns a failed result and a failure reason. The failure reasons include the following:
   * 
   * - DryRunOperationError: The request would have succeeded if the DryRun parameter was not specified.
   * 
   * - ValidationError: The specified parameters in the request are invalid.
   * 
   * - AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The ID of the key. You can also specify the alias or the Amazon Resource Name (ARN) of the key. For more information about aliases, see [Manage aliases](https://help.aliyun.com/document_detail/480655.html).
   * 
   * > To access a key of another Alibaba Cloud account, you must specify the ARN of the key. The key ARN is in the format of `acs:kms:${region}:${account}:key/${keyid}`.
   * 
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version. The ID must be a globally unique identifier.
   * 
   * > To obtain the key version ID, call the [ListKeyVersions](https://help.aliyun.com/document_detail/133966.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The plaintext to be encrypted. The value must be Base64-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * SGVsbG8gd29ybGQ=
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

