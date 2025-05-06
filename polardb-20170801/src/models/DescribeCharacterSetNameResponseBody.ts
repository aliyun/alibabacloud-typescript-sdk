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
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34458CD3-33E0-4624-BFEF-840C15******
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

