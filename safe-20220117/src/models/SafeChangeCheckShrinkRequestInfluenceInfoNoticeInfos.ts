// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeCheckShrinkRequestInfluenceInfoNoticeInfos extends $dara.Model {
  channel?: string[];
  content?: string;
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      content: 'Content',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': 'string' },
      content: 'string',
      eventId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

