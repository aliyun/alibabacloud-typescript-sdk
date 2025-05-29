// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMAppCallResponseBodyDataOutputChoices } from "./HalfLlmappCallResponseBodyDataOutputChoices";


export class HalfLLMAppCallResponseBodyDataOutput extends $dara.Model {
  choices?: HalfLLMAppCallResponseBodyDataOutputChoices[];
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': HalfLLMAppCallResponseBodyDataOutputChoices },
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

