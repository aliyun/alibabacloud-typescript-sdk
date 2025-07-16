// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduleResponseBodyScheduleInformationScheduleItemsEnd extends $dara.Model {
  /**
   * @example
   * 2020-01-01
   */
  date?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  dateTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateTime: 'DateTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
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

export class GetScheduleResponseBodyScheduleInformationScheduleItemsStart extends $dara.Model {
  /**
   * @example
   * 2020-01-01
   */
  date?: string;
  /**
   * @example
   * 2020-01-01T10:15:30+08:00
   */
  dateTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateTime: 'DateTime',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
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

export class GetScheduleResponseBodyScheduleInformationScheduleItems extends $dara.Model {
  end?: GetScheduleResponseBodyScheduleInformationScheduleItemsEnd;
  start?: GetScheduleResponseBodyScheduleInformationScheduleItemsStart;
  /**
   * @example
   * BUSY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: GetScheduleResponseBodyScheduleInformationScheduleItemsEnd,
      start: GetScheduleResponseBodyScheduleInformationScheduleItemsStart,
      status: 'string',
    };
  }

  validate() {
    if(this.end && typeof (this.end as any).validate === 'function') {
      (this.end as any).validate();
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

export class GetScheduleResponseBodyScheduleInformation extends $dara.Model {
  /**
   * @example
   * 无权限
   */
  error?: string;
  scheduleItems?: GetScheduleResponseBodyScheduleInformationScheduleItems[];
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      scheduleItems: 'ScheduleItems',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      scheduleItems: { 'type': 'array', 'itemType': GetScheduleResponseBodyScheduleInformationScheduleItems },
      userId: 'string',
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

export class GetScheduleResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  scheduleInformation?: GetScheduleResponseBodyScheduleInformation[];
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
      requestId: 'requestId',
      scheduleInformation: 'scheduleInformation',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleInformation: { 'type': 'array', 'itemType': GetScheduleResponseBodyScheduleInformation },
      vendorRequestId: 'string',
      vendorType: 'string',
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

