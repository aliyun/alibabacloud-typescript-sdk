// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath } from "./ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath";


export class ListWaitingRoomsResponseBodyWaitingRooms extends $dara.Model {
  /**
   * @remarks
   * The name of the custom cookie.
   * 
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
  /**
   * @remarks
   * The HTML content or identifier of the custom queuing page. This parameter is valid only when `WaitingRoomType` is set to `custom`. The content must be URL-encoded.
   */
  customPageHtml?: string;
  /**
   * @remarks
   * The description of the waiting room.
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
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * Indicates whether the waiting room is enabled. Valid values:
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
   * The hostname and path.
   */
  hostNameAndPath?: ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath[];
  /**
   * @remarks
   * Indicates whether JSON response is enabled. If you set this parameter to on, a JSON body is returned for requests to the waiting room with the header Accept: application/json. Valid values:
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
   * The name of the waiting room.
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of new users per minute.
   * 
   * @example
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @remarks
   * Indicates whether all requests must be queued. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  queueAllEnable?: string;
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
   * @example
   * 200
   */
  queuingStatusCode?: string;
  /**
   * @remarks
   * The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
   * 
   * @example
   * 3600
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The maximum number of active users.
   * 
   * @example
   * 300
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The unique ID of the waiting room.
   * 
   * @example
   * 6a51d5bc6460887abd1291dc7d4d****
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
   * default
   */
  waitingRoomType?: string;
  static names(): { [key: string]: string } {
    return {
      cookieName: 'CookieName',
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      hostNameAndPath: 'HostNameAndPath',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      queueAllEnable: 'QueueAllEnable',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      sessionDuration: 'SessionDuration',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomId: 'WaitingRoomId',
      waitingRoomType: 'WaitingRoomType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieName: 'string',
      customPageHtml: 'string',
      description: 'string',
      disableSessionRenewalEnable: 'string',
      enable: 'string',
      hostNameAndPath: { 'type': 'array', 'itemType': ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath },
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      queueAllEnable: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      sessionDuration: 'string',
      totalActiveUsers: 'string',
      waitingRoomId: 'string',
      waitingRoomType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostNameAndPath)) {
      $dara.Model.validateArray(this.hostNameAndPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

