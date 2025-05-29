// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMImageOcrResponseBodyDataOutputChoices } from "./HalfLlmimageOcrResponseBodyDataOutputChoices";


export class HalfLLMImageOcrResponseBodyDataOutput extends $dara.Model {
  choices?: HalfLLMImageOcrResponseBodyDataOutputChoices[];
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': HalfLLMImageOcrResponseBodyDataOutputChoices },
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

