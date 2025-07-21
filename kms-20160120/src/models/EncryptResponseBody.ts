// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of the data that is encrypted by using the primary CMK version.
   * 
   * @example
   * DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK. If you set the KeyId parameter to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version that is used to encrypt the plaintext. It is the primary version of the CMK.
   * 
   * @example
   * 86a9efd9-3d16-4894-bd4f-1fc43f3f****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
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

