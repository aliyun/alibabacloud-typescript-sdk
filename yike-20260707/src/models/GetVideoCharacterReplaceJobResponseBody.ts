// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoCharacterReplaceJobResponseBodyResultAudioResult extends $dara.Model {
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

export class GetVideoCharacterReplaceJobResponseBodyResultImageResult extends $dara.Model {
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

export class GetVideoCharacterReplaceJobResponseBodyResultVideoResult extends $dara.Model {
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

export class GetVideoCharacterReplaceJobResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of output audio files.
   */
  audioResult?: GetVideoCharacterReplaceJobResponseBodyResultAudioResult[];
  /**
   * @remarks
   * The list of output images.
   */
  imageResult?: GetVideoCharacterReplaceJobResponseBodyResultImageResult[];
  /**
   * @remarks
   * The list of output videos.
   */
  videoResult?: GetVideoCharacterReplaceJobResponseBodyResultVideoResult[];
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      imageResult: 'ImageResult',
      videoResult: 'VideoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: { 'type': 'array', 'itemType': GetVideoCharacterReplaceJobResponseBodyResultAudioResult },
      imageResult: { 'type': 'array', 'itemType': GetVideoCharacterReplaceJobResponseBodyResultImageResult },
      videoResult: { 'type': 'array', 'itemType': GetVideoCharacterReplaceJobResponseBodyResultVideoResult },
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

export class GetVideoCharacterReplaceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the video character replacement application. Use a configured application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The application input parameters, which are serialized into a JSON string. The field names and material requirements are subject to the input definition of the corresponding AppId.
   * 
   * @example
   * {"LoadImage.1.TargetImage":"1a7852b032c371f0b64fe6f6c74b****"}
   */
  appParams?: string;
  /**
   * @remarks
   * The time when the task finished execution, in ISO 8601 format with time zone.
   * 
   * @example
   * 2026-02-06T18:54:18.809+08:00
   */
  executionFinishTime?: string;
  /**
   * @remarks
   * The time when the task started execution, in ISO 8601 format with time zone.
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
   * The task ID, which is returned by SubmitVideoCharacterReplaceJob.
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
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The task output results, categorized by image, video, and audio.
   */
  result?: GetVideoCharacterReplaceJobResponseBodyResult;
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
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appParams: 'AppParams',
      executionFinishTime: 'ExecutionFinishTime',
      executionStartTime: 'ExecutionStartTime',
      folderId: 'FolderId',
      jobId: 'JobId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appParams: 'string',
      executionFinishTime: 'string',
      executionStartTime: 'string',
      folderId: 'string',
      jobId: 'string',
      projectId: 'string',
      requestId: 'string',
      result: GetVideoCharacterReplaceJobResponseBodyResult,
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

