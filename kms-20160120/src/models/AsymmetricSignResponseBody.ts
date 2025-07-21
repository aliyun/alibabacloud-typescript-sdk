// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricSignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The digest that is generated for the original message by using a hash algorithm. The hash algorithm is specified by the Algorithm parameter.
   * 
   * > * The value is encoded in Base64.
   * > * For more information about how to calculate message digests, see the **Preprocess signature: compute a message digest** section of the [Generate and verify a signature by using an asymmetric CMK](https://help.aliyun.com/document_detail/148146.html) topic.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The calculated signature.
   * 
   * >  The value is encoded in Base64.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
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

