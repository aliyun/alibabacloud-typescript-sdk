// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeStoryboardJobRequest extends $dara.Model {
  /**
   * @example
   * 4:3
   */
  aspectRatio?: string;
  /**
   * @example
   * FullPipeline
   */
  execMode?: string;
  /**
   * @example
   * http://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  fileURL?: string;
  /**
   * @example
   * {
   *   "AudioEnable": false
   * }
   */
  modelParams?: string;
  /**
   * @example
   * sys_YoungGracefulWoman
   */
  narrationVoiceId?: string;
  /**
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @example
   * multi
   */
  shotPromptMode?: string;
  /**
   * @example
   * firstPersonNarration
   */
  shotSplitMode?: string;
  /**
   * @example
   * True
   */
  skipFailureShot?: boolean;
  /**
   * @example
   * Novel
   */
  sourceType?: string;
  /**
   * @example
   * RealisticPhotography
   */
  styleId?: string;
  /**
   * @example
   * test-title
   */
  title?: string;
  /**
   * @example
   * {
   *   "NotifyAddress": "https://www.callback.com"
   * }
   */
  userData?: string;
  /**
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

