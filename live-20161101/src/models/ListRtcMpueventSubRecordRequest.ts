// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRtcMPUEventSubRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * >  The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 1970-01-01T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is required.
   * 
   * @example
   * 1970-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the subscription.
   * 
   * @example
   * yourSubId
   */
  subId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      subId: 'SubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
      subId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

