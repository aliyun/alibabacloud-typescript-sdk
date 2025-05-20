// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextEmbeddingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: string[];
  /**
   * @example
   * document
   */
  inputType?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      inputType: 'input_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': 'string' },
      inputType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

