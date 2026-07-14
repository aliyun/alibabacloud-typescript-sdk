// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyPolicy } from "./NotifyPolicy";


export class CreateNotifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The notification policy object details, including the policy UUID, name, description, enabled status, and sub-entities such as notification strategy (grouping, noise reduction, notification routing, and channels), subscription (event filtering, cross-workspace routing, and legacy product event subscription), and response plan (upgrade, repeated notification, automatic recovery, and action integration).
   */
  notifyPolicy?: NotifyPolicy;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID for troubleshooting and ticket tracking.
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

