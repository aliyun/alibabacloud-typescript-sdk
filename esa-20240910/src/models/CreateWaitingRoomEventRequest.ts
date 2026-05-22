// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomEventRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the custom waiting room page. You must specify this parameter if you set WaitingRoomType to custom. The content must be Base64-encoded.
   * 
   * @example
   * Hello%20world!
   */
  customPageHtml?: string;
  /**
   * @remarks
   * The description of the waiting room.
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
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * Specifies whether to enable the waiting room. Valid values:
   * 
   * *   on
   * *   off
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The end time of the event. This value is a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1719849600
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to enable JSON response. If you set this parameter to on, a JSON body is returned for requests to the waiting room with the header Accept: application/json. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @remarks
   * The language of the waiting room page. You must specify this parameter if you set WaitingRoomType to default. Valid values:
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
   * The name of the waiting room event.
   * 
   * This parameter is required.
   * 
   * @example
   * waitingroom_example
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of new users per minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
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
   * *   reject-all: Users are blocked from reaching the origin.
   * 
   * This parameter is required.
   * 
   * @example
   * random
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
   * This parameter is required.
   * 
   * @example
   * 202
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
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * 1719763200
   */
  startTime?: string;
  /**
   * @remarks
   * The maximum number of active users.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The ID of the waiting room, which can be obtained by calling the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) operation.
   * 
   * @example
   * 6a51d5bc6460887abd1291dc7d4db28b
   */
  waitingRoomId?: string;
  /**
   * @remarks
   * The type of the waiting room. Valid values:
   * 
   * *   default
   * *   custom
   * 
   * This parameter is required.
   * 
   * @example
   * default
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
      siteId: 'number',
      startTime: 'string',
      totalActiveUsers: 'string',
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

