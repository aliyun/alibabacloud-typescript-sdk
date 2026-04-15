// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VirtualDeliveryToMsceneResponseBodyMpaasUserGamecenterPaymentVirtualdeliveryResponse extends $dara.Model {
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VirtualDeliveryToMsceneResponseBody extends $dara.Model {
  mpaasUserGamecenterPaymentVirtualdeliveryResponse?: VirtualDeliveryToMsceneResponseBodyMpaasUserGamecenterPaymentVirtualdeliveryResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ac1f0083177615939018778261913
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
      mpaasUserGamecenterPaymentVirtualdeliveryResponse: 'MpaasUserGamecenterPaymentVirtualdeliveryResponse',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpaasUserGamecenterPaymentVirtualdeliveryResponse: VirtualDeliveryToMsceneResponseBodyMpaasUserGamecenterPaymentVirtualdeliveryResponse,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mpaasUserGamecenterPaymentVirtualdeliveryResponse && typeof (this.mpaasUserGamecenterPaymentVirtualdeliveryResponse as any).validate === 'function') {
      (this.mpaasUserGamecenterPaymentVirtualdeliveryResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

