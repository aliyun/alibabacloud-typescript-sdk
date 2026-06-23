// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPayOrderToMsenceResponseBodyMpaasUserGamecenterPaymentQuerystatusResponse extends $dara.Model {
  cpExtra?: string;
  orderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cpExtra: 'CpExtra',
      orderStatus: 'OrderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpExtra: 'string',
      orderStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPayOrderToMsenceResponseBody extends $dara.Model {
  mpaasUserGamecenterPaymentQuerystatusResponse?: QueryPayOrderToMsenceResponseBodyMpaasUserGamecenterPaymentQuerystatusResponse;
  requestId?: string;
  resultCode?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mpaasUserGamecenterPaymentQuerystatusResponse: 'MpaasUserGamecenterPaymentQuerystatusResponse',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpaasUserGamecenterPaymentQuerystatusResponse: QueryPayOrderToMsenceResponseBodyMpaasUserGamecenterPaymentQuerystatusResponse,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mpaasUserGamecenterPaymentQuerystatusResponse && typeof (this.mpaasUserGamecenterPaymentQuerystatusResponse as any).validate === 'function') {
      (this.mpaasUserGamecenterPaymentQuerystatusResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

