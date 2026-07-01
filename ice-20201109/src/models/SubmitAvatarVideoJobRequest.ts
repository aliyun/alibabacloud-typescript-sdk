// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAvatarVideoJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the job. The description can be up to 128 bytes in length.
   * 
   * @example
   * Test description
   */
  description?: string;
  /**
   * @remarks
   * The configurations for the avatar job, such as the avatar ID, voice, and speech rate.
   * 
   * @example
   * {"AvatarId":"yunqiao"}
   */
  editingConfig?: string;
  /**
   * @remarks
   * Input can be text, an audio file from Object Storage Service (OSS), or a [media asset](). Only MP3 and WAV audio formats are supported.>Notice:  The value of the `Text` parameter must contain at least five characters.
   * 
   * @example
   * {"Text": "To be or not to be, that is the question."}
   */
  inputConfig?: string;
  /**
   * @remarks
   * Specifies the output configuration, including the destination URL for the rendered video.
   * 
   * @example
   * {"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/xxx.mp4"}
   */
  outputConfig?: string;
  /**
   * @remarks
   * The title of the job. The title can be up to 128 bytes in length.
   * 
   * @example
   * Test title
   */
  title?: string;
  /**
   * @remarks
   * A user-defined JSON string for passing custom business information, such as environment details or job metadata.
   * 
   * @example
   * {"user":"data","env":"prod"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      editingConfig: 'EditingConfig',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      editingConfig: 'string',
      inputConfig: 'string',
      outputConfig: 'string',
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

