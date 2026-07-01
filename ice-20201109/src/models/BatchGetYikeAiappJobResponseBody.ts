// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetYikeAIAppJobResponseBodyJobListResultAudioResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * bb1dfa20a0c971f08c94e7f6d6496202
   */
  mediaId?: string;
  /**
   * @remarks
   * The output URL.
   * 
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/01e1271d-ff4f-4689-9c20-e1df81486859_open_live_cover.mp3
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetYikeAIAppJobResponseBodyJobListResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 318d6350a57d71f08c9ae7f7d4496302
   */
  mediaId?: string;
  /**
   * @remarks
   * The output URL.
   * 
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/01e1271d-ff4f-4689-9c20-e1df81486859_open_live_cover.jpg
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetYikeAIAppJobResponseBodyJobListResultVideoResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ec2de25068fd71f0a48cf7e6c4596302
   */
  mediaId?: string;
  /**
   * @remarks
   * The output URL.
   * 
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/01e1271d-ff4f-4689-9c20-e1df81486859_open_live_cover.mp4
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetYikeAIAppJobResponseBodyJobListResult extends $dara.Model {
  /**
   * @remarks
   * The audio result.
   */
  audioResult?: BatchGetYikeAIAppJobResponseBodyJobListResultAudioResult[];
  /**
   * @remarks
   * The image result.
   */
  imageResult?: BatchGetYikeAIAppJobResponseBodyJobListResultImageResult[];
  /**
   * @remarks
   * The video result.
   */
  videoResult?: BatchGetYikeAIAppJobResponseBodyJobListResultVideoResult[];
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      imageResult: 'ImageResult',
      videoResult: 'VideoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: { 'type': 'array', 'itemType': BatchGetYikeAIAppJobResponseBodyJobListResultAudioResult },
      imageResult: { 'type': 'array', 'itemType': BatchGetYikeAIAppJobResponseBodyJobListResultImageResult },
      videoResult: { 'type': 'array', 'itemType': BatchGetYikeAIAppJobResponseBodyJobListResultVideoResult },
    };
  }

  validate() {
    if(Array.isArray(this.audioResult)) {
      $dara.Model.validateArray(this.audioResult);
    }
    if(Array.isArray(this.imageResult)) {
      $dara.Model.validateArray(this.imageResult);
    }
    if(Array.isArray(this.videoResult)) {
      $dara.Model.validateArray(this.videoResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetYikeAIAppJobResponseBodyJobList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 9e09955d662a
   */
  appId?: string;
  /**
   * @remarks
   * The AI application\\"s input parameters, formatted as a JSON-serialized string.
   * 
   * @example
   * {\\"LoadImage.1.TargetImage\\":\\"MediaId1\\"}
   */
  appInputConfig?: string;
  /**
   * @remarks
   * The time the job execution finished. The time is in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2026-02-06T18:53:34.001+08:00
   */
  executionFinishTime?: string;
  /**
   * @remarks
   * The time the job execution started. The time is in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2026-02-06T18:53:18.809+08:00
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * pd_0617169475
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * pd_0617169475
   */
  productionId?: string;
  /**
   * @remarks
   * The execution result of the job.
   */
  result?: BatchGetYikeAIAppJobResponseBodyJobListResult;
  /**
   * @remarks
   * The status of the job. Valid values are:
   * 
   * - `Created`: The job has been created.
   * 
   * - `Queuing`: The job is in the queue.
   * 
   * - `Executing`: The job is executing.
   * 
   * - `Finished`: The job completed successfully.
   * 
   * - `Failed`: The job failed to complete.
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInputConfig: 'AppInputConfig',
      executionFinishTime: 'ExecutionFinishTime',
      executionStartTime: 'ExecutionStartTime',
      folderId: 'FolderId',
      jobId: 'JobId',
      productionId: 'ProductionId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInputConfig: 'string',
      executionFinishTime: 'string',
      executionStartTime: 'string',
      folderId: 'string',
      jobId: 'string',
      productionId: 'string',
      result: BatchGetYikeAIAppJobResponseBodyJobListResult,
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetYikeAIAppJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs. Each object mirrors the details returned by the `GetYikeAIAppJob` operation.
   */
  jobList?: BatchGetYikeAIAppJobResponseBodyJobList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': BatchGetYikeAIAppJobResponseBodyJobList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

