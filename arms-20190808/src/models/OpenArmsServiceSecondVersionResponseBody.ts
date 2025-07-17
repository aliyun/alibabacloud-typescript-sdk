// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenArmsServiceSecondVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service ID returned if the service is activated.
   * 
   * @example
   * 20896874992****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9ED50893-F3C4-42DF-ABB2-C200BE******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

