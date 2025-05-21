// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProjectTaskRequestFramesVideoScript extends $dara.Model {
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  audioUrl?: string;
  emotion?: string;
  pitchRate?: string;
  speechOpen?: boolean;
  /**
   * @example
   * 2.0
   */
  speedRate?: string;
  textContent?: string;
  /**
   * @example
   * TEXT
   */
  type?: string;
  voiceLanguage?: string;
  /**
   * @example
   * 11
   */
  voiceTemplateId?: number;
  /**
   * @example
   * 20
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'audioUrl',
      emotion: 'emotion',
      pitchRate: 'pitchRate',
      speechOpen: 'speechOpen',
      speedRate: 'speedRate',
      textContent: 'textContent',
      type: 'type',
      voiceLanguage: 'voiceLanguage',
      voiceTemplateId: 'voiceTemplateId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      emotion: 'string',
      pitchRate: 'string',
      speechOpen: 'boolean',
      speedRate: 'string',
      textContent: 'string',
      type: 'string',
      voiceLanguage: 'string',
      voiceTemplateId: 'number',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

