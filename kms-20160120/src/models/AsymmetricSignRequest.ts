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
   * The digest of the original message. The digest is generated using the hash algorithm that corresponds to the value of the Algorithm parameter.
   * 
   * > - The value is Base64-encoded.
   * 
   * - For information about how to calculate a message digest, see the "Pre-signing: calculate a message digest" section of the [Asymmetric digital signature](https://help.aliyun.com/document_detail/148146.html) topic.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiu****=
   */
  digest?: string;
  /**
   * @remarks
   * Specifies whether to enable the dry-run feature.
   * 
   * - true: enables the feature.
   * 
   * - false (default): disables the feature.
   * 
   * The dry-run feature is used to test API calls and verify the permissions on the resources that you have and the validity of the request parameters. If you enable the dry-run feature, KMS always returns a failure response and a failure reason. The failure reasons include the following:
   * 
   * - DryRunOperationError: The request would have succeeded if the DryRun parameter is not configured.
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
   * The globally unique identifier (GUID) of the customer master key (CMK).
   * 
   * > You can also specify the alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version. The ID must be the GUID of the key version.
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

