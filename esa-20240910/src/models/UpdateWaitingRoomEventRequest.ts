// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaitingRoomEventRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the custom waiting room page. You must specify this parameter if you set WaitingRoomType to custom. The content must be Base64-encoded.
   * 
   * @example
   * html-yets-maqi1111
   */
  customPageHtml?: string;
  /**
   * @remarks
   * The description of the waiting room.
   * 
   * @example
   * http://yywyyw.com
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable session renewal. Valid values:
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
   * Specifies whether to enable the waiting room event. Valid values:
   * 
   * *   `on`
   * *   `off`
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
   * 1719849600
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to enable JSON response. Valid values:
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
   * The default language. Valid values:
   * 
   * *   `enus`: English.
   * *   `zhcn`: Simplified Chinese.
   * *   `zhhk`: Traditional Chinese.
   * 
   * @example
   * enus
   */
  language?: string;
  /**
   * @remarks
   * The name of the waiting room event.
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of new users per minute.
   * 
   * @example
   * 300
   */
  newUsersPerMinute?: string;
  /**
   * @remarks
   * Specifies whether to enable pre-queuing.
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
   * The start time for pre-queuing.
   * 
   * @example
   * 1719763200
   */
  preQueueStartTime?: string;
  /**
   * @remarks
   * The queuing method. Valid values:
   * 
   * *   random: Users gain access to the origin randomly, regardless of the arrival time.
   * *   fifo: Users gain access to the origin in order of arrival.
   * *   passthrough: Users pass through the waiting room and go straight to the origin.
   * *   reject-all: All requests are blocked from accessing the origin.
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
   * Specifies whether to enable random queuing.
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
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The start time of the event. This value is a UNIX timestamp.
   * 
   * @example
   * 1719763200
   */
  startTime?: string;
  /**
   * @remarks
   * The maximum number of active users.
   * 
   * @example
   * 200
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The ID of the waiting room event, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
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
      siteId: 'SiteId',
      startTime: 'StartTime',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomEventId: 'WaitingRoomEventId',
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
      siteId: 'number',
      startTime: 'string',
      totalActiveUsers: 'string',
      waitingRoomEventId: 'number',
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

