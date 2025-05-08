// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the custom cookie.
   * 
   * This parameter is required.
   * 
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
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
   * The hostname and path.
   * 
   * This parameter is required.
   */
  hostNameAndPathShrink?: string;
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
   * enus
   */
  language?: string;
  /**
   * @remarks
   * The name of the waiting room.
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
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @remarks
   * Specifies whether to queue all requests. Valid values:
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
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * 200
   */
  queuingStatusCode?: string;
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
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The maximum number of active users.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  totalActiveUsers?: string;
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
      cookieName: 'CookieName',
      customPageHtml: 'CustomPageHtml',
      description: 'Description',
      disableSessionRenewalEnable: 'DisableSessionRenewalEnable',
      enable: 'Enable',
      hostNameAndPathShrink: 'HostNameAndPath',
      jsonResponseEnable: 'JsonResponseEnable',
      language: 'Language',
      name: 'Name',
      newUsersPerMinute: 'NewUsersPerMinute',
      queueAllEnable: 'QueueAllEnable',
      queuingMethod: 'QueuingMethod',
      queuingStatusCode: 'QueuingStatusCode',
      sessionDuration: 'SessionDuration',
      siteId: 'SiteId',
      totalActiveUsers: 'TotalActiveUsers',
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
      hostNameAndPathShrink: 'string',
      jsonResponseEnable: 'string',
      language: 'string',
      name: 'string',
      newUsersPerMinute: 'string',
      queueAllEnable: 'string',
      queuingMethod: 'string',
      queuingStatusCode: 'string',
      sessionDuration: 'string',
      siteId: 'number',
      totalActiveUsers: 'string',
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

