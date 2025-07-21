// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricVerifyRequest extends $dara.Model {
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
   * The digest that is generated for the original message by using a hash algorithm. The hash algorithm is specified by the **Algorithm** parameter.
   * 
   * >  The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuy****=
   */
  digest?: string;
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
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The signature value to be verified.
   * 
   * >  The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

