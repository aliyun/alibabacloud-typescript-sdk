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

