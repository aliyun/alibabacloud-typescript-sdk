// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaitingRoomRequestHostNameAndPath extends $dara.Model {
  domain?: string;
  path?: string;
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
  cookieName?: string;
  customPageHtml?: string;
  description?: string;
  disableSessionRenewalEnable?: string;
  enable?: string;
  hostNameAndPath?: UpdateWaitingRoomRequestHostNameAndPath[];
  jsonResponseEnable?: string;
  language?: string;
  name?: string;
  newUsersPerMinute?: string;
  queueAllEnable?: string;
  queuingMethod?: string;
  queuingStatusCode?: string;
  sessionDuration?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  totalActiveUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  waitingRoomId?: string;
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

