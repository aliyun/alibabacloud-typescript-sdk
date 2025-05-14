// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomizedVoicesResponseBodyDataCustomizedVoiceList extends $dara.Model {
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
   * The gender. Valid values:
   * 
   * *   female
   * *   male
   * 
   * @example
   * male
   */
  gender?: string;
  /**
   * @remarks
   * The scenario. Valid values:
   * 
   * *   story
   * *   interaction
   * *   navigation
   * 
   * @example
   * story
   */
  scenario?: string;
  /**
   * @remarks
   * *   The voice type. Valid values:
   * 
   *     *   Basic
   *     *   Standard
   * 
   * @example
   * Standard
   */
  type?: string;
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
      type: 'Type',
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
      type: 'string',
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

