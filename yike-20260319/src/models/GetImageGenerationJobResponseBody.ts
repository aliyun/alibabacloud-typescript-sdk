// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageGenerationJobResponseBodyImageGenerationJob extends $dara.Model {
  /**
   * @example
   * 16:9
   */
  aspectRatio?: string;
  /**
   * @example
   * Input file not found.
   */
  errorMessage?: string;
  /**
   * @example
   * {"Prompt":"图1在篮球场上，用图2来了个灌篮"}
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
   * text_to_image
   */
  jobType?: string;
  /**
   * @example
   * wan2.7-image
   */
  model?: string;
  /**
   * @example
   * 1
   */
  n?: string;
  /**
   * @example
   * {"Medias":[{"MediaId":"***e3700761971f19c32e7e7d5496***","OutputUrl":"https://**bucket**.oss-ap-southeast-1.aliyuncs.com/xxx.prd"}]}
   */
  output?: string;
  /**
   * @example
   * 1K
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
      errorMessage: 'string',
      input: 'string',
      jobId: 'string',
      jobParameters: 'string',
      jobType: 'string',
      model: 'string',
      n: 'string',
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

export class GetImageGenerationJobResponseBody extends $dara.Model {
  imageGenerationJob?: GetImageGenerationJobResponseBodyImageGenerationJob;
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageGenerationJob: 'ImageGenerationJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageGenerationJob: GetImageGenerationJobResponseBodyImageGenerationJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.imageGenerationJob && typeof (this.imageGenerationJob as any).validate === 'function') {
      (this.imageGenerationJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

