// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The last received SSE event ID, used for resuming delivery after a disconnection. If not specified, the full stream is replayed from the beginning.
   * 
   * @example
   * 5-1683456789012
   */
  lastEventId?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      lastEventId: 'lastEventId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastEventId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

