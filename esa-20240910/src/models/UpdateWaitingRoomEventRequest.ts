// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaitingRoomEventRequest extends $dara.Model {
  /**
   * @remarks
   * The custom waiting room page content. This parameter is required when the waiting room type is set to custom. The content must use Base64 encoding.
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
   * http://yywyyw.com
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
   * off
   */
  disableSessionRenewalEnable?: string;
  /**
   * @remarks
   * The enabling status. Valid values:
   * 
   *  - **on**: Enables the waiting room event.
   * 
   *  - **off**: Disables the waiting room event.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The timestamp of the event end time.
   * 
   * @example
   * 1719849600
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to enable JSON response. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * off
   */
  jsonResponseEnable?: string;
  /**
   * @remarks
   * The default language setting. Valid values:
   * 
   *  - **enus**: English.
   * - **zhcn**: Simplified Chinese.
   * - **zhhk**: Traditional Chinese.
   * 
   * @example
   * enus
   */
  language?: string;
  /**
   * @remarks
   * The name of the waiting room event.
   * 
   * @example
   * 测试事件2
   */
  name?: string;
  /**
   * @remarks
   * The number of new users per minute.
   * 
   * @example
   * 300
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
   * The timestamp of the pre-queuing start time.
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
   * @example
   * fifo
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
   * The user session duration, in minutes.
   * 
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The timestamp of the event start time.
   * 
   * @example
   * 1719763200
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of active users.
   * 
   * @example
   * 200
   */
  totalActiveUsers?: string;
  /**
   * @remarks
   * The waiting room event ID, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 89677721098****
   */
  waitingRoomEventId?: number;
  /**
   * @remarks
   * The type of the waiting room. Valid values:
   * 
   * - **default**: default type.
   * - **custom**: custom type.
   * 
   * @example
   * custom
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
      waitingRoomEventId: 'WaitingRoomEventId',
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
      waitingRoomEventId: 'number',
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

