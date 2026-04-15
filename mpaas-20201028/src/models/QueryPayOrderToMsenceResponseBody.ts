// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPayOrderToMsenceResponseBodyMpaasUserGamecenterPaymentQuerystatusResponse extends $dara.Model {
  /**
   * @example
   * 1
   */
  orderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      orderStatus: 'OrderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  resultCode?: string;
  /**
   * @example
   * SUCCESS
   */
  resultMsg?: string;
  /**
   * @example
   * true
   */
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

