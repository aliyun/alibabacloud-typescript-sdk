// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAutoMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * 本次成功删除的自动记忆文件数量；无可清空记忆时为 0
   * 
   * @example
   * 3
   */
  clearedCount?: number;
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
  /**
   * @remarks
   * 本次清空的自动记忆类型；取值为 user、feedback、reference、project 或 all
   * 
   * @example
   * project
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clearedCount: 'clearedCount',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearedCount: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

