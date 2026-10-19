// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceManualMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为 200，失败时为对应错误码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 保存后的手动记忆完整内容；清空成功时为空字符串
   * 
   * @example
   * 喜欢简洁的回答。
   */
  content?: string;
  /**
   * @remarks
   * 错误描述；成功时为空字符串，失败时返回具体原因
   * 
   * @example
   * 当前用户不是群组 cg_12345 的活跃成员
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID，用于定位本次调用
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      message: 'string',
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

