// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The audio output address of the sample.  
   * - If you specify this parameter, a sample audio file is generated at the specified OSS address after training succeeds.  
   * - If you do not specify this parameter, no sample audio is generated.
   * >Notice: The address must be a valid public OSS address under your account.
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

