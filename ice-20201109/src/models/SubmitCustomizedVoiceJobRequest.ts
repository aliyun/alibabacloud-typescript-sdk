// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS URL where the demo audio will be saved.
   * 
   * - If specified, the service generates a demo audio file at the provided OSS URL after training completes.
   * 
   * - >Notice: 
   * 
   *   The URL must be a valid public address for an OSS object in your account.
   * 
   * @example
   * https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.MP3
   */
  demoAudioMediaURL?: string;
  /**
   * @remarks
   * The unique identifier for the voice.
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

