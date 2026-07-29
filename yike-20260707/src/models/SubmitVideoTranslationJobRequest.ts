// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobRequest extends $dara.Model {
  /**
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Video":"oss://bucket/path/input.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","NeedDetext":false,"NeedVisualTranslate":false}
   */
  jobParameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VoiceTranslate
   */
  jobType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"OssUri":"oss://bucket/output/"}
   */
  output?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      input: 'Input',
      jobParameters: 'JobParameters',
      jobType: 'JobType',
      output: 'Output',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      input: 'string',
      jobParameters: 'string',
      jobType: 'string',
      output: 'string',
      title: 'string',
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

