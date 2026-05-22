// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaitingRoomRequestHostNameAndPath extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The probe path.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * test.
   */
  subdomain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      path: 'Path',
      subdomain: 'Subdomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      path: 'string',
      subdomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWaitingRoomRequest extends $dara.Model {
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
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The hostname and path.
   */
  hostNameAndPath?: UpdateWaitingRoomRequestHostNameAndPath[];
  /**
   * @remarks
   * Specifies whether to enable JSON response. If JSON response is enabled, a JSON body is returned for requests to the waiting room with the header Accept: application/json. Valid values:
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
   * 7096621098****
   */
  siteId?: number;
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
   * The ID of the waiting room, which can be obtained by calling the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 6a51d5bc6460887abd129****
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
      siteId: 'SiteId',
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
      hostNameAndPath: { 'type': 'array', 'itemType': UpdateWaitingRoomRequestHostNameAndPath },
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

