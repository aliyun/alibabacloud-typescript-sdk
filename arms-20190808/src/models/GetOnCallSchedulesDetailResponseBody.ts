// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntriesSimpleContact extends $dara.Model {
  /**
   * @remarks
   * The ID of the user on duty.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the user on duty.
   * 
   * @example
   * Employee 1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntries extends $dara.Model {
  /**
   * @remarks
   * The date on which the user completed shift work.
   * 
   * @example
   * 2022-10-30
   */
  end?: string;
  /**
   * @remarks
   * The information about the user on duty.
   */
  simpleContact?: GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntriesSimpleContact;
  /**
   * @remarks
   * The date from which the user started shift work.
   * 
   * @example
   * 2022-10-01
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      simpleContact: 'SimpleContact',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      simpleContact: GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntriesSimpleContact,
      start: 'string',
    };
  }

  validate() {
    if(this.simpleContact && typeof (this.simpleContact as any).validate === 'function') {
      (this.simpleContact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyDataRenderedLayerEntriesSimpleContact extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled user.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the scheduled user.
   * 
   * @example
   * Employee 1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyDataRenderedLayerEntries extends $dara.Model {
  /**
   * @remarks
   * The date from which the scheduled user was supposed to start shift work.
   * 
   * @example
   * 2022-10-01
   */
  start?: string;
  /**
   * @remarks
   * The date on which the scheduled user was supposed to complete shift work.
   * 
   * @example
   * 2022-10-30
   */
  end?: string;
  /**
   * @remarks
   * The information about the scheduled user.
   */
  simpleContact?: GetOnCallSchedulesDetailResponseBodyDataRenderedLayerEntriesSimpleContact;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      end: 'End',
      simpleContact: 'SimpleContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      end: 'string',
      simpleContact: GetOnCallSchedulesDetailResponseBodyDataRenderedLayerEntriesSimpleContact,
    };
  }

  validate() {
    if(this.simpleContact && typeof (this.simpleContact as any).validate === 'function') {
      (this.simpleContact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntriesSimpleContact extends $dara.Model {
  /**
   * @remarks
   * The ID of the substitute.
   * 
   * @example
   * 234
   */
  id?: number;
  /**
   * @remarks
   * The name of the substitute.
   * 
   * @example
   * Employee 2
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntries extends $dara.Model {
  /**
   * @remarks
   * The date on which the substitute was supposed to complete shift work.
   * 
   * @example
   * 2022-10-30
   */
  end?: string;
  /**
   * @remarks
   * The information about the substitute.
   */
  simpleContact?: GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntriesSimpleContact;
  /**
   * @remarks
   * The date from which the substitute was supposed to start shift work.
   * 
   * @example
   * 2022-10-01
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      simpleContact: 'SimpleContact',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      simpleContact: GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntriesSimpleContact,
      start: 'string',
    };
  }

  validate() {
    if(this.simpleContact && typeof (this.simpleContact as any).validate === 'function') {
      (this.simpleContact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyDataScheduleLayersRestrictions extends $dara.Model {
  /**
   * @remarks
   * The end time of the shift per day.
   * 
   * @example
   * 18:00
   */
  endTimeOfDay?: string;
  /**
   * @remarks
   * The type of the limit. Valid values:
   * 
   * *   daily_restriction
   * *   weekly_restriction
   * 
   * @example
   * daily_restriction
   */
  restrictionType?: string;
  /**
   * @remarks
   * The start time of the shift per day.
   * 
   * @example
   * 09:00
   */
  startTimeOfDay?: string;
  static names(): { [key: string]: string } {
    return {
      endTimeOfDay: 'EndTimeOfDay',
      restrictionType: 'RestrictionType',
      startTimeOfDay: 'StartTimeOfDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeOfDay: 'string',
      restrictionType: 'string',
      startTimeOfDay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyDataScheduleLayers extends $dara.Model {
  /**
   * @remarks
   * The ID list of users on duty.
   */
  contactIds?: number[];
  /**
   * @remarks
   * The limit on the time of the shift.
   */
  restrictions?: GetOnCallSchedulesDetailResponseBodyDataScheduleLayersRestrictions[];
  /**
   * @remarks
   * The type of the shift. Valid values:
   * 
   * *   DAY
   * *   WEEK
   * *   CUSTOM
   * 
   * @example
   * DAY
   */
  rotationType?: string;
  /**
   * @remarks
   * The shift cycle. Unit: hours.
   * 
   * @example
   * 8
   */
  shiftLength?: number;
  /**
   * @remarks
   * The date on which the shift change took effect.
   * 
   * @example
   * 2022-10-01
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'ContactIds',
      restrictions: 'Restrictions',
      rotationType: 'RotationType',
      shiftLength: 'ShiftLength',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: { 'type': 'array', 'itemType': 'number' },
      restrictions: { 'type': 'array', 'itemType': GetOnCallSchedulesDetailResponseBodyDataScheduleLayersRestrictions },
      rotationType: 'string',
      shiftLength: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactIds)) {
      $dara.Model.validateArray(this.contactIds);
    }
    if(Array.isArray(this.restrictions)) {
      $dara.Model.validateArray(this.restrictions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the DingTalk chatbot, which is used to receive notifications about shift changes.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=69d4e009547e11069c6513309414937b7bf0482fb9284125b5******
   */
  alertRobotId?: number;
  /**
   * @remarks
   * The description of the scheduling policy.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the scheduling policy.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The name of the scheduling policy.
   * 
   * @example
   * Scheduling policy test
   */
  name?: string;
  /**
   * @remarks
   * The information about the final user on duty.
   */
  renderedFinnalEntries?: GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntries[];
  /**
   * @remarks
   * The scheduled users on duty within a time range.
   */
  renderedLayerEntries?: GetOnCallSchedulesDetailResponseBodyDataRenderedLayerEntries[][];
  /**
   * @remarks
   * The information about the substitutes within a time range.
   */
  renderedSubstitudeEntries?: GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntries[];
  /**
   * @remarks
   * The information about the shift.
   */
  scheduleLayers?: GetOnCallSchedulesDetailResponseBodyDataScheduleLayers[];
  static names(): { [key: string]: string } {
    return {
      alertRobotId: 'AlertRobotId',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      renderedFinnalEntries: 'RenderedFinnalEntries',
      renderedLayerEntries: 'RenderedLayerEntries',
      renderedSubstitudeEntries: 'RenderedSubstitudeEntries',
      scheduleLayers: 'ScheduleLayers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRobotId: 'number',
      description: 'string',
      id: 'number',
      name: 'string',
      renderedFinnalEntries: { 'type': 'array', 'itemType': GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntries },
      renderedLayerEntries: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': GetOnCallSchedulesDetailResponseBodyDataRenderedLayerEntries } },
      renderedSubstitudeEntries: { 'type': 'array', 'itemType': GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntries },
      scheduleLayers: { 'type': 'array', 'itemType': GetOnCallSchedulesDetailResponseBodyDataScheduleLayers },
    };
  }

  validate() {
    if(Array.isArray(this.renderedFinnalEntries)) {
      $dara.Model.validateArray(this.renderedFinnalEntries);
    }
    if(Array.isArray(this.renderedLayerEntries)) {
      $dara.Model.validateArray(this.renderedLayerEntries);
    }
    if(Array.isArray(this.renderedSubstitudeEntries)) {
      $dara.Model.validateArray(this.renderedSubstitudeEntries);
    }
    if(Array.isArray(this.scheduleLayers)) {
      $dara.Model.validateArray(this.scheduleLayers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnCallSchedulesDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the scheduling policy.
   */
  data?: GetOnCallSchedulesDetailResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 21E85B16-75A6-429A-9F65-8AAC9A54****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetOnCallSchedulesDetailResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

