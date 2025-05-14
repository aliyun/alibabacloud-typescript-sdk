// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The gender. Valid values:
   * 
   * *   female
   * *   male
   * 
   * This parameter is required.
   * 
   * @example
   * female
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
   * This parameter is required.
   * 
   * @example
   * story
   */
  scenario?: string;
  /**
   * @remarks
   * The voice description.
   * 
   * *   The description can be up to 256 characters in length.
   */
  voiceDesc?: string;
  /**
   * @remarks
   * The voice ID. It can be the English name or Chinese Pinyin of the voice.
   * 
   * *   The value must be a unique ID that is not used by other custom voices.
   * *   The ID can be up to 32 characters in length.
   * *   Only letters and digits are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  /**
   * @remarks
   * The voice name.
   * 
   * *   The name can be up to 32 characters in length.
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      scenario: 'Scenario',
      voiceDesc: 'VoiceDesc',
      voiceId: 'VoiceId',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

