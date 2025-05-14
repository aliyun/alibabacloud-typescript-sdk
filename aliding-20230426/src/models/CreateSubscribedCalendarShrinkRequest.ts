// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscribedCalendarShrinkRequest extends $dara.Model {
  description?: string;
  managersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subscribeScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      managersShrink: 'Managers',
      name: 'Name',
      subscribeScopeShrink: 'SubscribeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      managersShrink: 'string',
      name: 'string',
      subscribeScopeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

