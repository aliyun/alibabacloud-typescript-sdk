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
   * The custom content of the waiting room page. This parameter is required when the waiting room type is custom. The content requires Base64 encoding.
   * 
   * @example
   * SGVsbG8gd29ybGQ=
   */
  customPageHtml?: string;
  /**
   * @remarks
   * The description of the waiting room.
   * 
   * @example
   * Special event queue page
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable session renewal. Valid values:
   * 
   * - **on**: Disables session renewal.
   * - **off**: Enables session renewal.
   * 
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * The status of the waiting room. Valid values:
   * 
   *  - **on**: Enables the waiting room.
   *  - **off**: Disables the waiting room.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The hostnames and paths.
   */
  hostNameAndPath?: UpdateWaitingRoomRequestHostNameAndPath[];
  /**
   * @remarks
   * Specifies whether to enable JSON responses. If this feature is enabled and the Accept request header contains "application/json", JSON data is returned. Valid values:
   * 
   * - **on**: Enables the feature.
   * - **off**: Disables the feature.
   * 
   * @example
   * on
   */
  jsonResponseEnable?: string;
  /**
   * @remarks
   * The language of the waiting room page. This parameter is required when the waiting room type is default. Valid values:
   * 
   * - **enus**: English
   * - **zhcn**: Simplified Chinese
   * - **zhhk**: Traditional Chinese
   * 
   * @example
   * zhcn
   */
  language?: string;
  /**
   * @remarks
   * The name of the waiting room.
   * 
   * @example
   * holiday-promotion-waiting-room
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
   * Specifies whether to queue all users. Valid values:
   * 
   * - **on**: Enables the feature.
   * - **off**: Disables the feature.
   * 
   * @example
   * on
   */
  queueAllEnable?: string;
  /**
   * @remarks
   * The queuing method. Valid values:
   * 
   * - **random**: random
   * - **fifo**: first in, first out (FIFO)
   * - **passthrough**: passthrough
   * - **reject-all**: reject all
   * 
   * @example
   * random
   */
  queuingMethod?: string;
  /**
   * @remarks
   * The HTTP status code of the waiting room. Valid values:
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
   * The duration of a user session, in minutes.
   * 
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
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
   * The ID of the waiting room. You can call the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) operation to query the waiting room ID.
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
   * - **default**: default type
   * - **custom**: custom type
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

