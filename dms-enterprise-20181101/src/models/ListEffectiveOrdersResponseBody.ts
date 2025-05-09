// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEffectiveOrdersResponseBodyOrderSummary } from "./ListEffectiveOrdersResponseBodyOrderSummary";


export class ListEffectiveOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about orders.
   */
  orderSummary?: ListEffectiveOrdersResponseBodyOrderSummary[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8FE12AA-300D-5FDF-806F-C2CB99161F32
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      orderSummary: 'OrderSummary',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      orderSummary: { 'type': 'array', 'itemType': ListEffectiveOrdersResponseBodyOrderSummary },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.orderSummary)) {
      $dara.Model.validateArray(this.orderSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

