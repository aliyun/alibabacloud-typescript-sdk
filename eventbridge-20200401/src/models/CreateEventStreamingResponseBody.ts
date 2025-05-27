// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingResponseBodyData } from "./CreateEventStreamingResponseBodyData";


export class CreateEventStreamingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   Success: The request is successful.
   * *   Other codes: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateEventStreamingResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The name [xxxx] of event streaming in request is already exist!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B896B484-F16D-59DE-9E23-DD0E5C361108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. The value true indicates that the operation is successful.
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
      data: CreateEventStreamingResponseBodyData,
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

