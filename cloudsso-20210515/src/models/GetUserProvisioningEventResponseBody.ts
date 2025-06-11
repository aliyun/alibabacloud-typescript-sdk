// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserProvisioningEventResponseBodyUserProvisioningEvent } from "./GetUserProvisioningEventResponseBodyUserProvisioningEvent";


export class GetUserProvisioningEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B801715C-97EA-3067-AC97-EF1EBECBB39C
   */
  requestId?: string;
  /**
   * @remarks
   * The RAM user provisioning event.
   */
  userProvisioningEvent?: GetUserProvisioningEventResponseBodyUserProvisioningEvent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningEvent: 'UserProvisioningEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningEvent: GetUserProvisioningEventResponseBodyUserProvisioningEvent,
    };
  }

  validate() {
    if(this.userProvisioningEvent && typeof (this.userProvisioningEvent as any).validate === 'function') {
      (this.userProvisioningEvent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

