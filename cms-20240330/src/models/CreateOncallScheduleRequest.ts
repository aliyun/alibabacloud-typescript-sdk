// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOncallScheduleRequestRotations extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  activeDays?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  contacts?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24:00
   */
  rotationEndTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testRotationName
   */
  rotationName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 00:00
   */
  rotationStartTime?: string;
  /**
   * @example
   * 1
   */
  shiftLength?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WEEKLY
   */
  shiftRecurrenceFrequency?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-08-14
   */
  startDate?: string;
  /**
   * @remarks
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

export class CreateOncallScheduleRequestSubstitudes extends $dara.Model {
  /**
   * @example
   * testId
   */
  contactId?: string;
  /**
   * @example
   * 2024-10-15 18:00
   */
  endTime?: string;
  /**
   * @example
   * testId
   */
  replacedContactId?: string;
  /**
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

export class CreateOncallScheduleRequest extends $dara.Model {
  /**
   * @example
   * testOncallScheduleId
   */
  oncallScheduleId?: string;
  /**
   * @example
   * testOncallScheduleName
   */
  oncallScheduleName?: string;
  rotations?: CreateOncallScheduleRequestRotations[];
  /**
   * @example
   * testRobotId
   */
  shiftRobotId?: string;
  substitudes?: CreateOncallScheduleRequestSubstitudes[];
  /**
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
      rotations: { 'type': 'array', 'itemType': CreateOncallScheduleRequestRotations },
      shiftRobotId: 'string',
      substitudes: { 'type': 'array', 'itemType': CreateOncallScheduleRequestSubstitudes },
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

