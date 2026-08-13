// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisibleKnowledgeBaseContentsResponseBodyItemsObjectBindings extends $dara.Model {
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

export class ListVisibleKnowledgeBaseContentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 目录创建者姓名（仅根目录列表时返回；下钻场景为 null）
   * 
   * @example
   * string_value
   */
  creatorName?: string;
  /**
   * @remarks
   * 知识库描述（仅根目录列表时返回；下钻场景为 null）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 目录 KB 归属类型（itemType=directory 时有值）：aliding_kb_root / aliding_kb_internal / normal
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
   * 唯一标识（目录为 directoryId，资源为 sourceId）
   * 
   * @example
   * exampleItemId
   */
  itemId?: string;
  /**
   * @remarks
   * 类型: directory 或 resource
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
  objectBindings?: ListVisibleKnowledgeBaseContentsResponseBodyItemsObjectBindings[];
  /**
   * @remarks
   * 目录下失败资源数（仅根目录列表时返回；下钻场景为 null）
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * Source KB 归属类型（itemType=resource 时有值）：aliding_kb_doc / normal
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * 目录下成功资源数（仅根目录列表时返回；下钻场景为 null）
   * 
   * @example
   * 1
   */
  sourceReadyCount?: number;
  /**
   * @remarks
   * 资源状态（itemType=resource 时有值；本接口固定按 READY 过滤）
   * 
   * @example
   * string_value
   */
  sourceStatus?: string;
  /**
   * @remarks
   * 目录下资源总数（含子目录，仅根目录列表时返回；下钻场景为 null）
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
      objectBindings: { 'type': 'array', 'itemType': ListVisibleKnowledgeBaseContentsResponseBodyItemsObjectBindings },
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

export class ListVisibleKnowledgeBaseContentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  items?: ListVisibleKnowledgeBaseContentsResponseBodyItems[];
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
   * 总数（不分页前的命中行数）
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
      items: { 'type': 'array', 'itemType': ListVisibleKnowledgeBaseContentsResponseBodyItems },
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

