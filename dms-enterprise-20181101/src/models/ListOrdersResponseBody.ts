// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOrdersResponseBodyOrders } from "./ListOrdersResponseBodyOrders";


export class ListOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details about the tickets.
   */
  orders?: ListOrdersResponseBodyOrders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      orders: 'Orders',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      orders: ListOrdersResponseBodyOrders,
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.orders && typeof (this.orders as any).validate === 'function') {
      (this.orders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

