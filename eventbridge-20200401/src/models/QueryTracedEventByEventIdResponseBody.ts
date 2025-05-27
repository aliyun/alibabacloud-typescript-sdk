// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTracedEventByEventIdResponseBodyData } from "./QueryTracedEventByEventIdResponseBodyData";


export class QueryTracedEventByEventIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * Success: The request was successful.
   * 
   * Other codes: The request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries returned.
   */
  data?: QueryTracedEventByEventIdResponseBodyData[];
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * EventBusNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5D7B9F4-BF96-51A9-90B1-928955FABB5B
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
      data: { 'type': 'array', 'itemType': QueryTracedEventByEventIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

