// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReEncryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ciphertext re-encrypted.
   * 
   * @example
   * DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the CMK that is used to decrypt the original ciphertext.
   * 
   * This parameter is the globally unique ID of the CMK.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the original ciphertext.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyVersionId?: string;
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
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
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

