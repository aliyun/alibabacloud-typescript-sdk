// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMeetingRoomsScheduleResponseBodyScheduleInformation } from "./GetMeetingRoomsScheduleResponseBodyScheduleInformation";


export class GetMeetingRoomsScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  scheduleInformation?: GetMeetingRoomsScheduleResponseBodyScheduleInformation[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      scheduleInformation: 'scheduleInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleInformation: { 'type': 'array', 'itemType': GetMeetingRoomsScheduleResponseBodyScheduleInformation },
    };
  }

  validate() {
    if(Array.isArray(this.scheduleInformation)) {
      $dara.Model.validateArray(this.scheduleInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

