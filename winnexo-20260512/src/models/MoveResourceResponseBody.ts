// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceResponseBody extends $dara.Model {
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
   * 源目录 ID（echo 回入参）
   * 
   * @example
   * exampleSourceDirectoryId
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * 资源 ID（echo 回入参）
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 操作是否成功
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * 目标目录 ID（echo 回入参）
   * 
   * @example
   * exampleTargetDirectoryId
   */
  targetDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      success: 'success',
      targetDirectoryId: 'targetDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
      success: 'boolean',
      targetDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

