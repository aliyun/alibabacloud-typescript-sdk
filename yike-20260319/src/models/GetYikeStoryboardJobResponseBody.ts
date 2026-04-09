// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeStoryboardJobResponseBodyJobParams extends $dara.Model {
  /**
   * @example
   * 16:9
   */
  aspectRatio?: string;
  /**
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/test.mp4
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
   * 1K
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
   * wan2.6-r2v-flash
   */
  videoModel?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      fileURL: 'FileURL',
      modelParams: 'ModelParams',
      narrationVoiceId: 'NarrationVoiceId',
      resolution: 'Resolution',
      shotPromptMode: 'ShotPromptMode',
      shotSplitMode: 'ShotSplitMode',
      sourceType: 'SourceType',
      styleId: 'StyleId',
      title: 'Title',
      videoModel: 'VideoModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      fileURL: 'string',
      modelParams: 'string',
      narrationVoiceId: 'string',
      resolution: 'string',
      shotPromptMode: 'string',
      shotSplitMode: 'string',
      sourceType: 'string',
      styleId: 'string',
      title: 'string',
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

export class GetYikeStoryboardJobResponseBodyJobResult extends $dara.Model {
  /**
   * @example
   * [\\"st_2053348871\\"]
   */
  exceptionStoryboardIds?: string;
  /**
   * @example
   * [{\\"errorCode\\":\\"NoMediaData\\",\\"storyboardId\\":\\"st_2118280473\\",\\"shotId\\":\\"54\\"}]
   */
  failureShotList?: string;
  /**
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  outputUrl?: string;
  /**
   * @example
   * [{\\"storyboardId\\":\\"st_1541525214\\",\\"title\\":\\"test_1\\",\\"status\\":\\"Produced\\",\\"subStatus\\":\\"ProduceSucc\\"},{\\"storyboardId\\":\\"st_1633435355\\",\\"title\\":\\"test_2\\",\\"status\\":\\"Produced\\",\\"subStatus\\":\\"ProduceSucc\\"}]
   */
  storyboardInfoList?: string;
  /**
   * @example
   * st_2118280473, st_2118280471
   */
  successStoryboardIds?: string;
  /**
   * @example
   * [\\"st_2118280473\\"]
   */
  successStoryboardList?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionStoryboardIds: 'ExceptionStoryboardIds',
      failureShotList: 'FailureShotList',
      outputUrl: 'OutputUrl',
      storyboardInfoList: 'StoryboardInfoList',
      successStoryboardIds: 'SuccessStoryboardIds',
      successStoryboardList: 'SuccessStoryboardList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionStoryboardIds: 'string',
      failureShotList: 'string',
      outputUrl: 'string',
      storyboardInfoList: 'string',
      successStoryboardIds: 'string',
      successStoryboardList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeStoryboardJobResponseBody extends $dara.Model {
  /**
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  jobParams?: GetYikeStoryboardJobResponseBodyJobParams;
  jobResult?: GetYikeStoryboardJobResponseBodyJobResult;
  /**
   * @example
   * Succeeded
   */
  jobStatus?: string;
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobParams: 'JobParams',
      jobResult: 'JobResult',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobParams: GetYikeStoryboardJobResponseBodyJobParams,
      jobResult: GetYikeStoryboardJobResponseBodyJobResult,
      jobStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobParams && typeof (this.jobParams as any).validate === 'function') {
      (this.jobParams as any).validate();
    }
    if(this.jobResult && typeof (this.jobResult as any).validate === 'function') {
      (this.jobResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

