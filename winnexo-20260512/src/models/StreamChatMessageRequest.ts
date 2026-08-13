// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * 上次接收到的 SSE event id，用于断线续推；不传则从头全量回放
   * 
   * @example
   * 5-1683456789012
   */
  lastEventId?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
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

