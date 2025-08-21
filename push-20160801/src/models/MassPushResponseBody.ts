// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MassPushResponseBodyMessageIds extends $dara.Model {
  messageId?: string[];
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.messageId)) {
      $dara.Model.validateArray(this.messageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponseBody extends $dara.Model {
  messageIds?: MassPushResponseBodyMessageIds;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
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
      messageIds: MassPushResponseBodyMessageIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.messageIds && typeof (this.messageIds as any).validate === 'function') {
      (this.messageIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

