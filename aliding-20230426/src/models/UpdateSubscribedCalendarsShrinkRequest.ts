// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscribedCalendarsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * M5MjkxNDUxQHVzZXJzLmRpbmd0YWxrLmNv
   */
  calendarId?: string;
  description?: string;
  managersShrink?: string;
  name?: string;
  subscribeScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      description: 'Description',
      managersShrink: 'Managers',
      name: 'Name',
      subscribeScopeShrink: 'SubscribeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
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

