// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomEventsResponseBodyWaitingRoomEvents extends $dara.Model {
  /**
   * @remarks
   * The content of the custom waiting room page. This parameter is returned when the waiting room type is set to custom. The content is URL-encoded.
   * 
   * @example
   * html-yets-maqi1111
   */
  customPageHtml?: string;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether session renewal is disabled. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * off
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The end time of the event. This value is a UNIX timestamp.
   * 
   * @example
   * 1719814497
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates whether JOSN response is enabled. If JSON response is enabled, a JSON body is returned for requests to the waiting room with the header Accept: application/json. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * off
   */
  jsonResponseEnable?: string;
  /**
   * @remarks
   * The language of the waiting room page. This parameter is returned when the waiting room type is set to default. Valid values:
   * 
   * *   enus: English.
   * *   zhcn: Simplified Chinese.
   * *   zhhk: Traditional Chinese.
   * 
   * @example
   * zhcn
   */
  language?: string;
  /**
   * @remarks
   * The custom event name.
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of new users per minute.
   * 
   * @example
   * 11
   */
  newUsersPerMinute?: string;
  /**
   * @remarks
   * Indicates whether pre-queuing is enabled. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  preQueueEnable?: string;
  /**
   * @remarks
   * The start time for pre-queuing. This value is a UNIX timestamp. This parameter is valid only when pre-queuing is enabled.
   * 
   * @example
   * 1719814097
   */
  preQueueStartTime?: string;
  /**
   * @remarks
   * The queuing method. Valid values:
   * 
   * *   random: Users gain access to the origin randomly, regardless of the arrival time.
   * *   fifo: Users gain access to the origin in order of arrival.
   * *   passthrough: Users pass through the waiting room and go straight to the origin.
   * *   reject-all: Users are blocked from reaching the origin.
   * 
   * @example
   * fifo
   */
  queuingMethod?: string;
  /**
   * @remarks
   * The HTTP status code to return while a user is in the queue. Valid values:
   * 
   * *   200
   * *   202
   * *   429
   * 
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @remarks
   * Indicates whether random queuing is enabled. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  randomPreQueueEnable?: string;
  /**
   * @remarks
   * The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
   * 
   * @example
   * 3
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The start time of the event. This value is a UNIX timestamp.
   * 
   * @example
   * 1719814398
   */
  startTime?: string;
  /**
   * @remarks
   * The maximum number of active users.
   * 
   * @example
   * 22
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The unique ID of the waiting room event.
   * 
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @remarks
   * The ID of the waiting room associated with the event.
   * 
   * @example
   * 5c938a045c9ca46607163d34966****
   */
  waitingRoomId?: string;
  /**
   * @remarks
   * The type of the waiting room. Valid values:
   * 
   * *   default
   * *   custom
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

