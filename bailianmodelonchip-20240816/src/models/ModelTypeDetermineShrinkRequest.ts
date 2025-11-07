// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelTypeDetermineShrinkRequest extends $dara.Model {
  historyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputText?: string;
  static names(): { [key: string]: string } {
    return {
      historyShrink: 'history',
      inputText: 'inputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyShrink: 'string',
      inputText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

