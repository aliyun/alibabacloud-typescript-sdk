// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceInfoResponseBodyConfInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  activeNum?: number;
  /**
   * @example
   * 2
   */
  attendNum?: number;
  /**
   * @example
   * 1000000
   */
  confDuration?: number;
  /**
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  /**
   * @example
   * 208579
   */
  creatorId?: string;
  creatorNick?: string;
  /**
   * @example
   * 1663294270000
   */
  endTime?: number;
  /**
   * @example
   * https://meeting.dingtalk.com/app?roomCode=42726xxx&token=1_7ac9xxx
   */
  externalLinkUrl?: string;
  /**
   * @example
   * 2
   */
  invitedNum?: number;
  /**
   * @example
   * 4272xxxxx
   */
  roomCode?: string;
  /**
   * @example
   * 1663293270000
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      activeNum: 'ActiveNum',
      attendNum: 'AttendNum',
      confDuration: 'ConfDuration',
      conferenceId: 'ConferenceId',
      creatorId: 'CreatorId',
      creatorNick: 'CreatorNick',
      endTime: 'EndTime',
      externalLinkUrl: 'ExternalLinkUrl',
      invitedNum: 'InvitedNum',
      roomCode: 'RoomCode',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeNum: 'number',
      attendNum: 'number',
      confDuration: 'number',
      conferenceId: 'string',
      creatorId: 'string',
      creatorNick: 'string',
      endTime: 'number',
      externalLinkUrl: 'string',
      invitedNum: 'number',
      roomCode: 'string',
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

