// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCharacterSetNameResponseBodyCharacterSetNameItems extends $dara.Model {
  characterSetName?: string[];
  static names(): { [key: string]: string } {
    return {
      characterSetName: 'CharacterSetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSetName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.characterSetName)) {
      $dara.Model.validateArray(this.characterSetName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameResponseBody extends $dara.Model {
  characterSetNameItems?: DescribeCharacterSetNameResponseBodyCharacterSetNameItems;
  engine?: string;
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

