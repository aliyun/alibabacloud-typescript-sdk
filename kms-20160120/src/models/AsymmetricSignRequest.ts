// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricSignRequest extends $dara.Model {
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_PSS_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The signature algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiu****=
   */
  digest?: string;
  dryRun?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **AsymmetricSign**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * >  You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
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

