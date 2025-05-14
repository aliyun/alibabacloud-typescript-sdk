// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeetingRoomsScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["4002xxxxx"]
   */
  roomIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      roomIds: 'RoomIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      roomIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roomIds)) {
      $dara.Model.validateArray(this.roomIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

