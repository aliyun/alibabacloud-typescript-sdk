// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestEventSourceConfigResponseBodyData } from "./TestEventSourceConfigResponseBodyData";


export class TestEventSourceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   Success: The request was successful.
   * *   Other codes indicate that the request failed. For information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The update result.
   */
  data?: TestEventSourceConfigResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FF942675-F937-549C-A942-EB94FFE28DD3
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
      data: { 'type': 'array', 'itemType': TestEventSourceConfigResponseBodyData },
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

