// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRtcMPUEventSubRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the subscribed application. You can view your application IDs by navigating to **ApsaraVideo Live > Live+ > ApsaraVideo Real-time Communication > Application Management**.
   * > - The application ID consists of uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
   * > - You must first call CreateRtcMPUEventSub to create a stream mixing and forwarding event subscription for this application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query.
   * Format: yyyy-MM-ddTHH:mm:ssZ (UTC). The value cannot be later than the current time.
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
   * The number of records per page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query.
   * Format: yyyy-MM-ddTHH:mm:ssZ (UTC). The value cannot be earlier than seven days before the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1970-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The callback ID of the subscription.
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

