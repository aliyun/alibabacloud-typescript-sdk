// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyData } from "./ListEventStreamingsResponseBodyData";


export class ListEventStreamingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * Success: The request is successful.
   * 
   * Other codes: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListEventStreamingsResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The event streaming [xxxx] not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 283FF852-C4B8-58C9-9777-F88A5A16A79F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. The value true indicates that the request is successful.
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
      data: ListEventStreamingsResponseBodyData,
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

