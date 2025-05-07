// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFreeUserEventCountResponseBodyEvent } from "./DescribeFreeUserEventCountResponseBodyEvent";


export class DescribeFreeUserEventCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the security events that are detected by using the basic detection feature.
   */
  event?: DescribeFreeUserEventCountResponseBodyEvent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D9FB3BC-0DE9-58A8-9663-ACE56F24F405
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
      event: DescribeFreeUserEventCountResponseBodyEvent,
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

