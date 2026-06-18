// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomEventRequest extends $dara.Model {
  /**
   * @remarks
   * The custom waiting room page content. This parameter is required when the waiting room type is custom. The content must use Base64 encoding.
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
   * 测试等候室
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable session renewal. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * The waiting room switch. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The event end timestamp, such as 1705044735.
   * 
   * This parameter is required.
   * 
   * @example
   * 1719849600
   */
  endTime?: string;
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
   * The number of new users per minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  newUsersPerMinute?: string;
  /**
   * @remarks
   * Specifies whether to enable pre-queuing. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  preQueueEnable?: string;
  /**
   * @remarks
   * The pre-queuing start timestamp, which must be at least 5 minutes earlier than the event start timestamp, such as 1705044735.
   * 
   * @example
   * 1719763200
   */
  preQueueStartTime?: string;
  /**
   * @remarks
   * The queuing method. Valid values:
   * 
   * - **random**: random.
   * - **fifo**: first-in, first-out.
   * - **passthrough**: passthrough.
   * - **reject-all**: reject all.
   * 
   * This parameter is required.
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
   * - **429**.
   * 
   * This parameter is required.
   * 
   * @example
   * 202
   */
  queuingStatusCode?: string;
  /**
   * @remarks
   * Specifies whether to enable random pre-queuing. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  randomPreQueueEnable?: string;
  /**
   * @remarks
   * The session duration, in minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The event start timestamp, such as 1705044735.
   * 
   * This parameter is required.
   * 
   * @example
   * 1719763200
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of active users.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The waiting room ID. You can call the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) operation to obtain the waiting room ID. The waiting room must belong to the site specified by SiteId.
   * 
   * @example
   * 6a51d5bc6460887abd1291dc7d4db28b
   */
  waitingRoomId?: string;
  /**
   * @remarks
   * The waiting room type. Valid values:
   * 
   * - **default**: default type.
   * - **custom**: custom type.
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

