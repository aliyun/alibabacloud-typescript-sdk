// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * The error code recognizable by programs.
   * 
   * This parameter is required.
   * 
   * @example
   * INVALID_REQUEST
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * This parameter is required.
   * 
   * @example
   * invalid request
   */
  message?: string;
  /**
   * @remarks
   * The correlation ID of the current call.
   * 
   * This parameter is required.
   * 
   * @example
   * open-service-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

export class OpenServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of a non-2xx error response, which are mutually exclusive with the status, orderId, and spInstanceId of a normal response.
   */
  error?: OpenServiceResponseBodyError;
  /**
   * @remarks
   * The order ID associated with the service activation process. Returned when an order exists.
   * 
   * @example
   * order-example-001
   */
  orderId?: string;
  /**
   * @remarks
   * The service instance ID returned after successful activation and settlement.
   * 
   * @example
   * sp-example-001
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The test or activation result. TEST_OK indicates that the call validation succeeded.
   * 
   * @example
   * TEST_OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      orderId: 'orderId',
      spInstanceId: 'spInstanceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: OpenServiceResponseBodyError,
      orderId: 'string',
      spInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

