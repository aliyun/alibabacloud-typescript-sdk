// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFixedPriceSelectedOrderResponseBodyModule } from "./CreateFixedPriceSelectedOrderResponseBodyModule";


export class CreateFixedPriceSelectedOrderResponseBody extends $dara.Model {
  /**
   * @example
   * DomainNotOnSale
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  module?: CreateFixedPriceSelectedOrderResponseBodyModule;
  /**
   * @example
   * C50E41A0-09F1-4491-8DB8-AF55BD2D0CC8
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'number',
      module: CreateFixedPriceSelectedOrderResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

