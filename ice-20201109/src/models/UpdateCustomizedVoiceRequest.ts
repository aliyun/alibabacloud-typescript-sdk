// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomizedVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset ID of the sample audio file.
   * 
   * @example
   * ****4d5e829d498aaf966b119348****
   */
  demoAudioMediaId?: string;
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
      demoAudioMediaId: 'DemoAudioMediaId',
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoAudioMediaId: 'string',
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

