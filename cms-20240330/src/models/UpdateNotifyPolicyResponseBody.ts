// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyPolicy } from "./NotifyPolicy";


export class UpdateNotifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the notification policy object, including the policy UUID, name, description, and enabling status, as well as sub-entities such as the notification policy (group merging, notification routing, and channels), subscriptions (event filtering, cross-workspace routing, and legacy product event subscriptions), and response plans (escalation, repeated notifications, automatic recovery, and action integration).
   */
  notifyPolicy?: NotifyPolicy;
  /**
   * @remarks
   * The unique ID of the request, which is used for troubleshooting and ticket tracking.
   * 
   * @example
   * 70D52620-2609-1802-9788-6BC592C83F03
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

