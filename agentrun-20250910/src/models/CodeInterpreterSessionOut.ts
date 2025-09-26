// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CodeInterpreterSessionOut extends $dara.Model {
  /**
   * @remarks
   * 关联的代码解释器的唯一标识符
   * 
   * This parameter is required.
   */
  codeInterpreterId?: string;
  /**
   * @remarks
   * 代码解释器会话的名称
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * 代码解释器会话的创建时间，采用ISO 8601格式
   */
  createdAt?: string;
  /**
   * @remarks
   * 代码解释器会话的最后更新时间，采用ISO 8601格式
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 代码解释器会话的唯一标识符
   * 
   * This parameter is required.
   */
  sessionId?: string;
  /**
   * @remarks
   * 代码解释器会话的空闲超时时间，单位为秒。实例没有会话请求后处于空闲状态，空闲态为闲置计费模式，超过此超时时间后会话自动过期，不可继续使用
   */
  sessionIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * 代码解释器会话的当前状态
   * 
   * This parameter is required.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      codeInterpreterId: 'codeInterpreterId',
      codeInterpreterName: 'codeInterpreterName',
      createdAt: 'createdAt',
      lastUpdatedAt: 'lastUpdatedAt',
      sessionId: 'sessionId',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeInterpreterId: 'string',
      codeInterpreterName: 'string',
      createdAt: 'string',
      lastUpdatedAt: 'string',
      sessionId: 'string',
      sessionIdleTimeoutSeconds: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

