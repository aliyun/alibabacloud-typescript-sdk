// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantDirectoryResponseBody extends $dara.Model {
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
   * 目录唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 创建时间戳
   * 
   * @example
   * 1
   */
  gmtCreate?: number;
  /**
   * @remarks
   * 修改时间戳
   * 
   * @example
   * 1
   */
  gmtModified?: number;
  /**
   * @remarks
   * 目录内部主键
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 文件名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 历史运营对象名称
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 父目录内部主键
   * 
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @remarks
   * 文件 OSS URL
   * 
   * This parameter is required.
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
  /**
   * @remarks
   * 租户 ID
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * 创建人用户 ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      message: 'message',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      parentId: 'parentId',
      path: 'path',
      requestId: 'requestId',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      message: 'string',
      name: 'string',
      operatingObjectName: 'string',
      parentId: 'number',
      path: 'string',
      requestId: 'string',
      tenantId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

