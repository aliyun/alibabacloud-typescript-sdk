// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The gender. Valid values:
   * 
   * - female
   * 
   * - male
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
   * - story
   * 
   * - interaction
   * 
   * - navigation
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
   * - Must be 256 characters or fewer.
   * 
   * @example
   * 这是一个个性化声音
   */
  voiceDesc?: string;
  /**
   * @remarks
   * The custom voice ID. This is typically an English name or Pinyin.
   * 
   * - Must be unique among your other custom voices.
   * 
   * - Must be 32 characters or fewer.
   * 
   * - Can contain only letters and numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  /**
   * @remarks
   * The voice name, typically in Chinese.
   * 
   * - Must be 32 characters or fewer.
   * 
   * @example
   * 小专
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

