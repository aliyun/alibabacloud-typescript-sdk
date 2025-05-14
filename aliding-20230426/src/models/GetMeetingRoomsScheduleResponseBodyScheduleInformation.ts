// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItems } from "./GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItems";


export class GetMeetingRoomsScheduleResponseBodyScheduleInformation extends $dara.Model {
  /**
   * @example
   * 无权限
   */
  error?: string;
  /**
   * @example
   * 4002f89xxxxx
   */
  roomId?: string;
  scheduleItems?: GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItems[];
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      roomId: 'RoomId',
      scheduleItems: 'ScheduleItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      roomId: 'string',
      scheduleItems: { 'type': 'array', 'itemType': GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItems },
    };
  }

  validate() {
    if(Array.isArray(this.scheduleItems)) {
      $dara.Model.validateArray(this.scheduleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

