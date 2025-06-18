// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserDefinedEventSourcesResponseBodyData } from "./ListUserDefinedEventSourcesResponseBodyData";


export class ListUserDefinedEventSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. Valid values:
   * 
   * *   Success: The request is successful.
   * *   Other codes: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListUserDefinedEventSourcesResponseBodyData;
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
   * 5169654A-7059-57E3-BFD9-33C7E012EA1B
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
      data: ListUserDefinedEventSourcesResponseBodyData,
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

