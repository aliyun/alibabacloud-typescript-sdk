// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseSourceResponseBody extends $dara.Model {
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
   * 知识描述
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 所属分类 ID
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 所属分类完整路径
   * 
   * @example
   * string_value
   */
  directoryPath?: string;
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
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 知识 ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 知识 KB 归属类型：aliding_kb_doc（阿里钉知识库文档）/ normal（普通知识）
   * 
   * @example
   * string_value
   */
  sourceKind?: string;
  /**
   * @remarks
   * 知识标签（JSON 字符串列表）
   * 
   * @example
   * string_value
   */
  sourceTags?: string;
  /**
   * @remarks
   * 知识类型（TEXT / FILE / ONLINE_DOC 等）
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * 处理状态（READY / RUNNING / FAILED 等）
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 状态附加信息（如失败原因）
   * 
   * @example
   * string_value
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      directoryId: 'directoryId',
      directoryPath: 'directoryPath',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      sourceId: 'sourceId',
      sourceKind: 'sourceKind',
      sourceTags: 'sourceTags',
      sourceType: 'sourceType',
      status: 'status',
      statusMessage: 'statusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      directoryId: 'string',
      directoryPath: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      message: 'string',
      name: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceKind: 'string',
      sourceTags: 'string',
      sourceType: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

