// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeStoryboardJobResponseBodyJobParams extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio of the video.
   * 
   * @example
   * 16:9
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The OSS URL of the file.
   * 
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The model parameters.
   * 
   * @example
   * {
   *   "AudioEnable": false
   * }
   */
  modelParams?: string;
  /**
   * @remarks
   * The narration voice.
   * 
   * @example
   * sys_YoungGracefulWoman
   */
  narrationVoiceId?: string;
  /**
   * @remarks
   * The resolution of the generated video.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  /**
   * @remarks
   * The shot generation mode.
   * 
   * @example
   * multi
   */
  shotPromptMode?: string;
  /**
   * @remarks
   * The shot splitting mode.
   * 
   * @example
   * firstPersonNarration
   */
  shotSplitMode?: string;
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
   * The style ID.
   * 
   * @example
   * RealisticPhotography
   */
  styleId?: string;
  /**
   * @remarks
   * The job title.
   * 
   * \\- Maximum length: 128 bytes.
   * 
   * \\- UTF-8 encoding.
   * 
   * @example
   * test-title
   */
  title?: string;
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
   * @remarks
   * A list of IDs for storyboards that encountered an exception.
   * 
   * @example
   * [\\"st_2053348871\\"]
   */
  exceptionStoryboardIds?: string;
  /**
   * @remarks
   * A list of shots that failed to generate.
   * 
   * @example
   * [{\\"errorCode\\":\\"NoMediaData\\",\\"storyboardId\\":\\"st_2118280473\\",\\"shotId\\":\\"54\\"}]
   */
  failureShotList?: string;
  /**
   * @remarks
   * The downloadable OSS URL.
   * 
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  outputUrl?: string;
  /**
   * @remarks
   * Detailed information about each storyboard in the job.
   * 
   * @example
   * [{\\"storyboardId\\":\\"st_1541525214\\",\\"title\\":\\"test_1\\",\\"status\\":\\"Produced\\",\\"subStatus\\":\\"ProduceSucc\\"},{\\"storyboardId\\":\\"st_1633435355\\",\\"title\\":\\"test_2\\",\\"status\\":\\"Produced\\",\\"subStatus\\":\\"ProduceSucc\\"}]
   */
  storyboardInfoList?: string;
  /**
   * @remarks
   * A comma-separated list of successful storyboard IDs.
   * 
   * @example
   * st_2118280473, st_2118280471
   */
  successStoryboardIds?: string;
  /**
   * @remarks
   * A list of IDs for successful storyboards.
   * 
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
   * @remarks
   * The storyboard job ID. You can obtain this ID from the response parameters of the [SubmitStoryboardJob](https://help.aliyun.com/document_detail/461964.html) operation.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * A JSON object that contains the parameters for the job. The structure of this object varies based on the AI algorithm.
   */
  jobParams?: GetYikeStoryboardJobResponseBodyJobParams;
  /**
   * @remarks
   * The job result.
   */
  jobResult?: GetYikeStoryboardJobResponseBodyJobResult;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **Succeeded**: The job completed successfully.
   * 
   * - **Failed**: The job failed to complete.
   * 
   * - **Running**: The job is in progress.
   * 
   * @example
   * Succeeded
   */
  jobStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

