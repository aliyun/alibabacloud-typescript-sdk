// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CountTodosResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 待处理数量（PENDING 主状态）
   * 
   * @example
   * 3
   */
  pendingCount?: number;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 未读数量（处理人 readAt 为空）
   * 
   * @example
   * 1
   */
  unreadCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      pendingCount: 'pendingCount',
      requestId: 'requestId',
      unreadCount: 'unreadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pendingCount: 'number',
      requestId: 'string',
      unreadCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

