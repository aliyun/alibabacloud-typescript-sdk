// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryResponseBody extends $dara.Model {
  /**
   * @example
   * 6bff4f317a14442fbc9f73d29dbd5fc3
   */
  memoryId?: string;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      memoryId: 'memoryId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryId: 'string',
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

