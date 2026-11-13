// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelOperatorServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the sales order generated when the model creation operator sub-service is created.
   * 
   * @example
   * 123456789012345
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the model operator service corresponding to the sales order. The return of this ID does not indicate that the service has been activated. You can call ListModelOperatorServices to query the subsequent status.
   * 
   * @example
   * adbpg-mo-123456789abc
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

