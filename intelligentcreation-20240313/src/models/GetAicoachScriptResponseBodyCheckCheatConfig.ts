// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptResponseBodyCheckCheatConfig extends $dara.Model {
  checkImage?: boolean;
  checkVoice?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkImage: 'checkImage',
      checkVoice: 'checkVoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkImage: 'boolean',
      checkVoice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

