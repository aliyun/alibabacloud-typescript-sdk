// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAvatarProjectRequestFramesVideoScript extends $dara.Model {
  emotion?: string;
  pitchRate?: string;
  /**
   * @example
   * 1.0
   */
  speedRate?: string;
  textContent?: string;
  voiceLanguage?: string;
  /**
   * @example
   * 1
   */
  voiceTemplateId?: string;
  /**
   * @example
   * 50
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      emotion: 'emotion',
      pitchRate: 'pitchRate',
      speedRate: 'speedRate',
      textContent: 'textContent',
      voiceLanguage: 'voiceLanguage',
      voiceTemplateId: 'voiceTemplateId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emotion: 'string',
      pitchRate: 'string',
      speedRate: 'string',
      textContent: 'string',
      voiceLanguage: 'string',
      voiceTemplateId: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

