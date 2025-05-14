// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScheduleConferenceResponseBody extends $dara.Model {
  /**
   * @example
   * 1687928400000
   */
  endTime?: number;
  /**
   * @example
   * [ "+86123xxxx" ]
   */
  phones?: string[];
  /**
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @example
   * 838 722 xxxxx
   */
  roomCode?: string;
  /**
   * @example
   * 2a489c68-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  scheduleConferenceId?: string;
  /**
   * @example
   * 1687924800000
   */
  startTime?: number;
  /**
   * @example
   * 预约会议标题
   */
  title?: string;
  /**
   * @example
   * https://meeting.dingtalk.com/j/Bsbp3ixxxxxUyJJ9
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      phones: 'phones',
      requestId: 'requestId',
      roomCode: 'roomCode',
      scheduleConferenceId: 'scheduleConferenceId',
      startTime: 'startTime',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      phones: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      roomCode: 'string',
      scheduleConferenceId: 'string',
      startTime: 'number',
      title: 'string',
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

