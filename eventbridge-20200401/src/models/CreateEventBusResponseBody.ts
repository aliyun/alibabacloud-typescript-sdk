// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventBusResponseBodyData } from "./CreateEventBusResponseBodyData";


export class CreateEventBusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateEventBusResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The event bus [xxxx] not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A995F07C-E503-5881-9962-9CECA8566876
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
      data: CreateEventBusResponseBodyData,
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

