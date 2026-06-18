// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The long-term memory ID.
   * > Store this value properly. It is required for all subsequent API operations related to this long-term memory.
   * >.
   * 
   * @example
   * 6bff4f317a14442fbc9f73d29dbxxxx
   */
  memoryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A--2446A84821CA
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

