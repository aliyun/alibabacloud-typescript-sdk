// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWaitingRoomShrinkRequest extends $dara.Model {
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
  hostNameAndPathShrink?: string;
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
      hostNameAndPathShrink: 'HostNameAndPath',
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
      hostNameAndPathShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

