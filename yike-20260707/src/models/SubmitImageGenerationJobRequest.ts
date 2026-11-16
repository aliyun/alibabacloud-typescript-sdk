// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageGenerationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The aspect ratio. Valid values: 16:9 (default), 9:16, 4:3, 3:4, 1:1, and 21:9.
   * - The qwen-image-3.0 model also supports the following values: 4:5, 5:4, 2:3, and 3:2.
   * 
   * @example
   * 4:3
   */
  aspectRatio?: string;
  /**
   * @remarks
   * The idempotency parameter. A unique, case-sensitive, 32-character random string used to ensure that the request is completed only once. This prevents duplicate operations caused by multiple retries.
   * 
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @remarks
   * The task input. Required. A JSON string that contains the following fields:
   * - Prompt: the prompt. String. Required.
   * - Medias: the list of media files. Required when the task type is `image_to_image`. Up to 9 files.
   * > The Media structure contains the following fields: Type, the media type. String. Valid value: image. URL, the download URL of the media file. String. MediaId, the media asset ID. String.
   * >
   * 
   * @example
   * {"Prompt":"xxx","Medias":[{"Type":"image","URL":"http://test.oss-cn-shanghai.aliyuncs.com/test.png"}]}
   */
  input?: string;
  /**
   * @remarks
   * The task feature parameters. A JSON string that contains the following fields:
   * - PromptExtend: specifies whether to optimize the prompt. Boolean. Valid values: `true` and `false`.
   * - PromptExtendMode: the prompt optimization mode. Valid values: `direct` (default) and `agent` (supported only for text-to-image). Only the qwen-image-3.0 model supports this parameter.
   * 
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The type of the generation task. Required. Valid values:
   * - text_to_image: text-to-image
   * - image_to_image: image-to-image
   * 
   * @example
   * text_to_image
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the model. Required. Valid values:
   * - Wonder-Image-2.5-Pro
   * - Wonder-Image-2.5-Fast
   * - Wonder-Image-2
   * - qwen-image-3.0
   * - qwen-image-2.0-pro
   * - qwen-image-2.0
   * - wan2.7-image
   * 
   * @example
   * wan2.7-image
   */
  model?: string;
  /**
   * @remarks
   * The number of images to generate. Valid values: 1 to 4. Default value: 1.
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
   * The scene. Valid values: `general`.
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

