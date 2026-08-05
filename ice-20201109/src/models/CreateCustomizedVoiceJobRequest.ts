// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The gender. Valid values:
   * - female: female.
   * - male: male.
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
   * - story: story.
   * - interaction: interaction.
   * - navigation: navigation.
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
   * - The description cannot exceed 256 characters.
   * 
   * @example
   * This is a personalized voice
   */
  voiceDesc?: string;
  /**
   * @remarks
   * The custom voice ID (English name or pinyin of the voice).
   * 
   * - The ID cannot be the same as any of your other custom voice IDs.
   * - The ID cannot exceed 32 characters.
   * - Only letters and numbers are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  /**
   * @remarks
   * The voice name (generally a Chinese name).
   * - The name cannot exceed 32 characters.
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

