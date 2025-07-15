// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartLiveMPUTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can specify only one application ID. The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. You can specify only one channel ID. The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: [10,86400].
   * 
   * >  If the task is idle for a period of time longer than the duration specified by the MaxIdleTime parameter, the task is automatically stopped. If the parameter is not specified, the task is stopped after the channel is closed.
   * 
   * @example
   * 10
   */
  maxIdleTime?: string;
  /**
   * @remarks
   * The stream mixing mode. Valid values:
   * 
   * *   **0**: the single-stream relay mode. In this mode, the service only relays the original single stream, but does not transcode mixed streams. You do not need to set parameters for mixed-stream transcoding.
   * *   **1** (default): the mixed-stream relay mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  mixMode?: string;
  /**
   * @remarks
   * The multiple ingest URLs to relay. This parameter allows you to specify multiple ingest URLs.
   * 
   * >  The StreamURL and MultiStreamURL parameters are mutually exclusive. You must specify one of the two parameters.
   */
  multiStreamURLShrink?: string;
  /**
   * @remarks
   * The region in which the streams are mixed. Valid values:
   * 
   * *   **CN-Shanghai**
   * *   **AP-Singapore** (default)
   * *   **EMAA-Saudi**
   * 
   * @example
   * CN-Shanghai
   */
  region?: string;
  /**
   * @remarks
   * The supplemental enhancement information (SEI) parameters.
   */
  seiParamsShrink?: string;
  /**
   * @remarks
   * The single-stream relay parameters. These parameters are required if you set MixMode to 0. Leave these parameters empty in the mixed-stream relay mode.
   */
  singleSubParamsShrink?: string;
  /**
   * @remarks
   * The ingest URL. You can specify only one ingest URL in the Real-Time Messaging Protocol (RTMP) format. The URL can be up to 2,048 characters in length. For information about the generation rules of ingest URLs, see [Ingest and streaming URLs](https://help.aliyun.com/document_detail/199339.html).
   * 
   * > 
   * 
   * *   If the ingest URL is under a domain name for which hotlink protection is enabled, you must include an access token in the URL.
   * *   You cannot use the same ingest URL in different tasks.
   * *   You cannot use the same ingest URL within 10 seconds after a task is stopped.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  streamURL?: string;
  /**
   * @remarks
   * The task ID. You can specify only one task ID. The ID can be up to 55 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The ID must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The mixed-stream relay parameters. These parameters are required if you set MixMode to 1. Leave these parameters empty if you use the single-stream relay mode.
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

