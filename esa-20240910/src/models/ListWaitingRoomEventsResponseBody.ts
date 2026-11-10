// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomEventsResponseBodyWaitingRoomEvents extends $dara.Model {
  /**
   * @remarks
   * The custom content of the waiting room page. This parameter is required when the waiting room type is custom. The content must be URL-encoded.
   * 
   * @example
   * html-yets-maqi1111
   */
  customPageHtml?: string;
  /**
   * @remarks
   * The detailed description of the event.
   * 
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether session renewal is disabled. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * off
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * The enabled status of the event. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The end time of the event. The value is a UNIX timestamp.
   * 
   * @example
   * 1719814497
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to enable JSON responses. If this feature is enabled and the Accept request header contains "application/json", JSON data is returned. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * off
   */
  jsonResponseEnable?: string;
  /**
   * @remarks
   * The language of the waiting room page. This parameter is required when the waiting room type is default. Valid values:
   * 
   * - **enus**: English.
   * - **zhcn**: Simplified Chinese.
   * - **zhhk**: Traditional Chinese.
   * 
   * @example
   * zhcn
   */
  language?: string;
  /**
   * @remarks
   * The event name, which is a custom event description.
   * 
   * @example
   * test event
   */
  name?: string;
  /**
   * @remarks
   * The number of new users per minute.
   * 
   * @example
   * 11
   */
  newUsersPerMinute?: string;
  /**
   * @remarks
   * Specifies whether to enable pre-queuing. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  preQueueEnable?: string;
  /**
   * @remarks
   * The start time of pre-queuing. The value is a UNIX timestamp. This parameter is valid only when pre-queuing is enabled.
   * 
   * @example
   * 1719814097
   */
  preQueueStartTime?: string;
  /**
   * @remarks
   * The queuing method. Valid values:
   * 
   * - **random**: Random.
   * - **fifo**: First-in, first-out (FIFO).
   * - **passthrough**: Passthrough.
   * - **reject-all**: Reject all.
   * 
   * @example
   * fifo
   */
  queuingMethod?: string;
  /**
   * @remarks
   * The waiting room status code. Valid values:
   * 
   * - **200**
   * - **202**
   * - **429**
   * 
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @remarks
   * Specifies whether to enable random pre-queuing. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  randomPreQueueEnable?: string;
  /**
   * @remarks
   * The session duration, in minutes.
   * 
   * @example
   * 3
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The start time of the event. The value is a UNIX timestamp.
   * 
   * @example
   * 1719814398
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of active users.
   * 
   * @example
   * 22
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The event ID, which uniquely identifies a waiting room event.
   * 
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @remarks
   * The ID of the associated waiting room.
   * 
   * @example
   * 5c938a045c9ca46607163d34966****
   */
  waitingRoomId?: string;
  /**
   * @remarks
   * The waiting room type. Valid values:
   * 
   * - **default**: Default type.
   * - **custom**: Custom type.
   * 
   * @example
   * custom
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      endTime: 'EndTime',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      preQueueEnable: 'PreQueueEnable',
      preQueueStartTime: 'PreQueueStartTime',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      randomPreQueueEnable: 'RandomPreQueueEnable',
      sessionDuration: 'SessionDuration',
      startTime: 'StartTime',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomEventId: 'WaitingRoomEventId',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      endTime: 'string',
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      preQueueEnable: 'string',
      preQueueStartTime: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      randomPreQueueEnable: 'string',
      sessionDuration: 'string',
      startTime: 'string',
      totalActiveUsers: 'string',
      waitingRoomEventId: 'number',
      waitingRoomId: 'string',
      waitingRoomType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWaitingRoomEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * f3c3700a-4c0f-4a24-b576-fd7dbf9e7c55
   */
  requestId?: string;
  /**
   * @remarks
   * The list of waiting room events, which contains the specific information of each event.
   */
  waitingRoomEvents?: ListWaitingRoomEventsResponseBodyWaitingRoomEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomEvents: 'WaitingRoomEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomEvents: { 'type': 'array', 'itemType': ListWaitingRoomEventsResponseBodyWaitingRoomEvents },
    };
  }

  validate() {
    if(Array.isArray(this.waitingRoomEvents)) {
      $dara.Model.validateArray(this.waitingRoomEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

