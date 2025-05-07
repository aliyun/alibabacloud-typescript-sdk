// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFreeUserEventsResponseBodyEvent } from "./DescribeFreeUserEventsResponseBodyEvent";


export class DescribeFreeUserEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The security events on which basic detection is performed.
   */
  event?: DescribeFreeUserEventsResponseBodyEvent[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A2DF88D-90C2-56E9-B8D5-36BB9646791C
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
      event: { 'type': 'array', 'itemType': DescribeFreeUserEventsResponseBodyEvent },
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

