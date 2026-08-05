// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeStoryboardJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio of the output video.
   * 
   * @example
   * 4:3
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The execution mode for storyboard generation. Valid values:
   * 
   * - FullPipeline: full pipeline generation, which includes storyboard generation and shot video generation.
   * 
   * - StoryboardOnly: generates only the storyboard.
   * 
   * @example
   * FullPipeline
   */
  execMode?: string;
  /**
   * @remarks
   * The OSS URL of the file.
   * 
   * @example
   * http://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The model feature parameters in JSON format.
   * 
   * @example
   * {
   *   "AudioEnable": false
   * }
   */
  modelParams?: string;
  /**
   * @remarks
   * The narration voice ID.
   * 
   * @example
   * sys_YoungGracefulWoman
   */
  narrationVoiceId?: string;
  /**
   * @remarks
   * The resolution of the output video.
   * 
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @remarks
   * The storyboard shot generation mode.
   * 
   * @example
   * multi
   */
  shotPromptMode?: string;
  /**
   * @remarks
   * The shot split mode.
   * 
   * @example
   * firstPersonNarration
   */
  shotSplitMode?: string;
  /**
   * @remarks
   * Specifies whether to skip failed shots. Default value: True.
   * 
   * @example
   * True
   */
  skipFailureShot?: boolean;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * Novel
   */
  sourceType?: string;
  /**
   * @remarks
   * The storyboard style ID.
   * 
   * @example
   * RealisticPhotography
   */
  styleId?: string;
  /**
   * @remarks
   * The task title. If not specified, a default title is automatically generated based on the date. The title cannot exceed 128 bytes in length and must be UTF-8 encoded.
   * 
   * @example
   * test-title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings in JSON format. Fields:
   * - NotifyAddress: the callback URL for task completion. MNS callbacks and HTTP callbacks are supported.
   * 
   * @example
   * {
   *   "NotifyAddress": "https://www.callback.com"
   * }
   */
  userData?: string;
  /**
   * @remarks
   * The video model.
   * 
   * @example
   * wan2.6-r2v-flash
   */
  videoModel?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      execMode: 'ExecMode',
      fileURL: 'FileURL',
      modelParams: 'ModelParams',
      narrationVoiceId: 'NarrationVoiceId',
      resolution: 'Resolution',
      shotPromptMode: 'ShotPromptMode',
      shotSplitMode: 'ShotSplitMode',
      skipFailureShot: 'SkipFailureShot',
      sourceType: 'SourceType',
      styleId: 'StyleId',
      title: 'Title',
      userData: 'UserData',
      videoModel: 'VideoModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      execMode: 'string',
      fileURL: 'string',
      modelParams: 'string',
      narrationVoiceId: 'string',
      resolution: 'string',
      shotPromptMode: 'string',
      shotSplitMode: 'string',
      skipFailureShot: 'boolean',
      sourceType: 'string',
      styleId: 'string',
      title: 'string',
      userData: 'string',
      videoModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

