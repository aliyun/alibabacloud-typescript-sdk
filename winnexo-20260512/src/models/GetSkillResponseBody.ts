// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBodyArguments extends $dara.Model {
  /**
   * @remarks
   * 默认值
   * 
   * @example
   * string_value
   */
  default?: string;
  /**
   * @remarks
   * 参数说明
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * enum
   * 
   * @example
   * string_value
   */
  enum?: string[];
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
   * 是否必填
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * 参数类型: string / number / boolean / array
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      enum: 'enum',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'string',
      description: 'string',
      enum: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      required: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enum)) {
      $dara.Model.validateArray(this.enum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillResponseBody extends $dara.Model {
  arguments?: GetSkillResponseBodyArguments[];
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
   * 技能详细逻辑
   * 
   * @example
   * string_value
   */
  detailLogic?: string;
  /**
   * @remarks
   * 展示名称
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * 执行模式
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
   * 入参配置原文
   * 
   * @example
   * string_value
   */
  inputConfig?: string;
  inputConfigFormatted?: { [key: string]: any }[];
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
   * 技能编码（全局唯一）
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  skillFiles?: { [key: string]: any }[];
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
   * SKILL.md 简介（由 LLM 生成）
   * 
   * @example
   * string_value
   */
  skillMdSummary?: string;
  /**
   * @remarks
   * 来源类型: BUILTIN / CUSTOM
   * 
   * @example
   * string_value
   */
  sourceType?: string;
  /**
   * @remarks
   * 技能状态: ACTIVE / DRAFT
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * tags
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
   * 版本总数
   * 
   * @example
   * 1
   */
  versionCount?: number;
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
      arguments: 'arguments',
      code: 'code',
      createdTime: 'createdTime',
      description: 'description',
      detailLogic: 'detailLogic',
      displayName: 'displayName',
      executeMode: 'executeMode',
      globalAccess: 'globalAccess',
      hasDraftChanges: 'hasDraftChanges',
      inputConfig: 'inputConfig',
      inputConfigFormatted: 'inputConfigFormatted',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      skillCode: 'skillCode',
      skillFiles: 'skillFiles',
      skillHubDefinitionId: 'skillHubDefinitionId',
      skillMdSummary: 'skillMdSummary',
      sourceType: 'sourceType',
      status: 'status',
      tags: 'tags',
      updatedTime: 'updatedTime',
      versionCount: 'versionCount',
      versionNumber: 'versionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: { 'type': 'array', 'itemType': GetSkillResponseBodyArguments },
      code: 'string',
      createdTime: 'string',
      description: 'string',
      detailLogic: 'string',
      displayName: 'string',
      executeMode: 'string',
      globalAccess: 'boolean',
      hasDraftChanges: 'boolean',
      inputConfig: 'string',
      inputConfigFormatted: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      name: 'string',
      requestId: 'string',
      skillCode: 'string',
      skillFiles: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      skillHubDefinitionId: 'number',
      skillMdSummary: 'string',
      sourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      updatedTime: 'string',
      versionCount: 'number',
      versionNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arguments)) {
      $dara.Model.validateArray(this.arguments);
    }
    if(Array.isArray(this.inputConfigFormatted)) {
      $dara.Model.validateArray(this.inputConfigFormatted);
    }
    if(Array.isArray(this.skillFiles)) {
      $dara.Model.validateArray(this.skillFiles);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

