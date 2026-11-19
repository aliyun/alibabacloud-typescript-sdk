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
   * The metric type. You can specify multiple metrics, up to three.
   * 
   * > 
   * > - Percentage data is returned in decimal format.
   * 
   * Quality of Service (QoS) metrics for playback quality:
   * - Vv: Number of plays.
   * - RealVv: Actual play volume.
   * - FirstFrame: First frame time.
   * - SecondPlayRate: 1-second startup rate.
   * - SlowPlayRate: Slow startup rate.
   * - StuckCountRate: Stuttering count rate.
   * - SeekDuration: Seek duration.
   * - StuckDuration100s: Stuttering duration per 100 seconds.
   * - StuckCount100s: Stuttering count per 100 seconds.
   * - PlayFailRate: Playback failure rate.
   * - SeedFailRate: Unstarted playback rate.
   * - AvgPlayBitrate: Average playback bitrate.
   * - AvgStartBitrate: Average startup bitrate.
   * - ErrorCount100s: Error count per 100 seconds.
   * 
   * Quality of Experience (QoE) metrics for playback experience:
   * - Uv: Number of playback users.
   * - AvgPerVv: Average number of plays per user.
   * - AvgVideoDuration: Average video duration.
   * - AvgPerPlayDuration: Average playback duration per user.
   * - AvgPerCompletionVv: Average number of completed plays per user.
   * - CompletionVv: Completed play volume.
   * - CompletionRate: Completion rate.
   * - AvgPlayDuration: Average playback duration.
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
   * The operating system of the playback terminal. You can specify this parameter to perform a filtered query for the playback data of a specific operating system. Valid values: **Android**, **iOS**, **Harmony**, **Windows**, **macOS**, and **Linux**.
   * The valid values vary based on the terminal type:
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
   * The time range used to confirm the period-over-period analysis, in days (d).
   * 
   * For example, if you set the value to 1d (1 day), the period-over-period time range is from StartTime-1d to EndTime-1d.
   * 
   * @example
   * 1d
   */
  period?: string;
  /**
   * @remarks
   * The start time of the query. Format: <i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z (UTC).
   * > 
   * > - You can query historical playback data for the last year.
   * > - The time range for a single query cannot exceed 31 days.
   * > - The time range is a left-closed and right-open interval [StartTime, EndTime).
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
   * - **web**: Web client.
   * - **mobile**: Native client.
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

