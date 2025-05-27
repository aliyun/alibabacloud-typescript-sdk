// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryEventTracesResponseBodyData } from "./QueryEventTracesResponseBodyData";


export class QueryEventTracesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * 200: The request was successful.
   * 
   * Other codes: The request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The name of the event source.
   */
  data?: QueryEventTracesResponseBodyData[];
  /**
   * @remarks
   * The error message that is returned if the request failed.
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
   * BB934571-1F5A-5E17-91DD-E2BC3E1BFBFF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
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
      data: { 'type': 'array', 'itemType': QueryEventTracesResponseBodyData },
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

