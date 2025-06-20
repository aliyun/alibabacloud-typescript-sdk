// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMaYiBlockResponseBodyData extends $dara.Model {
  blockId?: number;
  blockUrl?: string;
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      blockUrl: 'BlockUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'number',
      blockUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

