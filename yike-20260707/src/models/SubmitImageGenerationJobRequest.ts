// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageGenerationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio. Valid values: 16:9 (default), 9:16, 4:3, 3:4, and 1:1.
   * 
   * @example
   * 4:3
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
   * The task input. A JSON string that contains the following fields:
   * - Prompt: String. Required. The prompt.
   * - Medias: A list of media items. Required when the task type is `image_to_image`. A maximum of 9 items are supported.
   * > The Media structure contains: Type, the media type, String, valid value: image; URL, the media download URL, String; MediaId, the media asset ID, String.
   * >
   * 
   * @example
   * {"Prompt":"xxx","Medias":[{"Type":"image","URL":"xxx"}]}
   */
  input?: string;
  /**
   * @remarks
   * The task function parameters. A JSON string. No configuration is required at this time.
   * 
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The type of the generation task. Valid values:
   * 
   * - text_to_image: text-to-image.
   * - image_to_image: image-to-image.
   * 
   * @example
   * text_to_image
   */
  jobType?: string;
  /**
   * @remarks
   * The model name. Currently supported models:
   * - wan2.7-image
   * - qwen-image-2.0
   * - qwen-image-2.0-pro
   * 
   * @example
   * wan2.7-image
   */
  model?: string;
  /**
   * @remarks
   * The number of images. Valid values: 1 to 4. Default value: 1.
   * 
   * @example
   * 1
   */
  n?: string;
  /**
   * @remarks
   * The resolution. Valid values: 1K (default), 2K, and 4K.
   * 
   * @example
   * 720P
   */
  resolution?: string;
  /**
   * @remarks
   * The scene. This is an enumeration type. Currently only `general` is supported.
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
      input: 'string',
      jobParameters: 'string',
      jobType: 'string',
      model: 'string',
      n: 'string',
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

