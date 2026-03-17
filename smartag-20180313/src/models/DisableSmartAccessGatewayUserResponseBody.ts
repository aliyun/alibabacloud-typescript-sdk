// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSmartAccessGatewayUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 05E86199-6CF6-4F4E-A9CE-9BFC5B020B72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

