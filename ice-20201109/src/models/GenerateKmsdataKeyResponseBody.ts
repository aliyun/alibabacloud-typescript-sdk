// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateKMSDataKeyResponseBodyDataKey extends $dara.Model {
  /**
   * @remarks
   * The ciphertext of the encrypted data key. This parameter is used as CipherText when you create a transcoding job.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The Base64-encoded plaintext of the data key.
   * 
   * @example
   * QmFzZTY0IGVuY29kZWQgcGxhaW50****
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
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

export class GenerateKMSDataKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data key.
   */
  dataKey?: GenerateKMSDataKeyResponseBodyDataKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataKey: 'DataKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataKey: GenerateKMSDataKeyResponseBodyDataKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataKey && typeof (this.dataKey as any).validate === 'function') {
      (this.dataKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

