// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsEnd } from "./GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsEnd";
import { GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsOrganizer } from "./GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsOrganizer";
import { GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsStart } from "./GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsStart";


export class GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItems extends $dara.Model {
  end?: GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsEnd;
  /**
   * @example
   * UzZvxxxxx
   */
  eventId?: string;
  organizer?: GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsOrganizer;
  start?: GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsStart;
  /**
   * @example
   * BUSY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      eventId: 'EventId',
      organizer: 'Organizer',
      start: 'Start',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsEnd,
      eventId: 'string',
      organizer: GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsOrganizer,
      start: GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsStart,
      status: 'string',
    };
  }

  validate() {
    if(this.end && typeof (this.end as any).validate === 'function') {
      (this.end as any).validate();
    }
    if(this.organizer && typeof (this.organizer as any).validate === 'function') {
      (this.organizer as any).validate();
    }
    if(this.start && typeof (this.start as any).validate === 'function') {
      (this.start as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

