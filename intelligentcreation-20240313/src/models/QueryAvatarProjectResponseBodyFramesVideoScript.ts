// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvatarProjectResponseBodyFramesVideoScript extends $dara.Model {
  emotion?: string;
  pitchRate?: string;
  speedRate?: string;
  textContent?: string;
  voiceLanguage?: string;
  voiceTemplateId?: string;
  volume?: number;
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

