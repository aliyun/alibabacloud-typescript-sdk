// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamMergeRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the output stream. For the configuration to take effect, this AppName must match the one in the ingest URL. Wildcards (`*`) are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time of the stream merge.
   * 
   * The time must be in UTC and specified in the ISO 8601 standard format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * > The interval between `StartTime` and `EndTime` cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-29T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The AppName of the primary input stream. This value must match the AppName in the ingest URL for the primary stream.
   * 
   * This parameter is required.
   * 
   * @example
   * app1
   */
  inAppName1?: string;
  /**
   * @remarks
   * The AppName of the backup input stream. This value must match the AppName in the ingest URL for the backup stream.
   * 
   * This parameter is required.
   * 
   * @example
   * app2
   */
  inAppName2?: string;
  /**
   * @remarks
   * The StreamName of the primary input stream. This value must match the StreamName in the ingest URL for the primary stream.
   * 
   * This parameter is required.
   * 
   * @example
   * InStream1
   */
  inStreamName1?: string;
  /**
   * @remarks
   * The StreamName of the backup input stream. This value must match the StreamName in the ingest URL for the backup stream.
   * 
   * This parameter is required.
   * 
   * @example
   * stream2
   */
  inStreamName2?: string;
  /**
   * @remarks
   * The engine to use for stream merging.
   * 
   * - `on`: The new liveswitch engine.
   * 
   * - `off`: A legacy engine (such as rtmpr). This is the default.
   * 
   * @example
   * off
   */
  liveMerger?: string;
  /**
   * @remarks
   * Parameters that define the failover conditions. A failover is triggered when one of the following conditions is met:
   * 
   * 1. An explicit stream disconnection occurs, such as an end-of-file (EOF) or network error.
   * 
   * 2. The stutter rate exceeds 60% in the last 5 seconds.
   * 
   * 3. A stream pulling timeout occurs if no frame data is received for 2 consecutive seconds.
   * 
   * 4. The average frame rate over the period specified by `ali_max_no_frame_timeout` drops below `ali_low_frame_rate_threshold`. This condition applies even if there is no stream disconnection or stuttering. If you set `ali_max_no_frame_timeout`, the timeout for Condition 3 is also updated to this value.
   * 
   * 5. If `block_all_jitter` is set to `1`, Conditions 2, 3, and 4 do not apply.
   * 
   * - `ali_max_no_frame_timeout`: an integer from 2 to 10.<br>`ali_low_frame_rate_threshold`: an integer from 1 to 200.<br>`block_all_jitter`: `0` or `1`.<br><br>
   * 
   * @example
   * ali_low_frame_rate_threshold=10&ali_max_no_frame_timeout=5&block_all_jitter=0
   */
  mergeParameters?: string;
  ownerId?: number;
  /**
   * @remarks
   * The live stream protocol for the input streams. Valid values:
   * 
   * - **rtmp** (Default)
   * 
   * - **rtc**
   * 
   * @example
   * rtmp
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  selectAppName?: string;
  selectStreamName?: string;
  /**
   * @remarks
   * The start time of the stream merge.
   * 
   * The time must be in UTC and specified in the ISO 8601 standard format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-05-29T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The StreamName of the output stream. For the configuration to take effect, this StreamName must match the one in the ingest URL. Wildcards (`*`) are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * StreamName
   */
  streamName?: string;
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      endTime: 'EndTime',
      inAppName1: 'InAppName1',
      inAppName2: 'InAppName2',
      inStreamName1: 'InStreamName1',
      inStreamName2: 'InStreamName2',
      liveMerger: 'LiveMerger',
      mergeParameters: 'MergeParameters',
      ownerId: 'OwnerId',
      protocol: 'Protocol',
      regionId: 'RegionId',
      selectAppName: 'SelectAppName',
      selectStreamName: 'SelectStreamName',
      startTime: 'StartTime',
      streamName: 'StreamName',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      endTime: 'string',
      inAppName1: 'string',
      inAppName2: 'string',
      inStreamName1: 'string',
      inStreamName2: 'string',
      liveMerger: 'string',
      mergeParameters: 'string',
      ownerId: 'number',
      protocol: 'string',
      regionId: 'string',
      selectAppName: 'string',
      selectStreamName: 'string',
      startTime: 'string',
      streamName: 'string',
      switchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

