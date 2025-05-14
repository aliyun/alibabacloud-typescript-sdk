// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleConferenceResponseBody extends $dara.Model {
  /**
   * @example
   * +861234567
   */
  phones?: string[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 1234567
   */
  requestId?: string;
  /**
   * @example
   * 83150xxxxxx
   */
  roomCode?: string;
  /**
   * @example
   * 5c7c9bb1-b256-4dc5-xxxx-xxxxxxxxxxxx
   */
  scheduleConferenceId?: string;
  /**
   * @example
   * https://meeting.dingtalk.com/j/knvMq1ixxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      phones: 'phones',
      requestId: 'requestId',
      roomCode: 'roomCode',
      scheduleConferenceId: 'scheduleConferenceId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phones: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      roomCode: 'string',
      scheduleConferenceId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phones)) {
      $dara.Model.validateArray(this.phones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

