// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCharacterSetResponseBodyData extends $dara.Model {
  characterSet?: string[];
  /**
   * @example
   * polarx
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      characterSet: 'CharacterSet',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSet: { 'type': 'array', 'itemType': 'string' },
      engine: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.characterSet)) {
      $dara.Model.validateArray(this.characterSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

