// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceInfoResponseBodyConfInfo extends $dara.Model {
  activeNum?: number;
  attendNum?: number;
  confDuration?: number;
  conferenceId?: string;
  creatorId?: string;
  creatorNick?: string;
  endTime?: number;
  externalLinkUrl?: string;
  invitedNum?: number;
  roomCode?: string;
  startTime?: number;
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

export class QueryConferenceInfoResponseBody extends $dara.Model {
  confInfo?: QueryConferenceInfoResponseBodyConfInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      confInfo: 'confInfo',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confInfo: QueryConferenceInfoResponseBodyConfInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.confInfo && typeof (this.confInfo as any).validate === 'function') {
      (this.confInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

