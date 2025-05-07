// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserEventTypeResponseBodyEvent } from "./DescribeUserEventTypeResponseBodyEvent";


export class DescribeUserEventTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The types and statistics of security events.
   */
  event?: DescribeUserEventTypeResponseBodyEvent[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 177BA739-6512-5470-98C6-E***0BAA3D
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
      event: { 'type': 'array', 'itemType': DescribeUserEventTypeResponseBodyEvent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.event)) {
      $dara.Model.validateArray(this.event);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

