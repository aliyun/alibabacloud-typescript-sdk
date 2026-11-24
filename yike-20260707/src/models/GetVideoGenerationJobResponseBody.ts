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
   * The error message. The value is a string and is returned when the task status is Failed.
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
   * {"Prompt":"Image 1 is on the basketball court, performing a slam dunk using Image 2","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ag_68ca759b4903b255*******
   */
  jobId?: string;
  /**
   * @remarks
   * The task feature configuration. Currently, no configuration is required.
   * 
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The job type.
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
   * Medias: the list of media information (Media objects). The Media object includes the following fields:
   * MediaId: String. The media asset ID.
   * OutputUrl: String. The media URL, including the authentication string.
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
   * - Executing: The task is executing.
   * - Finished: The task ran successfully.
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

