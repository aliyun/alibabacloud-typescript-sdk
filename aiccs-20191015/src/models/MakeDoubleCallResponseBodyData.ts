// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakeDoubleCallResponseBodyData extends $dara.Model {
  /**
   * @example
   * 68255155365620598
   */
  acid?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

