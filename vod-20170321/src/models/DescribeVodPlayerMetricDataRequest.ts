// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query. Format: yyyy-mm-ddthh:mm:ssz (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric dimension filters. A dimension consists of a dimension type (Field), an operator (Op), and a dimension value.
   * 
   * > - A maximum of three dimensions can be specified.
   * > - When the Metrics parameter includes the following four metrics, Filters do not take effect: Uv (playback users), AvgPerVv (average plays per user), AvgPerPlayDuration (average play duration per user), and AvgPerCompletionVv (average completion plays per user).
   * > - For provinces and countries, pass the regionCode.
   * > - Separate multiple values with #_#.
   * 
   * Valid values for dimension type (Field):
   * - SdkVersion: SDK version.
   * - AppVersion: app version.
   * - Codec: codec.
   * - VideoType: video format.
   * - Network: network type.
   * - Country: country.
   * - Isp: ISP.
   * - VideoDefinition: resolution.
   * - Domain: domain name.
   * - Province: province.
   * - IsHw: whether hardware decoding is used.
   * - ErrorCode: error code.
   * 
   * Valid values for operator (Op): = (equal to), > (greater than), < (less than), and != (not equal to).
   * > 
   * > - SdkVersion and VideoDefinition support all four operators. Other metrics support only = (equal to) and != (not equal to).
   * 
   * Retrieve dimension values by calling DescribeVodPlayerDimensionData.
   * 
   * @example
   * [
   *   {
   *     "Field": "codec",
   *     "Op": "=",
   *     "Value": "h265#_#h264"
   *   },
   *   {
   *     "Field": "os",
   *     "Op": "=",
   *     "Value": "Android#_#iOS"
   *   }
   * ]
   */
  filters?: string;
  /**
   * @remarks
   * The time granularity for querying data. Valid values: **5m**, **1h**, and **1d**. The supported time granularity depends on the time span between `StartTime` and `EndTime`:
   * 
   * - Within 3 days: **5m**, **1h**, and **1d**.
   * - 4 to 7 days: **1h** and **1d**.
   * - More than 7 days: **1d**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1d
   */
  interval?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (**default**): Simplified Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The metric types. You can select multiple metrics (up to 3).
   * 
   * > 
   * > - Percentage data is returned in decimal form.
   * 
   * Quality of Service (QoS) metrics:
   * - Vv: play count.
   * - RealVv: actual play count.
   * - FirstFrame: first frame time.
   * - SecondPlayRate: instant play rate.
   * - SlowPlayRate: slow play rate.
   * - StuckCountRate: stuttering rate by count.
   * - SeekDuration: seek duration.
   * - StuckDuration100s: stuttering duration per 100 seconds.
   * - StuckCount100s: stuttering count per 100 seconds.
   * - PlayFailRate: play failure rate.
   * - SeedFailRate: non-play rate.
   * - AvgPlayBitrate: average playback bitrate.
   * - AvgStartBitrate: average start bitrate.
   * - ErrorCount100s: error count per 100 seconds.
   * 
   * Quality of Experience (QoE) metrics:
   * - Uv: playback users.
   * - AvgPerVv: average plays per user.
   * - AvgVideoDuration: average video duration.
   * - AvgPerPlayDuration: average play duration per user.
   * - AvgPerCompletionVv: average completion plays per user.
   * - CompletionVv: completion count.
   * - CompletionRate: completion rate.
   * - AvgPlayDuration: average play duration.
   * - JumpRate5s: 5-second bounce rate.
   * 
   * This parameter is required.
   * 
   * @example
   * Vv,Uv,AvgPerVv
   */
  metrics?: string;
  /**
   * @remarks
   * The operating system of the player. Specify this parameter to perform a filtered query for playback data of a specific operating system. Valid values: **Android**, **iOS**, **Harmony**, **Windows**, **MacOS**, and **Linux**.
   * The available values vary by terminal type:
   * 
   * - **native**: Android, iOS, Harmony.
   * - **web**: Android, iOS, Harmony, Windows, MacOs, Linux.
   * 
   * Separate multiple values with #_#.
   * 
   * @example
   * Android、iOS、Windows
   */
  os?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **5000**. Maximum value: **5000**.
   * 
   * @example
   * 5000
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z (UTC).
   * > 
   * > - Supports querying playback data history for the past year.
   * > - The time range for a single query cannot exceed 31 days.
   * > - The time interval is left-closed and right-open [StartTime, EndTime).
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-24T00:55:06Z
   */
  startTime?: string;
  /**
   * @remarks
   * The terminal type. Valid values:
   * - **web**: web.
   * - **mobile**: native.
   * 
   * This parameter is required.
   * 
   * @example
   * web
   */
  terminalType?: string;
  /**
   * @remarks
   * Returns data for the top N items ranked by play count. If this parameter is not specified, data for all dimensions is returned.
   * 
   * @example
   * 5
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      filters: 'Filters',
      interval: 'Interval',
      language: 'Language',
      metrics: 'Metrics',
      os: 'Os',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      terminalType: 'TerminalType',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      filters: 'string',
      interval: 'string',
      language: 'string',
      metrics: 'string',
      os: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      terminalType: 'string',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

