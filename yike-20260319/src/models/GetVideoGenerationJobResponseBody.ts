// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoGenerationJobResponseBodyVideoGenerationJob extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio.
   * 
   * @example
   * 16:9
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The video duration. Unit: seconds.
   * 
   * @example
   * 5
   */
  duration?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when the task is in the Failed state.
   * 
   * @example
   * Input file not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task input.
   * 
   * @example
   * {"Prompt":"图1在篮球场上，用图2来了个灌篮","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fdc7f121056249c2b64e04bba27bcc8c
   */
  jobId?: string;
  /**
   * @remarks
   * The task feature configuration. This parameter does not need to be set.
   * 
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * first_last_frame
   */
  jobType?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * happyhorse-1.1
   */
  model?: string;
  /**
   * @remarks
   * The number of generated videos.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The generation result. The value is a JSON string that contains the following fields:
   * 
   * Medias: a list of Media objects. Each Media object contains the following fields:
   * MediaId: String. The media asset ID.
   * OutputUrl: String. The media URL (with the authentication string).
   * 
   * @example
   * {\\"Medias\\":[{\\"MediaId\\":\\"*****470732171f1bfcaf7f6d44*****\\",\\"OutputUrl\\":\\"https://xxxxxxx/.../xxxxx.mp4?Expires=xxxx&OSSAccessKeyId=xxx&Signature=xxxx\\"}]}
   */
  output?: string;
  /**
   * @remarks
   * The resolution.
   * 
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @remarks
   * The scene type. Currently, only general is supported.
   * 
   * @example
   * general
   */
  scene?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - Created: The task is created.
   * - Queuing: The task is queuing.
   * - Executing: The task is being executed.
   * - Finished: The task is completed.
   * - Failed: The task failed.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The user business information.
   * 
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      duration: 'Duration',
      errorMessage: 'ErrorMessage',
      input: 'Input',
      jobId: 'JobId',
      jobParameters: 'JobParameters',
      jobType: 'JobType',
      model: 'Model',
      n: 'N',
      output: 'Output',
      resolution: 'Resolution',
      scene: 'Scene',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      duration: 'string',
      errorMessage: 'string',
      input: 'string',
      jobId: 'string',
      jobParameters: 'string',
      jobType: 'string',
      model: 'string',
      n: 'number',
      output: 'string',
      resolution: 'string',
      scene: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoGenerationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The video generation task.
   */
  videoGenerationJob?: GetVideoGenerationJobResponseBodyVideoGenerationJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      videoGenerationJob: 'VideoGenerationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      videoGenerationJob: GetVideoGenerationJobResponseBodyVideoGenerationJob,
    };
  }

  validate() {
    if(this.videoGenerationJob && typeof (this.videoGenerationJob as any).validate === 'function') {
      (this.videoGenerationJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

