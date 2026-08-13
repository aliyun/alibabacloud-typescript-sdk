// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisibleKnowledgeBasesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 目录创建者姓名（来自 rbj_user_tenant_mapping.user_display_name）
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
   * 目录唯一标识（租户内唯一）
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
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
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
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
   * 目录及子目录下状态为 FAILED 的资源数
   * 
   * @example
   * 1
   */
  sourceFailedCount?: number;
  /**
   * @remarks
   * 目录及子目录下状态为 READY 的资源数
   * 
   * @example
   * 1
   */
  sourceReadyCount?: number;
  /**
   * @remarks
   * 目录及子目录下的资源总数
   * 
   * @example
   * 1
   */
  sourceTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creatorName: 'creatorName',
      description: 'description',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
      path: 'path',
      sourceFailedCount: 'sourceFailedCount',
      sourceReadyCount: 'sourceReadyCount',
      sourceTotalCount: 'sourceTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorName: 'string',
      description: 'string',
      directoryId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      path: 'string',
      sourceFailedCount: 'number',
      sourceReadyCount: 'number',
      sourceTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVisibleKnowledgeBasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  items?: ListVisibleKnowledgeBasesResponseBodyItems[];
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
   * 返回条数（不分页，等于 len(items)）
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
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListVisibleKnowledgeBasesResponseBodyItems },
      message: 'string',
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

