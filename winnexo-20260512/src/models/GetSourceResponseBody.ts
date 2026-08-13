// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceResponseBodyObjectBindings extends $dara.Model {
  /**
   * @remarks
   * 对象归属的语义图谱名
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 对象 ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 对象类型
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceResponseBodyUnstructuredDocs extends $dara.Model {
  /**
   * @remarks
   * DocumentAgent 解析完成时间，ISO8601 格式
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  completionTime?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 文件记录 ID
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * 文件类型
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * OSS 远程 URL
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  ossUrl?: string;
  /**
   * @remarks
   * DocumentAgent 语义 ID
   * 
   * @example
   * exampleSemanticsId
   */
  semanticsId?: string;
  static names(): { [key: string]: string } {
    return {
      completionTime: 'completionTime',
      fileName: 'fileName',
      fileRecordId: 'fileRecordId',
      fileType: 'fileType',
      ossUrl: 'ossUrl',
      semanticsId: 'semanticsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTime: 'string',
      fileName: 'string',
      fileRecordId: 'string',
      fileType: 'string',
      ossUrl: 'string',
      semanticsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceResponseBody extends $dara.Model {
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
   * DocumentAgent 解析完成时间，ISO8601 格式
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  completionTime?: string;
  /**
   * @remarks
   * 数据源描述
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 创建时间，ISO8601 格式
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 修改时间，ISO8601 格式
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * 是否存在备注
   * 
   * @example
   * true
   */
  hasNotes?: boolean;
  /**
   * @remarks
   * 是否存在 settings 配置
   * 
   * @example
   * true
   */
  hasSettings?: boolean;
  /**
   * @remarks
   * 是否存在结构化表
   * 
   * @example
   * true
   */
  hasStructuredTables?: boolean;
  /**
   * @remarks
   * 是否存在非结构化文档
   * 
   * @example
   * true
   */
  hasUnstructuredDocs?: boolean;
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
   * 备注（仅 includeDetails=True）
   * 
   * @example
   * string_value
   */
  notes?: string;
  objectBindings?: GetSourceResponseBodyObjectBindings[];
  /**
   * @remarks
   * 主对象 ID（兼容字段）
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 主对象类型（兼容字段）
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * 运营对象名称
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
   * 可见范围：PERSONAL / TENANT
   * 
   * @example
   * PERSONAL
   */
  scope?: string;
  settings?: { [key: string]: any };
  /**
   * @remarks
   * 技能产出 ID（由产出保存为资源时携带）
   * 
   * @example
   * exampleSkillOutputId
   */
  skillOutputId?: string;
  /**
   * @remarks
   * 数据源 ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 数据源归属类型：normal / aliding_kb_doc
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * 资源标签 JSON 字符串
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * 数据源状态
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * structuredTables
   * 
   * @example
   * string_value
   */
  structuredTables?: string[];
  unstructuredDocs?: GetSourceResponseBodyUnstructuredDocs[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      completionTime: 'completionTime',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hasNotes: 'hasNotes',
      hasSettings: 'hasSettings',
      hasStructuredTables: 'hasStructuredTables',
      hasUnstructuredDocs: 'hasUnstructuredDocs',
      message: 'message',
      name: 'name',
      notes: 'notes',
      objectBindings: 'objectBindings',
      objectId: 'objectId',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      requestId: 'requestId',
      scope: 'scope',
      settings: 'settings',
      skillOutputId: 'skillOutputId',
      sourceId: 'sourceId',
      sourceKind: 'sourceKind',
      sourceTags: 'sourceTags',
      sourceType: 'sourceType',
      status: 'status',
      structuredTables: 'structuredTables',
      unstructuredDocs: 'unstructuredDocs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completionTime: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasNotes: 'boolean',
      hasSettings: 'boolean',
      hasStructuredTables: 'boolean',
      hasUnstructuredDocs: 'boolean',
      message: 'string',
      name: 'string',
      notes: 'string',
      objectBindings: { 'type': 'array', 'itemType': GetSourceResponseBodyObjectBindings },
      objectId: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      requestId: 'string',
      scope: 'string',
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      skillOutputId: 'string',
      sourceId: 'string',
      sourceKind: 'string',
      sourceTags: 'string',
      sourceType: 'string',
      status: 'string',
      structuredTables: { 'type': 'array', 'itemType': 'string' },
      unstructuredDocs: { 'type': 'array', 'itemType': GetSourceResponseBodyUnstructuredDocs },
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    if(this.settings) {
      $dara.Model.validateMap(this.settings);
    }
    if(Array.isArray(this.structuredTables)) {
      $dara.Model.validateArray(this.structuredTables);
    }
    if(Array.isArray(this.unstructuredDocs)) {
      $dara.Model.validateArray(this.unstructuredDocs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

