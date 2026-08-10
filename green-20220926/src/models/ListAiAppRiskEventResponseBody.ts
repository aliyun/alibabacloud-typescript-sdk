// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiAppRiskEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-03-25 10:22:02
   */
  endTime?: string;
  /**
   * @remarks
   * The event code that identifies the type or category of the event.
   * 
   * @example
   * hit-xxxx
   */
  eventCode?: string;
  /**
   * @remarks
   * The event description that provides details about the risk event.
   * 
   * @example
   * desc-xxx
   */
  eventDesc?: string;
  /**
   * @remarks
   * The event description in English.
   * 
   * @example
   * desc-xxx
   */
  eventDescEn?: string;
  /**
   * @remarks
   * The event ID that uniquely identifies a risk event.
   * 
   * @example
   * id-xxx
   */
  eventId?: string;
  /**
   * @remarks
   * The event name that briefly describes the risk event.
   * 
   * @example
   * name-xxx
   */
  eventName?: string;
  /**
   * @remarks
   * The label used to mark or categorize the event.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The label description that provides details about the label.
   * 
   * @example
   * desc-xxx
   */
  labelDesc?: string;
  /**
   * @remarks
   * The risk level that indicates the severity of the event, such as high, medium, or low.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The effective period. Format: YYYY-MM-DD HH:mm:ss (default time zone: UTC+08:00).
   * 
   * @example
   * 2025-07-22 16:41:15
   */
  startTime?: string;
  /**
   * @remarks
   * The event status that indicates the current processing state of the event, such as pending or resolved.
   * 
   * @example
   * resovled
   */
  status?: string;
  /**
   * @remarks
   * The event type that indicates the category of the risk event, such as security or performance.
   * 
   * @example
   * sensitiveData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventCode: 'EventCode',
      eventDesc: 'EventDesc',
      eventDescEn: 'EventDescEn',
      eventId: 'EventId',
      eventName: 'EventName',
      label: 'Label',
      labelDesc: 'LabelDesc',
      level: 'Level',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventCode: 'string',
      eventDesc: 'string',
      eventDescEn: 'string',
      eventId: 'string',
      eventName: 'string',
      label: 'string',
      labelDesc: 'string',
      level: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiAppRiskEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAiAppRiskEventResponseBodyData[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. This ID can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
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
      data: { 'type': 'array', 'itemType': ListAiAppRiskEventResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

