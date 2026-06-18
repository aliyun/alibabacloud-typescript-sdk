// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The memory node ID.
   * 
   * @example
   * 68de06c95368463a8be4a84efcxxxxxx
   */
  memoryNodeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C56C7AF-xxxx-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      memoryNodeId: 'memoryNodeId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryNodeId: 'string',
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

