// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsymmetricDecryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK that is used to encrypt the plaintext.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The Base64-encoded plaintext that is generated after decryption.
   * 
   * @example
   * SGVsbG8gd29ybGQ=
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

