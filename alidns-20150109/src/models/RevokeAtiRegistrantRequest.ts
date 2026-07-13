// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeAtiRegistrantRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * If you do not specify this parameter, the system automatically uses the value of RequestId as the value of ClientToken. The value of RequestId may be different for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the real-name registrant.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      registrantId: 'RegistrantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      registrantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

