// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatSessionRequest extends $dara.Model {
  /**
   * @remarks
   * 抽象模型名（模型档位）；不传则不修改会话当前模型
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 会话 ID
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
  /**
   * @remarks
   * 新的会话标题
   * 
   * @example
   * 示例标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      sessionId: 'string',
      tenantId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

