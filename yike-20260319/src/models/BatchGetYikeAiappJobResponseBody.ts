// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchGetYikeAIAppJobResponseBodyJobListResultAudioResult extends $dara.Model {
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * bb1dfa20a0c971f08c94e7f6d6496202
   */
  mediaId?: string;
  /**
   * @remarks
   * The output file URL.
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
   * The media asset ID.
   * 
   * @example
   * 318d6350a57d71f08c9ae7f7d4496302
   */
  mediaId?: string;
  /**
   * @remarks
   * The output file URL.
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
   * The media asset ID.
   * 
   * @example
   * ec2de25068fd71f0a48cf7e6c4596302
   */
  mediaId?: string;
  /**
   * @remarks
   * The output file URL.
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
   * The audio task result.
   */
  audioResult?: BatchGetYikeAIAppJobResponseBodyJobListResultAudioResult[];
  /**
   * @remarks
   * The image task result.
   */
  imageResult?: BatchGetYikeAIAppJobResponseBodyJobListResultImageResult[];
  /**
   * @remarks
   * The video task result.
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
   * The application ID.
   * 
   * @example
   * 9e09955d662a
   */
  appId?: string;
  /**
   * @remarks
   * The input parameters for running the AI application. The value is a JSON-serialized string.
   * 
   * @example
   * {\\"LoadImage.1.TargetImage\\":\\"MediaId1\\"}
   */
  appInputConfig?: string;
  /**
   * @remarks
   * The time when the task started. The time is in the yyyy-mm-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2026-02-06T18:53:34.001+08:00
   */
  executionFinishTime?: string;
  /**
   * @remarks
   * The time when the task ended. The time is in the yyyy-mm-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2026-02-06T18:53:18.809+08:00
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * pd_0617169475
   */
  folderId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ****a046-263c-3560-978a-fb287782****
   */
  jobId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_0617169475
   */
  productionId?: string;
  /**
   * @remarks
   * The task execution result.
   */
  result?: BatchGetYikeAIAppJobResponseBodyJobListResult;
  /**
   * @remarks
   * The task status. Valid values:
   * - Created: The task is created.
   * - Queuing: The task is queuing.
   * - Executing: The task is being executed.
   * - Finished: The task is finished.
   * - Failed: The task failed.
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
   * The list of tasks. Each element in the list is the same as the result of GetYikeAIAppJob.
   */
  jobList?: BatchGetYikeAIAppJobResponseBodyJobList[];
  /**
   * @remarks
   * The request ID.
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

