// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOncallSchedulesResponseBodyOncallSchedulesRotations extends $dara.Model {
  activeDays?: number[];
  contacts?: string[];
  /**
   * @example
   * 24:00
   */
  rotationEndTime?: string;
  /**
   * @example
   * testName
   */
  rotationName?: string;
  /**
   * @example
   * 00:00
   */
  rotationStartTime?: string;
  /**
   * @example
   * 3
   */
  shiftLength?: number;
  /**
   * @example
   * WEEKLY
   */
  shiftRecurrenceFrequency?: string;
  /**
   * @example
   * 2024-01-01
   */
  startDate?: string;
  /**
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

export class ListOncallSchedulesResponseBodyOncallSchedules extends $dara.Model {
  /**
   * @example
   * testId
   */
  oncallScheduleId?: string;
  /**
   * @example
   * testName
   */
  oncallScheduleName?: string;
  rotations?: ListOncallSchedulesResponseBodyOncallSchedulesRotations[];
  /**
   * @example
   * testId
   */
  shiftRobotId?: string;
  substitudes?: ListOncallSchedulesResponseBodyOncallSchedulesSubstitudes[];
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
  oncallSchedules?: ListOncallSchedulesResponseBodyOncallSchedules[];
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
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

