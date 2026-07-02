// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the DryRun mode.
   * 
   * - true: enables the DryRun mode.
   * 
   * - false (default): disables the DryRun mode.
   * 
   * The DryRun mode is used to test API calls, verify your permissions on resources, and check whether the parameters are valid. If you enable the DryRun mode, KMS always returns a failed response and a failure reason. The failure reasons include the following:
   * 
   * - DryRunOperationError: The request would have succeeded if the DryRun parameter is not specified.
   * 
   * - ValidationError: The specified parameters in the request are invalid.
   * 
   * - AccessDeniedError: You are not authorized to perform the operation on the KMS resource.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The globally unique identifier of the customer master key (CMK). This parameter can also be an alias that is bound to the CMK. For more information, see [Use of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique identifier of the key version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

