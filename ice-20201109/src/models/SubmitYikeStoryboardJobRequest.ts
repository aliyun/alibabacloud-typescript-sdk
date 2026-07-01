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
   * The storyboard generation execution mode.
   * 
   * - `FullPipeline`: Executes the full generation pipeline, including both storyboard creation and shot video generation.
   * 
   * - `StoryboardOnly`: Generates only the storyboard.
   * 
   * @example
   * FullPipeline
   */
  execMode?: string;
  /**
   * @remarks
   * The OSS address of the file.
   * 
   * @example
   * http://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * Parameters for the model, in JSON format.
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
   * Specifies whether to skip a failed shot. The default value is `true`.
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
   * The job title. It must be a UTF-8 encoded string of up to 128 bytes. If you do not specify a title, the system generates a default one based on the date.
   * 
   * @example
   * test-title
   */
  title?: string;
  /**
   * @remarks
   * Custom settings in JSON format. This parameter can contain the following field:
   * 
   * - The `NotifyAddress` field specifies the callback URL that is invoked when the job is complete. Both MNS and HTTP callbacks are supported.
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

