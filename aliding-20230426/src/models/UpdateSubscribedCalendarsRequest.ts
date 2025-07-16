// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscribedCalendarsRequestSubscribeScope extends $dara.Model {
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscribedCalendarsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * M5MjkxNDUxQHVzZXJzLmRpbmd0YWxrLmNv
   */
  calendarId?: string;
  description?: string;
  managers?: string[];
  name?: string;
  subscribeScope?: UpdateSubscribedCalendarsRequestSubscribeScope;
  static names(): { [key: string]: string } {
    return {
      calendarId: 'CalendarId',
      description: 'Description',
      managers: 'Managers',
      name: 'Name',
      subscribeScope: 'SubscribeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarId: 'string',
      description: 'string',
      managers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      subscribeScope: UpdateSubscribedCalendarsRequestSubscribeScope,
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

