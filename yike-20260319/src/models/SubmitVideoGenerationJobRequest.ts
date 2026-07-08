// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoGenerationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio. Valid values: 16:9 (default), 9:16, 4:3, 3:4, and 1:1.
   * 
   * @example
   * 9:16
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @remarks
   * The output duration. Valid values: 4 to 15 seconds. Default value: 5s.
   * 
   * @example
   * 5
   */
  duration?: string;
  /**
   * @remarks
   * The task input, in JSON string format. The following fields are included:
   * - Prompt: String. Required. The prompt.
   * - Medias: the media list.
   *   - When JobType is set to image_to_video, this field is required. Only 1 Media item is needed.
   *   - When JobType is set to first_last_frame, this field is required. Only 2 Media items are needed.
   *   - When JobType is set to reference_to_video, this field is required. A maximum of 9 Media items are supported.
   * > The Media struct contains: Type, the media type, String, valid values are `image`/`video`/`audio`; URL, the media download URL, String.
   * >
   * 
   * @example
   * {"Prompt":"图1在篮球场上，用图2来了个灌篮","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @remarks
   * The task feature parameters. No configuration is required at this time.
   * 
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The task type. Valid values:
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
   * The model name. Valid values:
   * - happyhorse-1.1
   * - happyhorse-1.0
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
   * The resolution. Valid values: 720P (default) and 1080P.
   * 
   * @example
   * 720P
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
   * The user business data in JSON format.
   * 
   * @example
   * {"env":"prd"}
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

