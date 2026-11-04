// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricSignRequest extends $dara.Model {
  /**
   * @remarks
   * The signature algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_PSS_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The digest generated from the original message by using the hash algorithm that corresponds to the value of the Algorithm parameter.
   * 
   * > - The value is Base64-encoded.
   * - For more information about how to calculate a message digest, see the **Signature preprocessing: Calculate the message digest** section in [Asymmetric digital signatures](https://help.aliyun.com/document_detail/148146.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiu****=
   */
  digest?: string;
  /**
   * @remarks
   * Specifies whether to enable the dry run mode.
   * 
   * - true: Enables the dry run mode.
   * - false: Disables the dry run mode. This is the default value.
   * 
   * The dry run mode is used to test API calls, verify whether you have the required permissions on the resources, and check whether the request parameters are correctly configured. When the dry run mode is enabled, KMS always returns a failure and provides the cause of the failure. The causes include:
   * 
   * - DryRunOperationError: The request would succeed if the DryRun parameter is not configured.
   * - ValidationError: The specified parameters in the request are invalid.
   * - AccessDeniedError: You are not authorized to perform the operation on the KMS resources.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The globally unique identifier of the customer master key (CMK).
   * 
   * > You can also set this parameter to the alias that is bound to the CMK. For more information, see [Usage notes for aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The key version ID, which is the globally unique identifier of the key version.
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
      digest: 'Digest',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
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

