// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MqConsoleLinkResult extends $dara.Model {
  groupLinkUrl?: string;
  requestId?: string;
  topicLinkUrl?: string;
  static names(): { [key: string]: string } {
    return {
      groupLinkUrl: 'groupLinkUrl',
      requestId: 'requestId',
      topicLinkUrl: 'topicLinkUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupLinkUrl: 'string',
      requestId: 'string',
      topicLinkUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

