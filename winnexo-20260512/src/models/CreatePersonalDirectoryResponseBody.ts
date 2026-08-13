// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDirectoryResponseBody extends $dara.Model {
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
   * 目录描述
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 新建目录 ID
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 目录 KB 归属类型：normal / aliding_kb_root / aliding_kb_internal
   * 
   * @example
   * string_value
   */
  directoryKind?: string;
  /**
   * @remarks
   * 创建时间戳（毫秒）
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * 修改时间戳（毫秒）
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 所属数字员工名称
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 父目录 ID（service 若回填默认根目录，这里返回回填后的父目录 ID）
   * 
   * @example
   * exampleParentDirectoryId
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * 文件 OSS URL
   * 
   * @example
   * https://example.com/oss/file.pdf
   */
  path?: string;
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
      description: 'description',
      directoryId: 'directoryId',
      directoryKind: 'directoryKind',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      message: 'message',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      parentDirectoryId: 'parentDirectoryId',
      path: 'path',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryId: 'string',
      directoryKind: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      message: 'string',
      name: 'string',
      operatingObjectName: 'string',
      parentDirectoryId: 'string',
      path: 'string',
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

