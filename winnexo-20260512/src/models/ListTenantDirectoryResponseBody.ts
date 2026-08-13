// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantDirectoryResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 创建人名称
   * 
   * @example
   * string_value
   */
  creatorName?: string;
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
   * 目录 ID 或资源 ID
   * 
   * @example
   * exampleItemId
   */
  itemId?: string;
  /**
   * @remarks
   * 内容类型：directory 或 resource
   * 
   * @example
   * string_value
   */
  itemType?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  objectBindings?: { [key: string]: any }[];
  /**
   * @remarks
   * 根知识库下失败资源数
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * 根知识库下成功资源数
   * 
   * @example
   * 1
   */
  sourceReadyCount?: number;
  /**
   * @remarks
   * 资源解析状态
   * 
   * @example
   * string_value
   */
  sourceStatus?: string;
  /**
   * @remarks
   * 根知识库下资源总数
   * 
   * @example
   * 1
   */
  sourceTotalCount?: number;
  /**
   * @remarks
   * 资源类型
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      itemId: 'itemId',
      itemType: 'itemType',
      name: 'name',
      objectBindings: 'objectBindings',
      sourceFailedCount: 'sourceFailedCount',
      sourceReadyCount: 'sourceReadyCount',
      sourceStatus: 'sourceStatus',
      sourceTotalCount: 'sourceTotalCount',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itemId: 'string',
      itemType: 'string',
      name: 'string',
      objectBindings: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      sourceFailedCount: 'number',
      sourceReadyCount: 'number',
      sourceStatus: 'string',
      sourceTotalCount: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  items?: ListTenantDirectoryResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * 内容总数
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListTenantDirectoryResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

