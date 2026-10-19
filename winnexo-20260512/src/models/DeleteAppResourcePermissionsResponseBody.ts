// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppResourcePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为 200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 删除的权限记录数
   * 
   * @example
   * 2
   */
  deletedCount?: number;
  /**
   * @remarks
   * 错误描述；成功时为空
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deletedCount: 'deletedCount',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deletedCount: 'number',
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

