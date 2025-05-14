// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscribedCalendarResponseBodySubscribeScope extends $dara.Model {
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

