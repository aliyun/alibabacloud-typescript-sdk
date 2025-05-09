// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveEntityFromMetaCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6D6CD444-DFA0-5180-9763-4A8730F2B382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

