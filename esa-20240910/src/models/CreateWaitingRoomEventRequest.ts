// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomEventRequest extends $dara.Model {
  /**
   * @remarks
   * The custom content of the waiting room page. This parameter is required when the waiting room type is set to custom. The content must use Base64 encoding.
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
   * test
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
   * Specifies whether to enable the waiting room. Valid values:
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
   * The end timestamp of the event. Example: 1705044735.
   * 
   * This parameter is required.
   * 
   * @example
   * 1719849600
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to enable JSON responses. If this feature is enabled and the Accept request header contains "application/json", JSON data is returned. Valid values:
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
   * The language of the waiting room page. This parameter is required when the waiting room type is set to default. Valid values:
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
   * The start timestamp of pre-queuing. The time must be at least 5 minutes earlier than the event start timestamp. Example: 1705044735.
   * 
   * @example
   * 1719763200
   */
  preQueueStartTime?: string;
  /**
   * @remarks
   * The queuing method. Valid values:
   * 
   * - **random**: Random.
   * - **fifo**: First-in, first-out (FIFO).
   * - **passthrough**: Passthrough.
   * - **reject-all**: Reject all.
   * 
   * This parameter is required.
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
   * The session duration in minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  sessionDuration?: string;
  /**
   * @remarks
   * The ID of the site. You can obtain the site ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The start timestamp of the event. Example: 1705044735.
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
   * The ID of the waiting room. You can obtain the waiting room ID by calling the [ListWaitingRooms](https://help.aliyun.com/document_detail/2850279.html) operation. The waiting room must belong to the site specified by the SiteId parameter.
   * 
   * @example
   * 6a51d5bc6460887abd1291dc7d4db28b
   */
  waitingRoomId?: string;
  /**
   * @remarks
   * The type of the waiting room. Valid values:
   * 
   * - **default**: Default type.
   * - **custom**: Custom type.
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

