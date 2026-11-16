// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoGenerationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio. Valid values: 16:9 (default), 9:16, 4:3, 3:4, 1:1, and adaptive (valid only for wan3.0-video and wan3.0-video-prime).
   * 
   * @example
   * 9:16
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The idempotency parameter. A unique, case-sensitive, 32-character random string. This parameter ensures that the request is completed no more than once, preventing duplicate operations caused by multiple retries.
   * 
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @remarks
   * The output duration. Valid values: 4 to 15 seconds. Default value: 5 seconds.
   * - For wan3.0-video and wan3.0-video-prime, the maximum duration is 30 seconds.
   * 
   * @example
   * 5
   */
  duration?: string;
  /**
   * @remarks
   * The task input. This parameter is required. The value is a JSON string that contains the following fields:
   * - Prompt: the prompt. This field is required. Data type: String.
   * - Medias: the media list.
   *   - If JobType is set to image_to_video, this field is required and only one media file is required.
   *   - If JobType is set to first_last_frame, this field is required and exactly two media files are required.
   *   - If JobType is set to reference_to_video, this field is required and up to 9 media files are allowed. For wan3.0-video and wan3.0-video-prime, up to 20 media files are allowed, including up to 10 images, 5 videos, and 5 audio files. The total duration of audio and video files cannot exceed 15 seconds.
   * > The Media structure contains the following fields: Type, the media type. Data type: String. Valid values: image, video, and audio. URL, the download URL of the media file. Data type: String. MediaId, the media asset ID. Data type: String.
   * >
   * 
   * @example
   * {"Prompt":"Image 1 is on the basketball court, performing a slam dunk with Image 2","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @remarks
   * The task feature parameters. The value is a JSON string that contains the following fields:
   * - EnableAudio: specifies whether to output audio. Data type: Boolean. This field is optional. Valid values:
   *   - true: outputs audio.
   *   - false: does not output audio.
   * - Watermark: specifies whether to include a watermark. Data type: Boolean. This field is optional. Valid values:
   *   - true: adds an "AI-generated" watermark to the lower-right corner of the video.
   *   - false: does not add a watermark to the generated video.
   * - PromptExtend: specifies whether to enable intelligent prompt rewriting. Data type: Boolean. This field is optional. This field is valid only for wan3.0-video and wan3.0-video-prime. Valid values:
   *   - true: enables intelligent prompt rewriting. This is the default value.
   *   - false: disables intelligent prompt rewriting.
   * - PostProcessing: the post-processing feature switch. Data type: Object. This field contains the EnableSubtitleRemoval field. Data type: Boolean. Valid values:
   *   - true: enables subtitle removal.
   *   - false: disables subtitle removal.
   * 
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The task type. This parameter is required. Valid values:
   * - text_to_video: text-to-video
   * - image_to_video: image-to-video
   * - first_last_frame: first and last frames to video
   * - reference_to_video: reference to video
   * 
   * @example
   * text_to_video
   */
  jobType?: string;
  /**
   * @remarks
   * The model name. This parameter is required. Valid values:
   * - Wonder-Ultra
   * - Wonder-Pro
   * - Wonder-Standard
   * - wan3.0-video
   * - wan3.0-video-prime
   * - happyhorse-1.1
   * - happyhorse-1.0
   * - wan2.7
   * 
   * @example
   * happyhorse-1.1
   */
  model?: string;
  /**
   * @remarks
   * The number of outputs. Valid values: 1 to 4. Default value: 1.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The output configuration. The value is a JSON string. OssUri is the optional customer OSS output directory. If this parameter is not specified, a signed URL for the service-generated output is returned.
   * 
   * @example
   * {"OssUri":"oss://example-bucket/video-translation/output/"}
   */
  output?: string;
  /**
   * @remarks
   * The resolution. Valid values:
   * - 1080P
   * - 720P: the default value
   * - 480P: valid only for wan3.0-video and wan3.0-video-prime
   * 
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @remarks
   * The scene type. Valid values: general.
   * 
   * @example
   * general
   */
  scene?: string;
  /**
   * @remarks
   * The user-defined parameters. The value is a JSON string. The callback result returns this parameter as is. The system reserved field NotifyAddress specifies the callback URL. The system calls this URL after the task is completed.
   * 
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      clientToken: 'ClientToken',
      duration: 'Duration',
      input: 'Input',
      jobParameters: 'JobParameters',
      jobType: 'JobType',
      model: 'Model',
      n: 'N',
      output: 'Output',
      resolution: 'Resolution',
      scene: 'Scene',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      clientToken: 'string',
      duration: 'string',
      input: 'string',
      jobParameters: 'string',
      jobType: 'string',
      model: 'string',
      n: 'number',
      output: 'string',
      resolution: 'string',
      scene: 'string',
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

