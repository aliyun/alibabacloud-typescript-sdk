// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoGenerationJobResponseBodyVideoGenerationJob extends $dara.Model {
  /**
   * @example
   * 16:9
   */
  aspectRatio?: string;
  /**
   * @example
   * 5
   */
  duration?: string;
  /**
   * @example
   * Input file not found.
   */
  errorMessage?: string;
  /**
   * @example
   * {"Prompt":"图1在篮球场上，用图2来了个灌篮","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @example
   * fdc7f121056249c2b64e04bba27bcc8c
   */
  jobId?: string;
  /**
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @example
   * first_last_frame
   */
  jobType?: string;
  /**
   * @example
   * happyhorse-1.1
   */
  model?: string;
  /**
   * @example
   * 1
   */
  n?: number;
  /**
   * @example
   * {\\"Medias\\":[{\\"MediaId\\":\\"*****470732171f1bfcaf7f6d44*****\\",\\"OutputUrl\\":\\"https://xxxxxxx/.../xxxxx.mp4?Expires=xxxx&OSSAccessKeyId=xxx&Signature=xxxx\\"}]}
   */
  output?: string;
  /**
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @example
   * general
   */
  scene?: string;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
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
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
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

