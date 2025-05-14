// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAvatarVideoJobRequest extends $dara.Model {
  /**
   * @example
   * 测试描述
   */
  description?: string;
  /**
   * @example
   * {"AvatarId":"yunqiao"}
   */
  editingConfig?: string;
  /**
   * @remarks
   * The input configurations of the video rendering job for an avatar. You can specify text, the Object Storage Service (OSS) URL of an audio file, or the ID of a media asset. The audio file must be in the MP3 or WAV format.
   * 
   * >  The text must be at least five words in length.
   */
  inputConfig?: string;
  /**
   * @example
   * {"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/xxx.mp4","Width":1920,"Height":1080}
   */
  outputConfig?: string;
  /**
   * @example
   * 测试标题
   */
  title?: string;
  /**
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

