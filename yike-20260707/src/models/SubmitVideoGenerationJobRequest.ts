// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoGenerationJobRequest extends $dara.Model {
  /**
   * @example
   * 9:16
   */
  aspectRatio?: string;
  /**
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @example
   * 5
   */
  duration?: string;
  /**
   * @example
   * {"Prompt":"图1在篮球场上，用图2来了个灌篮","Medias":[{"Type":"image","Url":"https://xxx/xxx.jpg"},{"Type":"image","Url":"https://xxx/xxx.jpg"}]}
   */
  input?: string;
  /**
   * @example
   * {}
   */
  jobParameters?: string;
  /**
   * @example
   * text_to_video
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

