// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAvatarVideoJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the task. The description can be up to 128 bytes in length.
   * 
   * @example
   * Test Description
   */
  description?: string;
  /**
   * @remarks
   * The configuration information for the digital human task. You can configure information such as the digital human ID, voice, and speech rate.
   * 
   * @example
   * {"AvatarId":"yunqiao"}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input parameters for the digital human task. Text, audio files stored in OSS, and media assets are supported as input. Audio files support only the MP3 or WAV format.
   * >Notice: The length of the input text cannot be less than 5 characters.
   * 
   * @example
   * {"Text": "Do you not see the Yellow River\\"s waters descending from heaven, rushing to the sea never to return.Do you not see in the bright mirror of the high hall, the sad sight of white hair,Hair turns from black to white in the course of a day."}
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output information of the task. You can configure the output address.
   * 
   * @example
   * {"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/xxx.mp4"}
   */
  outputConfig?: string;
  /**
   * @remarks
   * The title of the task. The title can be up to 128 bytes in length.
   * 
   * @example
   * Test Title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings of the user. You can pass in customer business information, such as the business environment and task information, in JSON string format.
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

