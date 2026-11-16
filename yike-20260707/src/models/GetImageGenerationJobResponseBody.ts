// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageGenerationJobResponseBodyImageGenerationJob extends $dara.Model {
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
   * The error message. The value is a string. This field is returned when the job status is Failed.
   * 
   * @example
   * Input file not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The job input.
   * 
   * @example
   * {"Prompt":"Image 1 is on the basketball court, performing a slam dunk using Image 2"}
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
   * The job feature configurations. No configuration is required at this time.
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
   * The generation result. The value is a JSON string that contains the following fields:
   * - Medias: the list of media information (Media objects). A Media object contains the following fields:
   *   - MediaId: String. The media asset ID.
   *   - OutputUrl: String. The media URL, including the authentication string.
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
   * The scene type. Currently, only `general` is supported.
   * 
   * @example
   * general
   */
  scene?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * - Created: The job is created.
   * - Queuing: The job is queuing.
   * - Executing: The job is executing.
   * - Finished: The job succeeded.
   * - Failed: The job failed.
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
   * The image generation job.
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

