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
   * Specifies whether to enable the dry run mode. Valid values:
   * 
   * - true: enables the dry run mode.
   * - false: disables the dry run mode. This is the default value.
   * 
   * The dry run mode is used to test API calls and verify whether you have the required permissions on the resources and whether the request parameters are correctly configured. When the dry run mode is enabled, KMS always returns a failure and provides the cause of the failure. The causes include:
   * 
   * - DryRunOperationError: The request would succeed if the DryRun parameter is not configured.
   * - ValidationError: A specified parameter in the request is invalid.
   * - AccessDeniedError: You do not have permissions to perform the operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The ID of the key. You can also specify the alias or Alibaba Cloud Resource Name (ARN) of the key. For more information about aliases, see [Manage key aliases](https://help.aliyun.com/document_detail/480655.html).
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
   * The ID of the key version. The globally unique identifier of the key version.  
   * 
   * > You can call the [ListKeyVersions](https://help.aliyun.com/document_detail/133966.html) operation to obtain the key version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The plaintext to be encrypted. The plaintext must be Base64-encoded.
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

