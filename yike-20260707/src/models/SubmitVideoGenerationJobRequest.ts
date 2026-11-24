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
   * The idempotency parameter. A unique, case-sensitive, 32-character random string. This parameter ensures that the request is completed only once and prevents duplicate operations caused by multiple retries.
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
   * - Prompt: the prompt. This field is required. Type: String.
   * - Medias: the media list.
   *   - When JobType is set to image_to_video, this field is required and only one media file is needed.
   *   - When JobType is set to first_last_frame, this field is required and exactly two media files are needed.
   *   - When JobType is set to reference_to_video, this field is required and up to 9 media files are allowed. For wan3.0-video and wan3.0-video-prime, up to 20 media files are allowed, including up to 10 images, 5 videos, and 5 audio files. The total duration of audio and video files cannot exceed 15 seconds.
   * > The Media structure contains the following fields: Type: the media type. Type: String. Valid values: image, video, and audio. URL: the download URL of the media file. Type: String. MediaId: the media asset ID. Type: String.
   * >
   * 
   * @example
   * {"Prompt":"Image 1 is on the basketball court, and Image 2 performs a slam dunk","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @remarks
   * The task feature parameters. The value is a JSON string that contains the following fields:
   * - EnableAudio: specifies whether to output audio. Type: Boolean. This field is optional.
   * - Watermark: specifies whether to include a watermark. Type: Boolean. This field is optional. Valid values: true (the video contains an AI-generated watermark in the lower-right corner) and false (the generated video does not contain a watermark).
   * - PromptExtend: specifies whether to enable intelligent prompt rewriting. Type: Boolean. This field is optional. This field is valid only for wan3.0-video and wan3.0-video-prime. Valid values: true (enabled, default value) and false (disabled).
   * - PostProcessing: the post-processing feature switch. Type: Object. This field contains EnableSubtitleRemoval, which specifies whether to remove subtitles. Type: Boolean. Valid values: true (enabled) and false (disabled).
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
   * - first_last_frame: first and last frame to video
   * - reference_to_video: reference-to-video
   * 
   * @example
   * text_to_video
   */
  jobType?: string;
  /**
   * @remarks
   * The model name. This parameter is required. Valid values:
   * - Wonder-Ultra
   * - Wonder-Ultra-Flash
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
   * The number of output videos. Valid values: 1 to 4. Default value: 1.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The output configuration JSON string. OssUri is the optional customer OSS output directory. If this parameter is not specified, a signed URL for the service-owned artifact is returned.
   * 
   * @example
   * {"OssUri":"oss://example-bucket/video-translation/output/"}
   */
  output?: string;
  /**
   * @remarks
   * The resolution. Valid values:
   * - 1080P
   * - 720P: default value
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
   * The custom user parameters. The value is a JSON string. The callback result carries this parameter as is. The system reserves the NotifyAddress field, which specifies the callback URL. The system sends a callback to this URL after the task is completed.
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

