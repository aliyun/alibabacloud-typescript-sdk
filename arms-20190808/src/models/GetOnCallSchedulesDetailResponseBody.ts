// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntriesSimpleContact extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * 员工1
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
   * The end time of the on-call duty for the contact.
   * 
   * @example
   * 2022-10-30
   */
  end?: string;
  /**
   * @remarks
   * Details of the final on-call contact.
   */
  simpleContact?: GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntriesSimpleContact;
  /**
   * @remarks
   * The start time of the on-call duty for the contact.
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
   * The contact ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * 员工1
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
   * The start time of the on-call duty for the contact.
   * 
   * @example
   * 2022-10-01
   */
  start?: string;
  /**
   * @remarks
   * The end time of the on-call duty for the contact.
   * 
   * @example
   * 2022-10-30
   */
  end?: string;
  /**
   * @remarks
   * Details of the on-duty contact.
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
   * The substitute ID.
   * 
   * @example
   * 234
   */
  id?: number;
  /**
   * @remarks
   * The substitute name.
   * 
   * @example
   * 员工2
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
   * The end time of the on-call duty for the substitute.
   * 
   * @example
   * 2022-10-30
   */
  end?: string;
  /**
   * @remarks
   * Details of the substitute.
   */
  simpleContact?: GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntriesSimpleContact;
  /**
   * @remarks
   * The start time of the on-call duty for the substitute.
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
   * The end time for on-call duty each day.
   * 
   * @example
   * 18:00
   */
  endTimeOfDay?: string;
  /**
   * @remarks
   * The type of restriction. Valid values:
   * 
   * - `daily_restriction`: A daily time-based restriction.
   * 
   * - `weekly_restriction`: A weekly time-based restriction.
   * 
   * @example
   * daily_restriction
   */
  restrictionType?: string;
  /**
   * @remarks
   * The start time for on-call duty each day.
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
   * A list of contact IDs for the schedule layer.
   */
  contactIds?: number[];
  /**
   * @remarks
   * A list of restrictions for the schedule layer.
   */
  restrictions?: GetOnCallSchedulesDetailResponseBodyDataScheduleLayersRestrictions[];
  /**
   * @remarks
   * The rotation type. Valid values:
   * 
   * - `DAY`: Rotates every day.
   * 
   * - `WEEK`: Rotates every week.
   * 
   * - `CUSTOM`: Rotates based on a custom schedule.
   * 
   * @example
   * DAY
   */
  rotationType?: string;
  /**
   * @remarks
   * The shift length for the rotation, in hours.
   * 
   * @example
   * 8
   */
  shiftLength?: number;
  /**
   * @remarks
   * The start time for the rotation.
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
   * The webhook URL of the DingTalk bot for rotation notifications.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=69d4e009547e11069c6513309414937b7bf0482fb9284125b5******
   */
  alertRobotId?: number;
  /**
   * @remarks
   * The description of the on-call schedule.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * The ID of the on-call schedule.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The name of the on-call schedule.
   * 
   * @example
   * 排班策略测试
   */
  name?: string;
  /**
   * @remarks
   * The final list of on-call contacts, after accounting for all rotations and substitutions.
   */
  renderedFinnalEntries?: GetOnCallSchedulesDetailResponseBodyDataRenderedFinnalEntries[];
  /**
   * @remarks
   * A list of contacts on duty within the specified time range, as defined by the schedule layers.
   */
  renderedLayerEntries?: GetOnCallSchedulesDetailResponseBodyDataRenderedLayerEntries[][];
  /**
   * @remarks
   * A list of substitutes scheduled within the specified time range.
   */
  renderedSubstitudeEntries?: GetOnCallSchedulesDetailResponseBodyDataRenderedSubstitudeEntries[];
  /**
   * @remarks
   * A list of schedule layers.
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
   * The details of the on-call schedule.
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

