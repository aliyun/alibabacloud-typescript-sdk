// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MassPushV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of message IDs.
   */
  messageIds?: string[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 159E4422-6624-****-8943-DFD98D34858C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageIds: 'MessageIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageIds)) {
      $dara.Model.validateArray(this.messageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

