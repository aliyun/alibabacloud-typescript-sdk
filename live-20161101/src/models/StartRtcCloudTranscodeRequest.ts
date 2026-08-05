// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudTranscodeRequestInputParamSingleSubUserParam extends $dara.Model {
  /**
   * @remarks
   * The type of the video input stream. This parameter is valid only if the subscribed media type includes a video stream. Valid values:
   * 
   * - 0 (default): The camera stream.
   * 
   * - 1: The screen sharing stream. (This value is not supported. The setting is invalid.)
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * The media type of the subscribed stream. Valid values:
   * 
   * - 0 (default): The original stream, which includes both the audio and video streams.
   * 
   * - 1: The audio-only stream. (This value is not supported. The setting is invalid.)
   * 
   * - 2: The video-only stream. (This value is not supported. The setting is invalid.)
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The ID of the user whose stream you want to subscribe to.
   * 
   * This parameter is required.
   * 
   * @example
   * userA
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
      streamType: 'StreamType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: 'number',
      streamType: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudTranscodeRequestInputParam extends $dara.Model {
  /**
   * @remarks
   * The input parameters for a single-stream subscription.
   * 
   * This parameter is required.
   */
  singleSubUserParam?: StartRtcCloudTranscodeRequestInputParamSingleSubUserParam;
  static names(): { [key: string]: string } {
    return {
      singleSubUserParam: 'SingleSubUserParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      singleSubUserParam: StartRtcCloudTranscodeRequestInputParamSingleSubUserParam,
    };
  }

  validate() {
    if(this.singleSubUserParam && typeof (this.singleSubUserParam as any).validate === 'function') {
      (this.singleSubUserParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudTranscodeRequestOutputParams extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel to which the transcoded stream is pushed. The ID can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters. (Pushing streams to a different channel is not supported. This setting is invalid.)
   * 
   * This parameter is required.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * The name of the transcoding template. Valid values:
   * 
   * - alimcopy
   * 
   * - lld
   * 
   * - lsd
   * 
   * - lhd
   * 
   * - lud
   * 
   * This parameter is required.
   * 
   * @example
   * lhd
   */
  transcodeTemplate?: string;
  /**
   * @remarks
   * The user ID for the transcoded stream in the destination channel. This ID must be unique within the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * userA_360p
   */
  userId?: string;
  /**
   * @remarks
   * The token required to push the transcoded stream to the channel. For more information, see [Token-based authentication](https://www.alibabacloud.com/help/en/apsaravideo-live/latest/token-based-authentication).
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhcHBpZCI********
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      transcodeTemplate: 'TranscodeTemplate',
      userId: 'UserId',
      userToken: 'UserToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      transcodeTemplate: 'string',
      userId: 'string',
      userToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRtcCloudTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to which the channel belongs. The ID can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel to which the user to be transcoded belongs. The ID can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * The parameters for the input stream subscription.
   * 
   * This parameter is required.
   */
  inputParam?: StartRtcCloudTranscodeRequestInputParam;
  /**
   * @remarks
   * The idle timeout period in seconds. If a task cannot subscribe to the specified streamer\\"s stream and remains idle for longer than this period, the task automatically stops. The value must be an integer from 10 to 14,400. The default value is 300.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The parameters for the transcoded output.
   * 
   * This parameter is required.
   */
  outputParams?: StartRtcCloudTranscodeRequestOutputParams[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      inputParam: 'InputParam',
      maxIdleTime: 'MaxIdleTime',
      outputParams: 'OutputParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      inputParam: StartRtcCloudTranscodeRequestInputParam,
      maxIdleTime: 'number',
      outputParams: { 'type': 'array', 'itemType': StartRtcCloudTranscodeRequestOutputParams },
    };
  }

  validate() {
    if(this.inputParam && typeof (this.inputParam as any).validate === 'function') {
      (this.inputParam as any).validate();
    }
    if(Array.isArray(this.outputParams)) {
      $dara.Model.validateArray(this.outputParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

