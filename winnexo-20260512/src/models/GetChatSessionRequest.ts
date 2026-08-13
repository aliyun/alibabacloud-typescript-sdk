// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatSessionRequest extends $dara.Model {
  limit?: number;
  /**
   * @remarks
   * 会话ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
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
      limit: 'limit',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      sessionId: 'string',
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

