// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoTranslationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The user-level idempotency key.
   * 
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  clientToken?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The input configuration JSON string:
   * - Video
   * - Audio
   * - Subtitle
   * 
   * <notice>Currently, only OSS addresses under the calling account are supported as input.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * {"Video":"oss://bucket/path/input.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The job parameters JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"SourceLanguage":"zh","TargetLanguage":"en","NeedDetext":false,"NeedVisualTranslate":false}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * - SubtitleTranslate
   * - VoiceTranslate
   * 
   * This parameter is required.
   * 
   * @example
   * VoiceTranslate
   */
  jobType?: string;
  /**
   * @remarks
   * The output configuration JSON string. The OssUri value must be a folder.
   * 
   * @example
   * {"OssUri":"oss://bucket/output/"}
   */
  output?: string;
  /**
   * @remarks
   * If not specified, the service generates a default title.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The custom user data JSON string.
   * 
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

