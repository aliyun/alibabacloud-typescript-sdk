// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitStandardCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * *   The material assets IDs of the materials for training.
   * *   Separate multiple media IDs with commas (,).
   * 
   * > : The total duration of all materials must be within 15 to 30 minutes. The duration of each material must be greater than 1 minute.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****,****571c704445f9a0ee011406c2****,****571c704445f9a0ee011406c2****
   */
  audios?: string;
  /**
   * @remarks
   * *   The media asset ID of the authentication audio.
   * 
   * *   Upload an audio file for identity authentication. If the voiceprint extracted from the uploaded file differs from that of the training file, the job fails.
   * 
   *     **
   * 
   *     **Note**: Clearly read and record the following text: I confirm to customize human voice cloning and provide audio files that contain my voice for training. I promise that I am responsible for the customized content and that the content complies with laws and regulations.
   * 
   * @example
   * ****571c704445f9a0ee011406c2****
   */
  authentication?: string;
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
   * https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.mp3
   */
  demoAudioMediaURL?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * 
   * *   female
   * *   male
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The voice name.
   * 
   * *   The name can be up to 32 characters in length.
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

