// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventCenterQueryEventsResponseBodyData } from "./EventCenterQueryEventsResponseBodyData";


export class EventCenterQueryEventsResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: EventCenterQueryEventsResponseBodyData;
  /**
   * @example
   * Specified parameter Limit is not valid.
   */
  message?: string;
  /**
   * @example
   * 5DAF96FB-A4B6-548C-B999-XXXXXXXX
   */
  requestId?: string;
  /**
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
      data: EventCenterQueryEventsResponseBodyData,
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

