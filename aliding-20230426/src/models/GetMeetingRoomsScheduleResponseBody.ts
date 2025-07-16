// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsEnd extends $dara.Model {
  /**
   * @example
   * 2020-01-02T10:15:30+08:00
   */
  dateTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'DateTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsOrganizer extends $dara.Model {
  /**
   * @example
   * 012345
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingRoomsScheduleResponseBodyScheduleInformationScheduleItemsStart extends $dara.Model {
  /**
   * @example
   * 2020-01-02T10:15:30+08:00
   */
  dateTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'DateTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

