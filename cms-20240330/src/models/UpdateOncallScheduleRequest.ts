// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOncallScheduleRequestRotations extends $dara.Model {
  /**
   * @remarks
   * The days of the week when the rotation takes effect.
   * 
   * This parameter is required.
   */
  activeDays?: number[];
  /**
   * @remarks
   * The IDs of the contacts.
   * 
   * This parameter is required.
   */
  contacts?: string[];
  /**
   * @remarks
   * The end time of the rotation. Format: HH:mm.
   * 
   * This parameter is required.
   * 
   * @example
   * 24:00
   */
  rotationEndTime?: string;
  /**
   * @remarks
   * The name of the rotation.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  rotationName?: string;
  /**
   * @remarks
   * The start time of the rotation. Format: HH:mm.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:00
   */
  rotationStartTime?: string;
  /**
   * @remarks
   * The length of the shift cycle. Used in conjunction with shiftRecurrenceFrequency, such as switching to the next on-call person every 3 days.
   * 
   * @example
   * 3
   */
  shiftLength?: number;
  /**
   * @remarks
   * The unit of the shift cycle. Used in conjunction with shiftRecurrenceFrequency, such as switching to the next on-call person every week.
   * 
   * This parameter is required.
   * 
   * @example
   * WEEKLY
   */
  shiftRecurrenceFrequency?: string;
  /**
   * @remarks
   * The start date of the rotation. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-04-04
   */
  startDate?: string;
  /**
   * @remarks
   * The time zone name. Uses the IANA Time Zone Database standard, such as Asia/Shanghai.
   * 
   * This parameter is required.
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

export class UpdateOncallScheduleRequestSubstitudes extends $dara.Model {
  /**
   * @remarks
   * The contact ID of the substitute.
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
   * The contact ID of the replaced person.
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

export class UpdateOncallScheduleRequest extends $dara.Model {
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
  rotations?: UpdateOncallScheduleRequestRotations[];
  /**
   * @remarks
   * The ID of the shift reminder chatbot.
   * 
   * @example
   * testId
   */
  shiftRobotId?: string;
  /**
   * @remarks
   * The list of substitution rules.
   */
  substitudes?: UpdateOncallScheduleRequestSubstitudes[];
  static names(): { [key: string]: string } {
    return {
      oncallScheduleName: 'oncallScheduleName',
      rotations: 'rotations',
      shiftRobotId: 'shiftRobotId',
      substitudes: 'substitudes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oncallScheduleName: 'string',
      rotations: { 'type': 'array', 'itemType': UpdateOncallScheduleRequestRotations },
      shiftRobotId: 'string',
      substitudes: { 'type': 'array', 'itemType': UpdateOncallScheduleRequestSubstitudes },
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

