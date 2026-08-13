// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 目录唯一标识（echo 回入参）
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
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
  /**
   * @remarks
   * 操作是否成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

