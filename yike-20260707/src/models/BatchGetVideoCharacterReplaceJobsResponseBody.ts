// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultAudioResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the output media asset.
   * 
   * @example
   * 1a7852b032c371f0b64fe6f6c74b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The download URL of the output media asset.
   * 
   * @example
   * https://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.mp3
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

export class BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the output media asset.
   * 
   * @example
   * 1a7852b032c371f0b64fe6f6c74b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The download URL of the output media asset.
   * 
   * @example
   * https://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.png
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

export class BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultVideoResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the output media asset.
   * 
   * @example
   * 1a7852b032c371f0b64fe6f6c74b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The download URL of the output media asset.
   * 
   * @example
   * https://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.mp4
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

export class BatchGetVideoCharacterReplaceJobsResponseBodyJobListResult extends $dara.Model {
  /**
   * @remarks
   * The list of output audio files.
   */
  audioResult?: BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultAudioResult[];
  /**
   * @remarks
   * The list of output images.
   */
  imageResult?: BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultImageResult[];
  /**
   * @remarks
   * The list of output videos.
   */
  videoResult?: BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultVideoResult[];
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      imageResult: 'ImageResult',
      videoResult: 'VideoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: { 'type': 'array', 'itemType': BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultAudioResult },
      imageResult: { 'type': 'array', 'itemType': BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultImageResult },
      videoResult: { 'type': 'array', 'itemType': BatchGetVideoCharacterReplaceJobsResponseBodyJobListResultVideoResult },
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

export class BatchGetVideoCharacterReplaceJobsResponseBodyJobList extends $dara.Model {
  /**
   * @remarks
   * The ID of the video character replacement application. Make sure to use a configured application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The application input parameters specified when the job was submitted. The value is a JSON serialized string. This corresponds to the AppParams parameter in the submit operation.
   * 
   * @example
   * {"LoadImage.1.TargetImage":"1a7852b032c371f0b64fe6f6c74b****"}
   */
  appInputConfig?: string;
  /**
   * @remarks
   * The time when the job finished execution. The time is in the ISO 8601 format with a time zone.
   * 
   * @example
   * 2026-02-06T18:54:18.809+08:00
   */
  executionFinishTime?: string;
  /**
   * @remarks
   * The time when the job started execution. The time is in the ISO 8601 format with a time zone.
   * 
   * @example
   * 2026-02-06T18:53:34.001+08:00
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * folder-u3ilwhoc36ux9a****
   */
  folderId?: string;
  /**
   * @remarks
   * The job ID, which is returned by the SubmitVideoCharacterReplaceJob operation.
   * 
   * @example
   * ag_83baeea38b534ee1937b8a4acd08****
   */
  jobId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_061716****
   */
  projectId?: string;
  /**
   * @remarks
   * The output results of the job, categorized by image, video, and audio.
   */
  result?: BatchGetVideoCharacterReplaceJobsResponseBodyJobListResult;
  /**
   * @remarks
   * The job status. Valid values:
   * - Created: The job is created.
   * - Queuing: The job is queuing.
   * - Executing: The job is being executed.
   * - Finished: The job is finished.
   * - Failed: The job failed.
   * 
   * @example
   * Finished
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
      projectId: 'ProjectId',
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
      projectId: 'string',
      result: BatchGetVideoCharacterReplaceJobsResponseBodyJobListResult,
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

export class BatchGetVideoCharacterReplaceJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of job query results.
   */
  jobList?: BatchGetVideoCharacterReplaceJobsResponseBodyJobList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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
      jobList: { 'type': 'array', 'itemType': BatchGetVideoCharacterReplaceJobsResponseBodyJobList },
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

