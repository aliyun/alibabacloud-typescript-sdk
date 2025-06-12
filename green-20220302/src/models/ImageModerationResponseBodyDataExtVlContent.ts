// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtVlContent extends $dara.Model {
  /**
   * @remarks
   * the vl output content
   * 
   * @example
   * this is a cat
   */
  outputText?: string;
  static names(): { [key: string]: string } {
    return {
      outputText: 'OutputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

