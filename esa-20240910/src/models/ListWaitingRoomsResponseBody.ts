// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath extends $dara.Model {
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

export class ListWaitingRoomsResponseBodyWaitingRooms extends $dara.Model {
  cookieName?: string;
  customPageHtml?: string;
  description?: string;
  disableSessionRenewalEnable?: string;
  enable?: string;
  hostNameAndPath?: ListWaitingRoomsResponseBodyWaitingRoomsHostNameAndPath[];
  jsonResponseEnable?: string;
  language?: string;
  name?: string;
  newUsersPerMinute?: string;
  queueAllEnable?: string;
  queuingMethod?: string;
  queuingStatusCode?: string;
  sessionDuration?: string;
  totalActiveUsers?: string;
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
  requestId?: string;
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

