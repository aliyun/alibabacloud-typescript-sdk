// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConferenceInfoByRoomCodeResponseBodyConferenceList extends $dara.Model {
  bizType?: string;
  confDuration?: number;
  conferenceId?: string;
  creatorId?: string;
  creatorNick?: string;
  endTime?: number;
  externalLinkUrl?: string;
  roomCode?: string;
  scheduleConferenceId?: string;
  startTime?: number;
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

export class QueryConferenceInfoByRoomCodeResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  conferenceList?: QueryConferenceInfoByRoomCodeResponseBodyConferenceList[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  dingtalkRequestId?: string;
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  totalCount?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceList: 'conferenceList',
      dingtalkRequestId: 'dingtalkRequestId',
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceList: { 'type': 'array', 'itemType': QueryConferenceInfoByRoomCodeResponseBodyConferenceList },
      dingtalkRequestId: 'string',
      hasMore: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conferenceList)) {
      $dara.Model.validateArray(this.conferenceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

