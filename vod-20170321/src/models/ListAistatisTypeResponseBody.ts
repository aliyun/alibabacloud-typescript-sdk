// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStatisTypeResponseBody extends $dara.Model {
  requestId?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

