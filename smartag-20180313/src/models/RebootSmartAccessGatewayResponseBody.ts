// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootSmartAccessGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B1792769-5CC3-4D6F-A5A5-E6408EBFBAD0
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

