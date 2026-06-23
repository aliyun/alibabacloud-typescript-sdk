// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VirtualDeliveryToMsceneResponseBodyMpaasUserGamecenterPaymentVirtualdeliveryResponse extends $dara.Model {
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
  requestId?: string;
  resultCode?: string;
  resultMsg?: string;
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

