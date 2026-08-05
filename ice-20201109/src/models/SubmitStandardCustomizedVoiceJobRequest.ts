// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitStandardCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The list of media asset IDs for training audio materials. Separate multiple media asset IDs with commas (,).
   * 
   * >Notice: The total duration of all materials must be between 15 and 30 minutes, and the duration of each individual material must be greater than 1 minute.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****,****571c704445f9a0ee011406c2****,****571c704445f9a0ee011406c2****
   */
  audios?: string;
  /**
   * @remarks
   * The media asset ID of the authentication audio. Upload an audio clip to verify your identity. The task fails if the voiceprint does not match the training audio.
   * >Notice: Read and record the following statement clearly: I confirm that I am initiating voice cloning customization. The training audio is provided by me. I commit to being responsible for the customized content and guarantee that no illegal or non-compliant content will be created.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  authentication?: string;
  /**
   * @remarks
   * The audio output address for the sample.  
   * - If you specify this parameter, a sample audio file is generated at the specified OSS address after training succeeds.  
   * - If you do not specify this parameter, no sample audio is generated.
   * >Notice: The address must be a valid public OSS URL under your account.
   * 
   * @example
   * https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.mp3
   */
  demoAudioMediaURL?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * 
   * - female
   * - male
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The voice name. The name can be up to 32 characters in length.
   * 
   * @example
   * Basic
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      audios: 'Audios',
      authentication: 'Authentication',
      demoAudioMediaURL: 'DemoAudioMediaURL',
      gender: 'Gender',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audios: 'string',
      authentication: 'string',
      demoAudioMediaURL: 'string',
      gender: 'string',
      voiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

