// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1ed33293-2e48-6b14-861e-538e28e408eb
   */
  requestId?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * eyaC0w3ROK5b3QcHmUtAhMY/sQjKu2t3uBfnf6J/gn7JfZtyxwcCUjzXbw5jmqJQRbj1te670Bshg9kUdanKhtHFhJjU5jX+ZMMBr6pH0gqQDJxR0K0yHXRc0Q5OQoUZ6BfpbI4Wt4jJvJSdCstz1vSg12CfEHS8Kd5qfhItK7Y=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

