// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventBusesResponseBodyData } from "./ListEventBusesResponseBodyData";


export class ListEventBusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   Success: The request was successful.
   * *   Other codes: The request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListEventBusesResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * InvalidArgument
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1DCF64A-3F2C-5323-ADCB-3F4DF30FAD2D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. If the operation was successful, the value true is returned.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEventBusesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

