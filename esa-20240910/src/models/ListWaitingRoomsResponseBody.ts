// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath extends $dara.Model {
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
   * The path.
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

export class ListWaitingRoomsResponseBodyWaitingRooms extends $dara.Model {
  /**
   * @remarks
   * The custom cookie name.
   * 
   * @example
   * __aliwaitingroom_example
   */
  cookieName?: string;
  /**
   * @remarks
   * The HTML content or identifier of the custom queuing page. This parameter is valid only when WaitingRoomType is set to custom. The content must be URL-encoded.
   * 
   * @example
   * Custom HTML content
   */
  customPageHtml?: string;
  /**
   * @remarks
   * The waiting room description.
   * 
   * @example
   * Test waiting room
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable session renewal. Valid values:
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * The enabled status. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The hostname and path configurations.
   */
  hostNameAndPath?: ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath[];
  /**
   * @remarks
   * Specifies whether to enable JSON response. When enabled, requests with an Accept header containing "application/json" return JSON data. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
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
   * The waiting room name.
   * 
   * @example
   * Test waiting room
   */
  name?: string;
  /**
   * @remarks
   * The number of new users per minute.
   * 
   * @example
   * 200
   */
  newUsersPerMinute?: string;
  /**
   * @remarks
   * Specifies whether to queue all visitors. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  queueAllEnable?: string;
  /**
   * @remarks
   * The queuing method. Valid values:
   * 
   * - **random**: Random.
   * - **fifo**: First in, first out.
   * - **passthrough**: Passthrough.
   * - **reject-all**: Reject all.
   * 
   * @example
   * random
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
   * The session duration, in minutes.
   * 
   * @example
   * 3600
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The total number of active users.
   * 
   * @example
   * 300
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The waiting room ID, which uniquely identifies a waiting room.
   * 
   * @example
   * 6a51d5bc6460887abd1291dc7d4d****
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

export class ListWaitingRoomsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to trace API calls.
   * 
   * @example
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The list of waiting rooms.
   */
  waitingRooms?: ListWaitingRoomsResponseBodyWaitingRooms[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRooms: 'WaitingRooms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRooms: { 'type': 'array', 'itemType': ListWaitingRoomsResponseBodyWaitingRooms },
    };
  }

  validate() {
    if(Array.isArray(this.waitingRooms)) {
      $dara.Model.validateArray(this.waitingRooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

