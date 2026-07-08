// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageGenerationJobResponseBodyImageGenerationJob extends $dara.Model {
  /**
   * @remarks
   * The video aspect ratio.
   * 
   * @example
   * 16:9
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The error message. This parameter is of the String type and is returned when the task is in the Failed state.
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
   * {"Prompt":"图1在篮球场上，用图2来了个灌篮"}
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
   * The task feature configuration. No configuration is required at this time.
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
   * text_to_image
   */
  jobType?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * wan2.7-image
   */
  model?: string;
  /**
   * @remarks
   * The number of generated images.
   * 
   * @example
   * 1
   */
  n?: string;
  /**
   * @remarks
   * The generation result in JSON string format. Fields:
   * - Medias: a list of media information (Media objects). Fields of a Media object:
   *   - MediaId: String. The media asset ID.
   *   - OutputUrl: String. The media URL (with authentication string).
   * 
   * @example
   * {"Medias":[{"MediaId":"***e3700761971f19c32e7e7d5496***","OutputUrl":"https://**bucket**.oss-ap-southeast-1.aliyuncs.com/xxx.prd"}]}
   */
  output?: string;
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
   * The scenario type. Currently only `general` is supported.
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
   * The custom business information.
   * 
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
  /**
   * @remarks
   * The image generation task.
   */
  imageGenerationJob?: GetImageGenerationJobResponseBodyImageGenerationJob;
  /**
   * @remarks
   * Id of the request
   * 
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

