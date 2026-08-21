// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerCollectDataRequest extends $dara.Model {
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
   * The time granularity for the query data. Valid values: **5m**, **1h**, and **1d**. The supported time granularity varies based on the time span specified by `StartTime` and `EndTime`:
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
   * The metric type. You can specify up to 3 metrics.
   * 
   * > 
   * > - Percentage data is returned in decimal format.
   * 
   * Playback quality (QoS) metrics:
   * - Vv: play count.
   * - RealVv: actual play count.
   * - FirstFrame: first frame time.
   * - SecondPlayRate: instant play rate.
   * - SlowPlayRate: slow play rate.
   * - StuckCountRate: stuttering rate by count.
   * - SeekDuration: seek duration.
   * - StuckDuration100s: stuttering duration per 100 seconds.
   * - StuckCount100s: stuttering count per 100 seconds.
   * - PlayFailRate: playback failure rate.
   * - SeedFailRate: non-play rate.
   * - AvgPlayBitrate: average playback bitrate.
   * - AvgStartBitrate: average initial bitrate.
   * - ErrorCount100s: error count per 100 seconds.
   * 
   * Playback experience (QoE) metrics:
   * - Uv: unique viewers.
   * - AvgPerVv: average plays per user.
   * - AvgVideoDuration: average video duration.
   * - AvgPerPlayDuration: average playback duration per user.
   * - AvgPerCompletionVv: average completion count per user.
   * - CompletionVv: completion count.
   * - CompletionRate: completion rate.
   * - AvgPlayDuration: average playback duration.
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
   * The operating system of the playback device. Specify this parameter to perform a filtered query for playback data of a specific operating system. Valid values: **Android**, **iOS**, **Harmony**, **Windows**, **MacOS**, and **Linux**.
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
   * The time range for period-over-period analysis, in days (d).
   * 
   * For example, if you set this parameter to 1d (1 day), the period-over-period data is retrieved from the time range of StartTime-1d to EndTime-1d.
   * 
   * @example
   * 1d
   */
  period?: string;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z (UTC).
   * > 
   * > - Playback data from the last year can be queried.
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      metrics: 'Metrics',
      os: 'Os',
      period: 'Period',
      startTime: 'StartTime',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      metrics: 'string',
      os: 'string',
      period: 'string',
      startTime: 'string',
      terminalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

