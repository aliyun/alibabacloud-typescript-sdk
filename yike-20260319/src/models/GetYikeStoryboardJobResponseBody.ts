// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeStoryboardJobResponseBodyJobCredit extends $dara.Model {
  /**
   * @remarks
   * The credit consumption for element image generation.
   * 
   * @example
   * 10.0
   */
  elementImageGeneration?: string;
  /**
   * @remarks
   * The total credit consumption.
   * 
   * @example
   * 200.2
   */
  totalCreditCost?: string;
  /**
   * @remarks
   * The credit consumption for video composition.
   * 
   * @example
   * 10.2
   */
  videoComposition?: string;
  /**
   * @remarks
   * The credit consumption for video generation.
   * 
   * @example
   * 180.0
   */
  videoGeneration?: string;
  static names(): { [key: string]: string } {
    return {
      elementImageGeneration: 'ElementImageGeneration',
      totalCreditCost: 'TotalCreditCost',
      videoComposition: 'VideoComposition',
      videoGeneration: 'VideoGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elementImageGeneration: 'string',
      totalCreditCost: 'string',
      videoComposition: 'string',
      videoGeneration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The random seed.
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
   * The resolution of the generated video.
   * 
   * @example
   * 1K
   */
  resolution?: string;
  /**
   * @remarks
   * The shot prompt generation mode.
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
   * The task title. Requirements:
   * - The title cannot exceed 128 bytes in length.
   * - The title must be UTF-8 encoded.
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
   * The list of abnormal storyboard IDs.
   * 
   * @example
   * [\\"st_2053348871\\"]
   */
  exceptionStoryboardIds?: string;
  /**
   * @remarks
   * The list of failed shots.
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
   * The URL of the SRT file.
   * 
   * @example
   * https://bucket.oss-cn-shanghai.aliyuncs.com/test/110412818/6bf24c75285142f395464d4b9c2bcf07.srt?Expires=1778220836&OSSAccessKeyId=*******&Signature=*******
   */
  srtFileUrl?: string;
  /**
   * @remarks
   * The detailed storyboard information for the storyboard generation task.
   * 
   * @example
   * [{\\"storyboardId\\":\\"st_1541525214\\",\\"title\\":\\"test_1\\",\\"status\\":\\"Produced\\",\\"subStatus\\":\\"ProduceSucc\\"},{\\"storyboardId\\":\\"st_1633435355\\",\\"title\\":\\"test_2\\",\\"status\\":\\"Produced\\",\\"subStatus\\":\\"ProduceSucc\\"}]
   */
  storyboardInfoList?: string;
  /**
   * @remarks
   * The list of successful storyboard IDs, separated by commas.
   * 
   * @example
   * st_2118280473, st_2118280471
   */
  successStoryboardIds?: string;
  /**
   * @remarks
   * The list of successful storyboards.
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
      srtFileUrl: 'SrtFileUrl',
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
      srtFileUrl: 'string',
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
   * The credit consumption.
   */
  jobCredit?: GetYikeStoryboardJobResponseBodyJobCredit;
  /**
   * @remarks
   * The task ID. You can obtain this value from the response of [SubmitPackageJob](https://help.aliyun.com/document_detail/461964.html).
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The algorithm job parameters. This is a JSON object whose content varies depending on the algorithm.
   */
  jobParams?: GetYikeStoryboardJobResponseBodyJobParams;
  /**
   * @remarks
   * The task result.
   */
  jobResult?: GetYikeStoryboardJobResponseBodyJobResult;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Succeeded**: The task is successful.
   * 
   * - **Failed**: The task failed.
   * 
   * - **Running**: The task is running.
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
      jobCredit: 'JobCredit',
      jobId: 'JobId',
      jobParams: 'JobParams',
      jobResult: 'JobResult',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobCredit: GetYikeStoryboardJobResponseBodyJobCredit,
      jobId: 'string',
      jobParams: GetYikeStoryboardJobResponseBodyJobParams,
      jobResult: GetYikeStoryboardJobResponseBodyJobResult,
      jobStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobCredit && typeof (this.jobCredit as any).validate === 'function') {
      (this.jobCredit as any).validate();
    }
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

