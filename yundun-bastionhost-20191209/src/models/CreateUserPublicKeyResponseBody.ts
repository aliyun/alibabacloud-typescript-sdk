// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserPublicKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the public key.
   * 
   * @example
   * 1
   */
  publicKeyId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5EAB922E-F476-5DFA-9290-313C608E724B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publicKeyId: 'PublicKeyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicKeyId: 'string',
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

