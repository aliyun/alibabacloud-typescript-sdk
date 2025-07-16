// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscribedCalendarRequestSubscribeScope extends $dara.Model {
  corpIds?: string[];
  openConversationIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      corpIds: 'CorpIds',
      openConversationIds: 'OpenConversationIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIds: { 'type': 'array', 'itemType': 'string' },
      openConversationIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.corpIds)) {
      $dara.Model.validateArray(this.corpIds);
    }
    if(Array.isArray(this.openConversationIds)) {
      $dara.Model.validateArray(this.openConversationIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

