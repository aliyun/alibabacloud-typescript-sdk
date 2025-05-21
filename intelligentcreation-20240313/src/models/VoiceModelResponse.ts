// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModelResponse extends $dara.Model {
  resourceTypeDesc?: string;
  ttsVersion?: number;
  useScene?: string;
  voiceDesc?: string;
  voiceGender?: string;
  voiceId?: number;
  voiceLanguage?: string;
  voiceModel?: string;
  voiceName?: string;
  voiceType?: string;
  voiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeDesc: 'resourceTypeDesc',
      ttsVersion: 'ttsVersion',
      useScene: 'useScene',
      voiceDesc: 'voiceDesc',
      voiceGender: 'voiceGender',
      voiceId: 'voiceId',
      voiceLanguage: 'voiceLanguage',
      voiceModel: 'voiceModel',
      voiceName: 'voiceName',
      voiceType: 'voiceType',
      voiceUrl: 'voiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeDesc: 'string',
      ttsVersion: 'number',
      useScene: 'string',
      voiceDesc: 'string',
      voiceGender: 'string',
      voiceId: 'number',
      voiceLanguage: 'string',
      voiceModel: 'string',
      voiceName: 'string',
      voiceType: 'string',
      voiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

