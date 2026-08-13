// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 创建时间，ISO8601 格式
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * 技能描述（已 i18n 解析）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 执行模式：CODE_AGENT / SYSTEM 等
   * 
   * @example
   * string_value
   */
  executeMode?: string;
  /**
   * @remarks
   * 是否全局可访问
   * 
   * @example
   * true
   */
  globalAccess?: boolean;
  /**
   * @remarks
   * 是否存在未发布的草稿修改
   * 
   * @example
   * true
   */
  hasDraftChanges?: boolean;
  /**
   * @remarks
   * 技能名称（已 i18n 解析）
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 技能编码（全局唯一）
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * 技能定义 ID
   * 
   * @example
   * 1
   */
  skillHubDefinitionId?: number;
  /**
   * @remarks
   * 来源类型：BUILTIN / CUSTOM
   * 
   * @example
   * BUILTIN
   */
  sourceType?: string;
  /**
   * @remarks
   * 技能状态：ACTIVE / DRAFT
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 标签列表（已 i18n 解析）
   * 
   * @example
   * string_value
   */
  tags?: string[];
  /**
   * @remarks
   * 修改时间，ISO8601 格式
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  updatedTime?: string;
  /**
   * @remarks
   * 版本号
   * 
   * @example
   * string_value
   */
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      executeMode: 'executeMode',
      globalAccess: 'globalAccess',
      hasDraftChanges: 'hasDraftChanges',
      name: 'name',
      skillCode: 'skillCode',
      skillHubDefinitionId: 'skillHubDefinitionId',
      sourceType: 'sourceType',
      status: 'status',
      tags: 'tags',
      updatedTime: 'updatedTime',
      versionNumber: 'versionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      executeMode: 'string',
      globalAccess: 'boolean',
      hasDraftChanges: 'boolean',
      name: 'string',
      skillCode: 'string',
      skillHubDefinitionId: 'number',
      sourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      updatedTime: 'string',
      versionNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillsResponseBody extends $dara.Model {
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
   * 技能列表
   */
  items?: ListSkillsResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 当前页码
   */
  page?: number;
  /**
   * @remarks
   * 每页数量
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
   * 符合条件的技能总数
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
      items: { 'type': 'array', 'itemType': ListSkillsResponseBodyItems },
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

