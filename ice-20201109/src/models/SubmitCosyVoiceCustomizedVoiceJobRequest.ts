// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCosyVoiceCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset ID of the audio material for training. Currently, only one audio material is supported for training.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  audios?: string;
  /**
   * @remarks
   * The sample audio output URL.  
   * - If you specify this parameter, a sample audio file is generated at the specified OSS URL after the training job succeeds.  
   * >Notice: The URL must be a valid public OSS URL under your account.</notice>
   * 
   * @example
   * https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.MP3
   */
  demoAudioMediaURL?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - female: Female.
   * - male: Male.
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The voice cloning model. Valid values:
   * - **cosyvoice-v3-plus**
   * - **cosyvoice-v3-flash**
   * - **cosyvoice-v3.5-plus**
   * - **cosyvoice-v3.5-flash**
   * 
   * @example
   * cosyvoice-v3-plus
   */
  model?: string;
  /**
   * @remarks
   * The name of the voice. The name cannot exceed 32 characters in length.
   * 
   * @example
   * voice name
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      audios: 'Audios',
      demoAudioMediaURL: 'DemoAudioMediaURL',
      gender: 'Gender',
      model: 'Model',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audios: 'string',
      demoAudioMediaURL: 'string',
      gender: 'string',
      model: 'string',
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

