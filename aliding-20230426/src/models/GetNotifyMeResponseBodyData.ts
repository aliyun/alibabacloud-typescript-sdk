// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotifyMeResponseBodyData extends $dara.Model {
  /**
   * @example
   * act-xxaanfaf
   */
  activityId?: string;
  /**
   * @example
   * APP_XCxxx
   */
  appType?: string;
  /**
   * @example
   * corpIdxxx
   */
  corpId?: string;
  /**
   * @example
   * 2020-01-01
   */
  createTimeGMT?: string;
  /**
   * @example
   * 123456
   */
  creatorUserId?: string;
  /**
   * @example
   * formxxxx
   */
  formInstanceId?: string;
  /**
   * @example
   * RUNNING
   */
  instStatus?: string;
  /**
   * @example
   * mobileUrlexample
   */
  mobileUrl?: string;
  /**
   * @example
   * 2020-01-01
   */
  modifiedTimeGMT?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      appType: 'AppType',
      corpId: 'CorpId',
      createTimeGMT: 'CreateTimeGMT',
      creatorUserId: 'CreatorUserId',
      formInstanceId: 'FormInstanceId',
      instStatus: 'InstStatus',
      mobileUrl: 'MobileUrl',
      modifiedTimeGMT: 'ModifiedTimeGMT',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      appType: 'string',
      corpId: 'string',
      createTimeGMT: 'string',
      creatorUserId: 'string',
      formInstanceId: 'string',
      instStatus: 'string',
      mobileUrl: 'string',
      modifiedTimeGMT: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

