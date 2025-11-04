// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAvatarVideoJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task description. Max length: 128 bytes.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The avatar configurations, including the avatar ID, voice, and speech rate.
   * 
   * @example
   * {"AvatarId":"yunqiao"}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configurations of the video rendering task for an avatar. You can specify text, the Object Storage Service (OSS) URL of an audio file, or the ID of a media asset. The audio file must be in the MP3 or WAV format.
   * 
   * >Notice: The text must be at least five characters in length.
   * 
   * @example
   * {"Text": "To be, or not to be, that is the question."}
   */
  inputConfig?: string;
  /**
   * @remarks
   * The output configurations, including the destination URL for the rendered video.
   * 
   * @example
   * {"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/xxx.mp4"}
   */
  outputConfig?: string;
  /**
   * @remarks
   * The task name. Max length: 128 bytes.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * A user-defined JSON string for passing custom business information, such as environment details or task metadata.
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

