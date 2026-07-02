// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDataKeyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the DryRun mode.
   * 
   * - true: enables the DryRun mode.
   * 
   * - false (default): disables the DryRun mode.
   * 
   * The DryRun mode is used to test the API call. It verifies whether you have the permissions to access the specified resources and whether the request parameters are valid. If you enable the DryRun mode, KMS always returns a failure response and a failure reason. The failure reasons include the following:
   * 
   * - DryRunOperationError: The request succeeds if the DryRun parameter is not specified.
   * 
   * - ValidationError: The parameters specified in the request are invalid.
   * 
   * - AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs.
   * 
   * If you specify this parameter, you must also specify the same parameter when you call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The ID of the key. You can also specify the alias or the key resource name (ARN) of the key. For more information about aliases, see [Manage aliases](https://help.aliyun.com/document_detail/480655.html).
   * 
   * > When you access a key in another Alibaba Cloud account, you must enter the ARN of the key. The key ARN is in the format of `acs:kms:${region}:${account}:key/${keyid}`.
   * 
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * The length of the data key to be generated. Valid values:
   * 
   * - AES_256: a 256-bit symmetric key.
   * 
   * - AES_128: a 128-bit symmetric key.
   * 
   * > We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If you do not specify either of the parameters, KMS generates a 256-bit data key. If you specify both parameters, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Unit: bytes.
   * 
   * Valid values: 1 to 1024.
   * 
   * Default values:
   * 
   * - If you set KeySpec to AES_256, the default value of NumberOfBytes is 32.
   * 
   * - If you set KeySpec to AES_128, the default value of NumberOfBytes is 16.
   * 
   * @example
   * 256
   */
  numberOfBytes?: number;
  recipient?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      recipient: 'Recipient',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
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

