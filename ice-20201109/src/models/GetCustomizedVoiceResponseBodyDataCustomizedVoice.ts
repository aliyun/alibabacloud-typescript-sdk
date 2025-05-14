// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomizedVoiceResponseBodyDataCustomizedVoice extends $dara.Model {
  /**
   * @remarks
   * The media asset ID of the sample audio file.
   * 
   * @example
   * ****42d3c312402982be65975f5b****
   */
  demoAudioMediaId?: string;
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
   * The demonstration scenario.
   * 
   * Valid values:
   * 
   * *   **story**
   * *   **interaction**
   * *   **navigation**
   * 
   * @example
   * interaction
   */
  scenario?: string;
  /**
   * @remarks
   * The voice description.
   */
  voiceDesc?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  /**
   * @remarks
   * The voice name.
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      demoAudioMediaId: 'DemoAudioMediaId',
      gender: 'Gender',
      scenario: 'Scenario',
      voiceDesc: 'VoiceDesc',
      voiceId: 'VoiceId',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoAudioMediaId: 'string',
      gender: 'string',
      scenario: 'string',
      voiceDesc: 'string',
      voiceId: 'string',
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

