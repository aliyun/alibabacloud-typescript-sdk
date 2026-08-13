// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdminKnowledgeBasesResponseBodyItemsObjectBindings extends $dara.Model {
  /**
   * @remarks
   * 对象归属的语义图谱名（object_id 在该 graph 下唯一）
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 对象唯一 ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 对象显示名（如客户名称），由图谱 schema 解析；缓存缺失时为 null
   * 
   * @example
   * string_value
   */
  objectName?: string;
  /**
   * @remarks
   * 对象类型（如 customer / opportunity），对应图谱 schema 中的 object_type
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * 对象类型显示名（如"客户"），由图谱 schema 解析；缓存缺失时为 null
   * 
   * @example
   * string_value
   */
  objectTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectName: 'objectName',
      objectType: 'objectType',
      objectTypeName: 'objectTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdminKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 目录创建者姓名（仅 KB 顶层目录列表时返回）
   * 
   * @example
   * string_value
   */
  creatorName?: string;
  /**
   * @remarks
   * 描述（仅 KB 顶层目录列表时返回）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 目录归属类型（itemType=directory 时有值）：normal / aliding_kb_root / aliding_kb_internal
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
   * 唯一标识（itemType=directory 时为 directory_id；itemType=resource 时为 source_id）
   * 
   * @example
   * exampleItemId
   */
  itemId?: string;
  /**
   * @remarks
   * 类型：directory / resource
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
  objectBindings?: ListAdminKnowledgeBasesResponseBodyItemsObjectBindings[];
  /**
   * @remarks
   * 状态为 FAILED 的资源数（仅 KB 顶层目录列表时返回）
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * 资源归属类型（itemType=resource 时有值）：aliding_kb_doc / normal
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * 状态为 READY 的资源数（仅 KB 顶层目录列表时返回）
   * 
   * @example
   * 1
   */
  sourceReadyCount?: number;
  /**
   * @remarks
   * 资源状态（itemType=resource 时有值）
   * 
   * @example
   * string_value
   */
  sourceStatus?: string;
  /**
   * @remarks
   * 目录及子目录下资源总数（仅 KB 顶层目录列表时返回）
   * 
   * @example
   * 1
   */
  sourceTotalCount?: number;
  /**
   * @remarks
   * 资源类型（itemType=resource 时有值）
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      description: 'description',
      directoryKind: 'directoryKind',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      itemId: 'itemId',
      itemType: 'itemType',
      name: 'name',
      objectBindings: 'objectBindings',
      sourceFailedCount: 'sourceFailedCount',
      sourceKind: 'sourceKind',
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
      directoryKind: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      itemId: 'string',
      itemType: 'string',
      name: 'string',
      objectBindings: { 'type': 'array', 'itemType': ListAdminKnowledgeBasesResponseBodyItemsObjectBindings },
      sourceFailedCount: 'number',
      sourceKind: 'string',
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

export class ListAdminKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  items?: ListAdminKnowledgeBasesResponseBodyItems[];
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
   * 符合条件的总数（应用 keyword/sourceTypes 后，分页前）
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListAdminKnowledgeBasesResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

