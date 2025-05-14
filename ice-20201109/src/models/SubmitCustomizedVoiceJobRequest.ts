// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the sample audio file.
   * 
   * *   If this parameter is specified, a sample audio file is generated at the specified Object Storage Service (OSS) URL after the training is complete.
   * 
   * *   If this parameter is not specified, no sample audio file is generated.
   * 
   *     **
   * 
   *     **Note**: The URL must be a valid public OSS URL within your Alibaba Cloud account.
   * 
   * @example
   * https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.MP3
   */
  demoAudioMediaURL?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      demoAudioMediaURL: 'DemoAudioMediaURL',
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoAudioMediaURL: 'string',
      voiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

