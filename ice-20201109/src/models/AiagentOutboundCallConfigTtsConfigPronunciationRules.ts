// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentOutboundCallConfigTtsConfigPronunciationRules extends $dara.Model {
  pronunciation?: string;
  type?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      pronunciation: 'Pronunciation',
      type: 'Type',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pronunciation: 'string',
      type: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

