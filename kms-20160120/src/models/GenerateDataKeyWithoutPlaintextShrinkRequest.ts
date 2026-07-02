// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDataKeyWithoutPlaintextShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the DryRun mode.
   * 
   * - true: enables the DryRun mode.
   * 
   * - false (default): disables the DryRun mode.
   * 
   * The DryRun mode is used to test API calls, verify your permissions on the required resources, and check if the request parameters are valid. If you enable the DryRun mode, KMS returns a failure response with a reason. The failure reasons include the following:
   * 
   * - DryRunOperationError: The request would have succeeded if the DryRun parameter was not specified.
   * 
   * - ValidationError: The request parameters are invalid.
   * 
   * - AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * A JSON string of key-value pairs. If you specify this parameter, you must provide the same parameter when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The globally unique identifier of the CMK. You can also specify an alias that is bound to the CMK. For more information about how to use an alias, see Alias overview.
   * 
   * This parameter is required.
   * 
   * @example
   * 599fa825-17de-417e-9554-bb032cc6****
   */
  keyId?: string;
  /**
   * @remarks
   * The length of the data key to generate. Valid values:
   * 
   * - AES_256: a 256-bit symmetric key
   * 
   * - AES_128: a 128-bit symmetric key
   * 
   * > Use KeySpec or NumberOfBytes to specify the length of the data key. If you do not specify either parameter, KMS generates a 256-bit data key. If you specify both parameters, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key to generate.<br> Valid values: 1 to 1024.<br> Unit: bytes<br><br><br><br><br>
   * 
   * @example
   * 256
   */
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

