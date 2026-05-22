// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomRequestHostNameAndPath extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class CreateWaitingRoomRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cookieName?: string;
  customPageHtml?: string;
  description?: string;
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostNameAndPath?: CreateWaitingRoomRequestHostNameAndPath[];
  jsonResponseEnable?: string;
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  newUsersPerMinute?: string;
  queueAllEnable?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  queuingMethod?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  queuingStatusCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * This parameter is required.
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
      hostNameAndPath: { 'type': 'array', 'itemType': CreateWaitingRoomRequestHostNameAndPath },
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
    if(Array.isArray(this.hostNameAndPath)) {
      $dara.Model.validateArray(this.hostNameAndPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

