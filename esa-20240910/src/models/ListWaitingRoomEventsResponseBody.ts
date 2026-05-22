// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingRoomEventsResponseBodyWaitingRoomEvents extends $dara.Model {
  customPageHtml?: string;
  description?: string;
  disableSessionRenewalEnable?: string;
  enable?: string;
  endTime?: string;
  jsonResponseEnable?: string;
  language?: string;
  name?: string;
  newUsersPerMinute?: string;
  preQueueEnable?: string;
  preQueueStartTime?: string;
  queuingMethod?: string;
  queuingStatusCode?: string;
  randomPreQueueEnable?: string;
  sessionDuration?: string;
  startTime?: string;
  totalActiveUsers?: string;
  waitingRoomEventId?: number;
  waitingRoomId?: string;
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
      startTime: 'StartTime',
      totalActiveUsers: 'TotalActiveUsers',
      waitingRoomEventId: 'WaitingRoomEventId',
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
      startTime: 'string',
      totalActiveUsers: 'string',
      waitingRoomEventId: 'number',
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

export class ListWaitingRoomEventsResponseBody extends $dara.Model {
  requestId?: string;
  waitingRoomEvents?: ListWaitingRoomEventsResponseBodyWaitingRoomEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      waitingRoomEvents: 'WaitingRoomEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      waitingRoomEvents: { 'type': 'array', 'itemType': ListWaitingRoomEventsResponseBodyWaitingRoomEvents },
    };
  }

  validate() {
    if(Array.isArray(this.waitingRoomEvents)) {
      $dara.Model.validateArray(this.waitingRoomEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

