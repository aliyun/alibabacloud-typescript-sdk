// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSubscribedCalendarRequestSubscribeScope } from "./CreateSubscribedCalendarRequestSubscribeScope";


export class CreateSubscribedCalendarRequest extends $dara.Model {
  description?: string;
  managers?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subscribeScope?: CreateSubscribedCalendarRequestSubscribeScope;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      managers: 'Managers',
      name: 'Name',
      subscribeScope: 'SubscribeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      managers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      subscribeScope: CreateSubscribedCalendarRequestSubscribeScope,
    };
  }

  validate() {
    if(Array.isArray(this.managers)) {
      $dara.Model.validateArray(this.managers);
    }
    if(this.subscribeScope && typeof (this.subscribeScope as any).validate === 'function') {
      (this.subscribeScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

