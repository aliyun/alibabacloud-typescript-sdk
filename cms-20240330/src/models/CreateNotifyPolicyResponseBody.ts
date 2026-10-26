// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyPolicy } from "./NotifyPolicy";


export class CreateNotifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the notification policy object, including the policy UUID, name, description, and enabled status, as well as sub-entities such as the notification strategy (grouping and merging, notification routing, and channels), subscription (event filtering, cross-workspace routing, and legacy product event subscription), and response plan (escalation, repeated notifications, automatic recovery, and action integration).
   */
  notifyPolicy?: NotifyPolicy;
  /**
   * @remarks
   * The unique ID of the request. This ID is used for troubleshooting and ticket tracking.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notifyPolicy: 'notifyPolicy',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPolicy: NotifyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.notifyPolicy && typeof (this.notifyPolicy as any).validate === 'function') {
      (this.notifyPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

