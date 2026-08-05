// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartLiveMPUTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only one ID is supported. It can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. Only one ID is supported. It can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The idle timeout period. Unit: seconds. The value must be in the range of [10, 86400].
   * 
   * > If you set this parameter, the task is automatically stopped when it has been idle for a period longer than MaxIdleTime. If you do not set this parameter, the task is stopped immediately after the channel is closed.
   * 
   * @example
   * 10
   */
  maxIdleTime?: string;
  /**
   * @remarks
   * The stream mixing mode. Valid values:
   * 
   * - **0**: Single-stream ingest. The original single stream is ingested without stream mixing or transcoding. You do not need to configure stream mixing and transcoding parameters.
   * 
   * - **1** (default): Stream mixing and transcoding.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  mixMode?: string;
  /**
   * @remarks
   * The parameters for ingesting to multiple URLs. You can specify multiple live ingest URLs.
   * 
   * > When you set the ingest URL for a task, you must configure either the StreamURL parameter or the MultiStreamURL parameter, but not both.
   */
  multiStreamURLShrink?: string;
  /**
   * @remarks
   * The region where the stream mixing service is located. Valid values:
   * 
   * - **CN-Shanghai<props="china">(default)**: Shanghai.
   * 
   * - **AP-Singapore<props="intl">(default)**: Singapore.
   * 
   * - **EMAA-Saudi**: Saudi Arabia.
   * 
   * @example
   * CN-Shanghai
   */
  region?: string;
  /**
   * @remarks
   * The SEI configuration parameters.
   */
  seiParamsShrink?: string;
  /**
   * @remarks
   * The parameters for single-stream ingest. This parameter is required when MixMode is set to 0. Do not set this parameter for stream mixing and transcoding.
   */
  singleSubParamsShrink?: string;
  /**
   * @remarks
   * The live ingest URL. Only the RTMP protocol is supported. Only one URL is supported. The maximum length is 2048 characters. For information about how to generate the URL, see [Ingest URLs and playback URLs](https://help.aliyun.com/document_detail/199339.html).
   * 
   * > - For domain names with hotlink protection enabled, the ingest URL must include an access token.
   * 
   * - Do not use the same StreamURL in different tasks at the same time.
   * 
   * - Do not use the same StreamURL within 10 seconds after a task stops.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @remarks
   * The task ID. Only one ID is supported. It can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 55 characters. This ID is the unique identifier for the bypass ingest task.
   * If a task with the same ID still exists and has not been cleared when you start a new task, \\`InvalidParam\\` is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The parameters for stream mixing and transcoding. This parameter is required when MixMode is set to 1. Do not set this parameter for single-stream ingest.
   */
  transcodeParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      maxIdleTime: 'MaxIdleTime',
      mixMode: 'MixMode',
      multiStreamURLShrink: 'MultiStreamURL',
      region: 'Region',
      seiParamsShrink: 'SeiParams',
      singleSubParamsShrink: 'SingleSubParams',
      streamURL: 'StreamURL',
      taskId: 'TaskId',
      transcodeParamsShrink: 'TranscodeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      maxIdleTime: 'string',
      mixMode: 'string',
      multiStreamURLShrink: 'string',
      region: 'string',
      seiParamsShrink: 'string',
      singleSubParamsShrink: 'string',
      streamURL: 'string',
      taskId: 'string',
      transcodeParamsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

