// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSmartAccessGatewayClientUserPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BE1F7E80-4558-4021-B6D2-B94DA8AAAF81
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

