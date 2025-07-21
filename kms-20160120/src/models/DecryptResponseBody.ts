// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer master key (CMK) that is used to decrypt the ciphertext.
   * 
   * It is the GUID of the CMK.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the ciphertext.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The plaintext that is generated after decryption.
   * 
   * @example
   * tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv****
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 207596a2-36d3-4840-b1bd-f87044699bd7
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

