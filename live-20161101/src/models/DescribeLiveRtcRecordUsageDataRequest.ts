// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRtcRecordUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraVideo Real-time Communication application. You can view the ID in [ApsaraVideo Real-time Communication application management](https://help.aliyun.com/document_detail/2355593.html). Navigate to **ApsaraVideo Live > Live+ > Real-time Communication > Application Management** to view your application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * intl7f92-a5a8*************7ce4eb44a6
   */
  appId?: string;
  /**
   * @remarks
   * The end time for the query. The query granularity must be ≥ 5 minutes and ≤ 31 days. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for the query data. Unit: seconds. Valid values:
   * 
   * - 3600 (default).
   * 
   * - 86400.
   * 
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @remarks
   * The recording mode. Valid values:
   * 
   * - 0: single-stream recording mode.
   * 
   * - 1: stream mixing recording mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recordMode?: string;
  /**
   * @remarks
   * The start time for the query. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-12-21T08:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      recordMode: 'RecordMode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      recordMode: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

