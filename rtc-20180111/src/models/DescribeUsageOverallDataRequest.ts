// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2hz****
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * The metric types to query. Separate multiple values with commas (,). Valid values:
   * - **TOTAL_CALL_DURATION**: total duration.
   * - **VIDEO_CALL_DURATION**: video communication duration.
   * - **AUDIO_CALL_DURATION**: audio communication duration.
   * - **CALL_CHANNEL_COUNT**: communication channel count.
   * - **HIGHLY_CONCURRENT_CHANNEL_COUNT**: highly concurrent communication channel count.
   * - **CHANNEL_CONCURRENT_PEAK**: peak concurrent channel count.
   * - **ONLINE_USER_PEAK**: peak online user count.
   * - **TOTAL_CALL_USER**: total call users.
   * - **TOTAL_INOUT_NUM**: total inbound and outbound visits.
   * 
   * This parameter is required.
   * 
   * @example
   * ONLINE_USER_PEAK
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

