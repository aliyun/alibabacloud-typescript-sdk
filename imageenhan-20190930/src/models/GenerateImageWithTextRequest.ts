// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageWithTextRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  number?: number;
  /**
   * @example
   * 1024*1024
   */
  resolution?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      resolution: 'Resolution',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      resolution: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

