// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCharacterSetNameResponseBodyCharacterSetNameItems } from "./DescribeCharacterSetNameResponseBodyCharacterSetNameItems";


export class DescribeCharacterSetNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The character sets that are supported.
   */
  characterSetNameItems?: DescribeCharacterSetNameResponseBodyCharacterSetNameItems;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      characterSetNameItems: 'CharacterSetNameItems',
      engine: 'Engine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSetNameItems: DescribeCharacterSetNameResponseBodyCharacterSetNameItems,
      engine: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.characterSetNameItems && typeof (this.characterSetNameItems as any).validate === 'function') {
      (this.characterSetNameItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

