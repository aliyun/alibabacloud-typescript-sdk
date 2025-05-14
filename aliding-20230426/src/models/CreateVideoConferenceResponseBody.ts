// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoConferenceResponseBody extends $dara.Model {
  /**
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  /**
   * @example
   * 1151302294
   */
  conferencePassword?: string;
  /**
   * @example
   * https://pre-meeting.dingtalk.com/app?roomCode=68550708396&token=1_59209c43-431c-4e57-a0f8-11bebdb3db7f
   */
  externalLinkUrl?: string;
  /**
   * @example
   * 2142817614
   */
  hostPassword?: string;
  phoneNumbers?: string[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 3032809F-8C14-57E2-9B76-7AC2134FE3C8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
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

