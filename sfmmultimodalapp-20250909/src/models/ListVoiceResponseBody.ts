// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceResponseBodyVoiceList extends $dara.Model {
  gender?: string;
  illustration?: string;
  illustrationAudio?: string;
  language?: string;
  modelId?: string;
  name?: string;
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      illustration: 'Illustration',
      illustrationAudio: 'IllustrationAudio',
      language: 'Language',
      modelId: 'ModelId',
      name: 'Name',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      illustration: 'string',
      illustrationAudio: 'string',
      language: 'string',
      modelId: 'string',
      name: 'string',
      voice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVoiceResponseBody extends $dara.Model {
  requestId?: string;
  voiceList?: ListVoiceResponseBodyVoiceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      voiceList: 'VoiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      voiceList: { 'type': 'array', 'itemType': ListVoiceResponseBodyVoiceList },
    };
  }

  validate() {
    if(Array.isArray(this.voiceList)) {
      $dara.Model.validateArray(this.voiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

