// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMChatResponseBodyDataOutputChoices } from "./HalfLlmchatResponseBodyDataOutputChoices";


export class HalfLLMChatResponseBodyDataOutput extends $dara.Model {
  choices?: HalfLLMChatResponseBodyDataOutputChoices[];
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': HalfLLMChatResponseBodyDataOutputChoices },
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

