// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceInfoByRoomCodeResponseBodyConferenceList extends $dara.Model {
  /**
   * @example
   * 3
   */
  bizType?: string;
  /**
   * @example
   * 1000
   */
  confDuration?: number;
  /**
   * @example
   * 636cf59f2b032f014ae32902
   */
  conferenceId?: string;
  /**
   * @example
   * 527079
   */
  creatorId?: string;
  creatorNick?: string;
  /**
   * @example
   * 1668087732000
   */
  endTime?: number;
  /**
   * @example
   * https//:xxx
   */
  externalLinkUrl?: string;
  /**
   * @example
   * 123456789
   */
  roomCode?: string;
  /**
   * @example
   * 2d79cbde-b9d8-4256-9788-78b05834944e
   */
  scheduleConferenceId?: string;
  /**
   * @example
   * 1668087731000
   */
  startTime?: number;
  /**
   * @example
   * 2
   */
  status?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      confDuration: 'ConfDuration',
      conferenceId: 'ConferenceId',
      creatorId: 'CreatorId',
      creatorNick: 'CreatorNick',
      endTime: 'EndTime',
      externalLinkUrl: 'ExternalLinkUrl',
      roomCode: 'RoomCode',
      scheduleConferenceId: 'ScheduleConferenceId',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      confDuration: 'number',
      conferenceId: 'string',
      creatorId: 'string',
      creatorNick: 'string',
      endTime: 'number',
      externalLinkUrl: 'string',
      roomCode: 'string',
      scheduleConferenceId: 'string',
      startTime: 'number',
      status: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

