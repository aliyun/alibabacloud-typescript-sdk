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
   * The idempotency token. A unique, case-sensitive string of up to 32 characters. This token ensures that the request is completed no more than once, preventing duplicate operations caused by multiple retries.
   * 
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @remarks
   * The output duration. Valid values: 4 to 15 seconds. Default value: 5 seconds.
   * - For wan3.0-video and wan3.0-video-prime, the maximum value is 30 seconds.
   * 
   * @example
   * 5
   */
  duration?: string;
  /**
   * @remarks
   * The task input. This parameter is required. The value is a JSON string that contains the following fields:
   * - Prompt: string. Required. The prompt.
   * - Medias: the list of media items.
   *   - If JobType is set to image_to_video, this field is required and only 1 media item is needed.
   *   - If JobType is set to first_last_frame, this field is required and exactly 2 media items are needed.
   *   - If JobType is set to reference_to_video, this field is required and up to 9 media items are allowed. For wan3.0-video and wan3.0-video-prime, up to 20 media items are allowed, including up to 10 images, 5 videos, and 5 audio files. The total duration of audio and video files cannot exceed 15 seconds.
   * > The Media structure contains the following fields: Type, the media type (string). Valid values: `image`, `video`, and `audio`. URL, the media download URL (string). MediaId, the media asset ID (string).
   * >
   * 
   * @example
   * {"Prompt":"Person 1 dunks a basketball on the court using the move shown in image 2","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @remarks
   * The task parameters as a JSON string that contains the following fields:
   * - EnableAudio: boolean. Optional. Specifies whether to include audio in the output. Valid values: true and false.
   * - Watermark: boolean. Optional. Specifies whether to include a watermark. Valid values: true (an "AI-generated" watermark is added to the lower-right corner of the video) and false (no watermark is added).
   * - PromptExtend: boolean. Optional. Specifies whether to enable intelligent prompt rewriting. This parameter is valid only for wan3.0-video and wan3.0-video-prime. Valid values: true (enabled, default) and false (disabled).
   * 
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The task type. This parameter is required. Valid values:
   * - text_to_video: text-to-video.
   * - image_to_video: image-to-video.
   * - first_last_frame: first and last frame to video.
   * - reference_to_video: reference-to-video.
   * 
   * @example
   * text_to_video
   */
  jobType?: string;
  /**
   * @remarks
   * The model name. This parameter is required. Valid values:
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
   * The output configuration as a JSON string. OssUri is an optional OSS output directory. If not specified, a signed URL for the service-generated output is returned.
   * 
   * @example
   * {"OssUri":"oss://example-bucket/video-translation/output/"}
   */
  output?: string;
  /**
   * @remarks
   * The resolution. Valid values:
   * - 1080P
   * - 720P: default value.
   * - 480P: valid only for wan3.0-video and wan3.0-video-prime.
   * 
   * @example
   * 720P
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
   * The custom user parameters as a JSON string. These parameters are returned as-is in the callback result. The system reserved field NotifyAddress specifies the callback URL. The system sends a callback to this URL when the task is complete.
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

