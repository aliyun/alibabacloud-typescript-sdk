// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOncallSchedulesResponseBodyOncallSchedulesRotations extends $dara.Model {
  /**
   * @remarks
   * The days of the week when the rotation is active.
   */
  activeDays?: number[];
  /**
   * @remarks
   * The IDs of the contacts.
   */
  contacts?: string[];
  /**
   * @remarks
   * The end time of the rotation. Format: HH:mm.
   * 
   * @example
   * 24:00
   */
  rotationEndTime?: string;
  /**
   * @remarks
   * The name of the rotation.
   * 
   * @example
   * testName
   */
  rotationName?: string;
  /**
   * @remarks
   * The start time of the rotation. Format: HH:mm.
   * 
   * @example
   * 00:00
   */
  rotationStartTime?: string;
  /**
   * @remarks
   * The length of the shift interval. Used in conjunction with shiftRecurrenceFrequency. For example, a value of 3 indicates that the on-call personnel rotates every 3 days.
   * 
   * @example
   * 3
   */
  shiftLength?: number;
  /**
   * @remarks
   * The unit of the shift interval. Used in conjunction with shiftLength. For example, a value of Week indicates that the on-call personnel rotates every week.
   * 
   * @example
   * WEEKLY
   */
  shiftRecurrenceFrequency?: string;
  /**
   * @remarks
   * The start date of the rotation. Format: yyyy-MM-dd.
   * 
   * @example
   * 2024-01-01
   */
  startDate?: string;
  /**
   * @remarks
   * The name of the time zone. The IANA Time Zone Database standard is used. Example: Asia/Shanghai.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      activeDays: 'activeDays',
      contacts: 'contacts',
      rotationEndTime: 'rotationEndTime',
      rotationName: 'rotationName',
      rotationStartTime: 'rotationStartTime',
      shiftLength: 'shiftLength',
      shiftRecurrenceFrequency: 'shiftRecurrenceFrequency',
      startDate: 'startDate',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDays: { 'type': 'array', 'itemType': 'number' },
      contacts: { 'type': 'array', 'itemType': 'string' },
      rotationEndTime: 'string',
      rotationName: 'string',
      rotationStartTime: 'string',
      shiftLength: 'number',
      shiftRecurrenceFrequency: 'string',
      startDate: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.activeDays)) {
      $dara.Model.validateArray(this.activeDays);
    }
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOncallSchedulesResponseBodyOncallSchedulesSubstitudes extends $dara.Model {
  /**
   * @remarks
   * The ID of the substitute contact.
   * 
   * @example
   * testId
   */
  contactId?: string;
  /**
   * @remarks
   * The end time of the substitution. Format: YYYY-MM-DD HH:mm.
   * 
   * @example
   * 2024-10-15 18:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the replaced contact.
   * 
   * @example
   * testId
   */
  replacedContactId?: string;
  /**
   * @remarks
   * The start time of the substitution. Format: YYYY-MM-DD HH:mm.
   * 
   * @example
   * 2024-10-10 09:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      endTime: 'endTime',
      replacedContactId: 'replacedContactId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      endTime: 'string',
      replacedContactId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOncallSchedulesResponseBodyOncallSchedules extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the on-call schedule.
   * 
   * @example
   * testId
   */
  oncallScheduleId?: string;
  /**
   * @remarks
   * The name of the on-call schedule.
   * 
   * @example
   * testName
   */
  oncallScheduleName?: string;
  /**
   * @remarks
   * The list of rotations.
   */
  rotations?: ListOncallSchedulesResponseBodyOncallSchedulesRotations[];
  /**
   * @remarks
   * The ID of the chatbot that sends shift reminders.
   * 
   * @example
   * testId
   */
  shiftRobotId?: string;
  /**
   * @remarks
   * The list of substitution rules.
   */
  substitudes?: ListOncallSchedulesResponseBodyOncallSchedulesSubstitudes[];
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * default-cms-5884500827389836-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      oncallScheduleId: 'oncallScheduleId',
      oncallScheduleName: 'oncallScheduleName',
      rotations: 'rotations',
      shiftRobotId: 'shiftRobotId',
      substitudes: 'substitudes',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oncallScheduleId: 'string',
      oncallScheduleName: 'string',
      rotations: { 'type': 'array', 'itemType': ListOncallSchedulesResponseBodyOncallSchedulesRotations },
      shiftRobotId: 'string',
      substitudes: { 'type': 'array', 'itemType': ListOncallSchedulesResponseBodyOncallSchedulesSubstitudes },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rotations)) {
      $dara.Model.validateArray(this.rotations);
    }
    if(Array.isArray(this.substitudes)) {
      $dara.Model.validateArray(this.substitudes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOncallSchedulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of on-call schedules.
   */
  oncallSchedules?: ListOncallSchedulesResponseBodyOncallSchedules[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      oncallSchedules: 'oncallSchedules',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oncallSchedules: { 'type': 'array', 'itemType': ListOncallSchedulesResponseBodyOncallSchedules },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.oncallSchedules)) {
      $dara.Model.validateArray(this.oncallSchedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

