// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the dry run feature.
   * 
   * - true: enables the dry run feature.
   * 
   * - false (default): disables the dry run feature.
   * 
   * The dry run feature is used to test API calls and verify the permissions on the resources that you have and the validity of the request parameters. You can view the check results in the response.
   * 
   * - DryRunOperationError: The permissions and parameters are valid. If you do not specify the DryRun parameter, the request is successful.
   * 
   * - ValidationError: The parameters in the request are invalid.
   * 
   * - AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter, you must specify the same parameter when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
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
   * The plaintext to be encrypted. The plaintext must be Base64-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * SGVsbG8gd29y****
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      plaintext: 'string',
    };
  }

  validate() {
    if(this.encryptionContext) {
      $dara.Model.validateMap(this.encryptionContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

