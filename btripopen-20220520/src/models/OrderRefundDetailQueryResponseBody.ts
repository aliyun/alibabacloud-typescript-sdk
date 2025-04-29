// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderRefundDetailQueryResponseBodyModule } from "./OrderRefundDetailQueryResponseBodyModule";


export class OrderRefundDetailQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 8CA36096-1FEE-5756-86DD-D195FEDE080E
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * true
   */
  message?: string;
  module?: OrderRefundDetailQueryResponseBodyModule;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      message: 'message',
      module: 'module',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      module: OrderRefundDetailQueryResponseBodyModule,
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

