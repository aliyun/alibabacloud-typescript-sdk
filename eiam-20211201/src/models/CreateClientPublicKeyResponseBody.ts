// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientPublicKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the client public key for the application.
   * 
   * @example
   * KEYCKmEYW9byWTdjuRbmCjd2Bhg6VpkAxxxx
   */
  clientPublicKeyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientPublicKeyId: 'ClientPublicKeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPublicKeyId: 'string',
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

