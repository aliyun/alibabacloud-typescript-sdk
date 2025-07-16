// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScheduleConferenceInfoResponseBodyConferenceList extends $dara.Model {
  /**
   * @example
   * 636cf59f2b032f014ae32902
   */
  conferenceId?: string;
  /**
   * @example
   * 1668087732000
   */
  endTime?: number;
  /**
   * @example
   * 123456789
   */
  roomCode?: string;
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
  /**
   * @example
   * xxx发起的视频会议
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      conferenceId: 'ConferenceId',
      endTime: 'EndTime',
      roomCode: 'RoomCode',
      startTime: 'StartTime',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceId: 'string',
      endTime: 'number',
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

export class QueryScheduleConferenceInfoResponseBody extends $dara.Model {
  conferenceList?: QueryScheduleConferenceInfoResponseBodyConferenceList[];
  /**
   * @example
   * 19
   */
  nextToken?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
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
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conferenceList: { 'type': 'array', 'itemType': QueryScheduleConferenceInfoResponseBodyConferenceList },
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

