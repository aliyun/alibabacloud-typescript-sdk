// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCosyVoiceCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset ID of the training audio material. Currently, only one audio material can be used for training.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  audios?: string;
  /**
   * @remarks
   * The sample audio output address.  
   * - If you specify this parameter, a sample audio file is generated at the specified OSS address after training succeeds.  
   * >Notice: The address must be a valid public OSS address under your account.
   * 
   * @example
   * https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.MP3
   */
  demoAudioMediaURL?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - female
   * - male
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
   * The voice name. The name can be up to 32 characters in length.
   * 
   * @example
   * 小专
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

