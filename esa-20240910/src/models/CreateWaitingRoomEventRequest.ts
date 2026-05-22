// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomEventRequest extends $dara.Model {
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
  endTime?: string;
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
  preQueueEnable?: string;
  preQueueStartTime?: string;
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
  randomPreQueueEnable?: string;
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
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  totalActiveUsers?: string;
  waitingRoomId?: string;
  /**
   * @remarks
   * This parameter is required.
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

