// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConvertHybridInstanceResponseBodyOrderInfo } from "./ConvertHybridInstanceResponseBodyOrderInfo";


export class ConvertHybridInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 000000
   */
  errCode?: string;
  orderInfo?: ConvertHybridInstanceResponseBodyOrderInfo;
  /**
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426DD51
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      orderInfo: 'OrderInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      orderInfo: ConvertHybridInstanceResponseBodyOrderInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.orderInfo && typeof (this.orderInfo as any).validate === 'function') {
      (this.orderInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

