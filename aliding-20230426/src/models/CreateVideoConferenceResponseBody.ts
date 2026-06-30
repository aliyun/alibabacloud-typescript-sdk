// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoConferenceResponseBody extends $dara.Model {
  conferenceId?: string;
  conferencePassword?: string;
  externalLinkUrl?: string;
  hostPassword?: string;
  phoneNumbers?: string[];
  requestId?: string;
  roomCode?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'conferenceId',
      conferencePassword: 'conferencePassword',
      externalLinkUrl: 'externalLinkUrl',
      hostPassword: 'hostPassword',
      phoneNumbers: 'phoneNumbers',
      requestId: 'requestId',
      roomCode: 'roomCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      conferencePassword: 'string',
      externalLinkUrl: 'string',
      hostPassword: 'string',
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      roomCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phoneNumbers)) {
      $dara.Model.validateArray(this.phoneNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

