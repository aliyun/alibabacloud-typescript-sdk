// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOncallScheduleResponseBodyRotations extends $dara.Model {
  /**
   * @remarks
   * The days of the week when the rotation is active.
   */
  activeDays?: number[];
  /**
   * @remarks
   * The contact ID.
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
   * The length of the shift rotation cycle. Used in combination with shiftRecurrenceFrequency. For example, set this parameter to 3 to rotate to the next on-call contact every 3 days.
   * 
   * @example
   * 4
   */
  shiftLength?: number;
  /**
   * @remarks
   * The unit of the shift rotation cycle. Used in combination with shiftRecurrenceFrequency. For example, set this parameter to Week to rotate to the next on-call contact every week.
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
   * 2024-10-10
   */
  startDate?: string;
  /**
   * @remarks
   * The time zone name based on the IANA Time Zone Database standard. Example: Asia/Shanghai.
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

export class GetOncallScheduleResponseBodySubstitudes extends $dara.Model {
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
   * The contact ID of the replaced contact.
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

export class GetOncallScheduleResponseBody extends $dara.Model {
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
   * testOncallScheduleName
   */
  oncallScheduleName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of rotations.
   */
  rotations?: GetOncallScheduleResponseBodyRotations[];
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
  substitudes?: GetOncallScheduleResponseBodySubstitudes[];
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
      requestId: 'requestId',
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
      requestId: 'string',
      rotations: { 'type': 'array', 'itemType': GetOncallScheduleResponseBodyRotations },
      shiftRobotId: 'string',
      substitudes: { 'type': 'array', 'itemType': GetOncallScheduleResponseBodySubstitudes },
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

