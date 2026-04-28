// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * pg-2ze2079ueg20****
   */
  gwClusterId?: string;
  /**
   * @example
   * 2035629******
   */
  orderId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F9F1CB1A-B1D5-4EF5-A53A-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
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

