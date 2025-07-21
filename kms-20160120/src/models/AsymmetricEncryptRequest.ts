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
  dryRun?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  You can also set this parameter to an alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * >  You can call the [ListKeyVersions](https://help.aliyun.com/document_detail/133966.html) operation to query the versions of a CMK. The ID of a version is specified by the KeyVersionId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The plaintext that you want to encrypt. The plaintext must be Base64-encoded.
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

