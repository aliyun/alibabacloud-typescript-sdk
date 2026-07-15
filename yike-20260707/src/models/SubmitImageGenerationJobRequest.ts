// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageGenerationJobRequest extends $dara.Model {
  /**
   * @example
   * 4:3
   */
  aspectRatio?: string;
  /**
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @example
   * {"Prompt":"xxx","Medias":[{"Type":"image","URL":"xxx"}]}
   */
  input?: string;
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

