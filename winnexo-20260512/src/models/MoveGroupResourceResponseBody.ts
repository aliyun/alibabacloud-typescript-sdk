// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveGroupResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码，成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * @example
   * group_example
   */
  groupId?: string;
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
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 移动前的目录 ID
   * 
   * @example
   * example
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * 移动的资料 ID，移动前后保持不变
   * 
   * @example
   * example
   */
  sourceId?: string;
  /**
   * @remarks
   * 移动后的目录 ID
   * 
   * @example
   * example
   */
  targetDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      groupId: 'groupId',
      message: 'message',
      requestId: 'requestId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupId: 'string',
      message: 'string',
      requestId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
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

