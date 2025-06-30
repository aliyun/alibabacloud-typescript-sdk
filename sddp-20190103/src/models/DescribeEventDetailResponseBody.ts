// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventDetailResponseBodyEvent } from "./DescribeEventDetailResponseBodyEvent";


export class DescribeEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the anomalous event.
   */
  event?: DescribeEventDetailResponseBodyEvent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: DescribeEventDetailResponseBodyEvent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.event && typeof (this.event as any).validate === 'function') {
      (this.event as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

