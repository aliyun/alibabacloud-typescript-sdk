// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertDirectConversationToWorkRequest extends $dara.Model {
  /**
   * @remarks
   * 源会话 ID；首次调用建立转换，后续使用同一 ID 查询或继续原转换
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * 租户 ID，公共参数，缺省时使用调用方默认租户；仍需通过源会话归属及权限校验
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

