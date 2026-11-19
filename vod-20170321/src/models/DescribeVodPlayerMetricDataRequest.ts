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
   * The end time of the query. Format: yyyy-mm-ddThh:mm:ssZ (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric dimension filter. A dimension consists of a dimension type (Field), an operator (Op), and a dimension value.
   * 
   * > - You can specify up to three dimensions.
   * > - If the Metrics parameter includes any of the following four metrics, the Filters parameter does not take effect: Uv (number of playback users), AvgPerVv (average number of playbacks per user), AvgPerPlayDuration (average playback duration per user), and AvgPerCompletionVv (average number of completions per user).
   * > - Use regionCode to specify provinces and countries.
   * > - Separate multiple values with #_#.
   * 
   * Valid values for the dimension type (Field):
   * - SdkVersion: the SDK version.
   * - AppVersion: the app version.
   * - Codec: the codec.
   * - VideoType: the video format.
   * - Network: the network type.
   * - Country: the country.
   * - Isp: the ISP.
   * - VideoDefinition: the resolution.
   * - Domain: the domain name.
   * - Province: the province.
   * - IsHw: whether hardware decoding is used.
   * - ErrorCode: the error code.
   * 
   * Valid values for the operator (Op): = (equal to), > (greater than), < (less than), and != (not equal to).
   * > 
   * > - Operator availability: The SdkVersion and VideoDefinition metrics support all four operators. Other metrics support only = (equal to) and != (not equal to).
   * 
   * To obtain dimension values, call the DescribeVodPlayerDimensionData operation.
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
   * The time granularity of the queried data. Valid values: **5m**, **1h**, and **1d**. The supported time granularity varies based on the time span specified by `StartTime` and `EndTime`:
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
   * The metric types. You can select multiple metrics, up to a maximum of three.
   * 
   * > 
   * > - Percentage data is returned in decimal format.
   * 
   * Quality of Service (QoS) metrics for playback:
   * - Vv: the number of playbacks.
   * - RealVv: the actual playback volume.
   * - FirstFrame: the first frame loading time.
   * - SecondPlayRate: the 1-second startup rate.
   * - SlowPlayRate: the slow startup rate.
   * - StuckCountRate: the stuttering rate by count.
   * - SeekDuration: the seek duration.
   * - StuckDuration100s: the stuttering duration per 100 seconds.
   * - StuckCount100s: the number of stuttering events per 100 seconds.
   * - PlayFailRate: the playback failure rate.
   * - SeedFailRate: the non-startup rate.
   * - AvgPlayBitrate: the average playback bitrate.
   * - AvgStartBitrate: the average startup bitrate.
   * - ErrorCount100s: the number of errors per 100 seconds.
   * 
   * Quality of Experience (QoE) metrics for playback:
   * - Uv: the number of playback users.
   * - AvgPerVv: the average number of playbacks per user.
   * - AvgVideoDuration: the average video duration.
   * - AvgPerPlayDuration: the average playback duration per user.
   * - AvgPerCompletionVv: the average number of completions per user.
   * - CompletionVv: the completion volume.
   * - CompletionRate: the completion rate.
   * - AvgPlayDuration: the average playback duration.
   * - JumpRate5s: the 5-second bounce rate.
   * 
   * This parameter is required.
   * 
   * @example
   * Vv,Uv,AvgPerVv
   */
  metrics?: string;
  /**
   * @remarks
   * The operating system of the playback client. You can specify this parameter to perform a filtered query for playback data of a specific operating system. Valid values: **Android**, **iOS**, **Harmony**, **Windows**, **macOS**, and **Linux**.
   * The available values vary based on the terminal type:
   * 
   * - **native**: Android, iOS, and Harmony.
   * - **web**: Android, iOS, Harmony, Windows, macOS, and Linux.
   * 
   * Separate multiple operating systems with #_#.
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
   * The start time of the query. Format: <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z (UTC).
   * > 
   * > - You can query playback data history for up to one year.
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
   * - **web**: the web client.
   * - **mobile**: the native client.
   * 
   * This parameter is required.
   * 
   * @example
   * web
   */
  terminalType?: string;
  /**
   * @remarks
   * The number of top data entries by playback volume to return. If you do not specify this parameter, all dimension data is returned.
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

