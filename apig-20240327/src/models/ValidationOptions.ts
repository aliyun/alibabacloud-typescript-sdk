// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidationOptions extends $dara.Model {
  skipVerifyAIChatCompletion?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipVerifyAIChatCompletion: 'skipVerifyAIChatCompletion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipVerifyAIChatCompletion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

