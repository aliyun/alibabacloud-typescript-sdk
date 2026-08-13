// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledTaskRequestDescription extends $dara.Model {
  /**
   * @remarks
   * 文本内容，type=text 时必填
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 功能开关，type=web_search 时可选
   * 
   * @example
   * true
   */
  enabled?: boolean;
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
   * 对象 ID，type=mention 时有值
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 对象类型如 customer，type=mention 时有值
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * 技能编码，type=skill 时有值
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * 元素类型：text|web_search|mention|skill
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      enabled: 'enabled',
      name: 'name',
      objectId: 'objectId',
      objectType: 'objectType',
      skillCode: 'skillCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'boolean',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      skillCode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledTaskRequestSegments extends $dara.Model {
  /**
   * @remarks
   * 文本内容，type=text 时必填
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 功能开关，type=web_search 时可选
   * 
   * @example
   * true
   */
  enabled?: boolean;
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
   * 对象 ID，type=mention 时有值
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 对象类型如 customer，type=mention 时有值
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * 技能编码，type=skill 时有值
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * 元素类型：text|web_search|mention|skill
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      enabled: 'enabled',
      name: 'name',
      objectId: 'objectId',
      objectType: 'objectType',
      skillCode: 'skillCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'boolean',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      skillCode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledTaskRequestTaskDetailRelatedObjects extends $dara.Model {
  /**
   * @remarks
   * 提及类型，如 objects
   * 
   * @example
   * string_value
   */
  mentionType?: string;
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
   * 对象 ID（@指定时有值）
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 对象类型，如 customer、company
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      mentionType: 'mentionType',
      name: 'name',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mentionType: 'string',
      name: 'string',
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

export class UpdateScheduledTaskRequestTaskDetailRelatedSemantics extends $dara.Model {
  /**
   * @remarks
   * 语义属性（JSON 字符串），用于语义检索时过滤
   * 
   * @example
   * {"level": "VIP"}
   */
  attributes?: string;
  /**
   * @remarks
   * 语义实体名，如客户/机会
   * 
   * @example
   * customer
   */
  entity?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      entity: 'entity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      entity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledTaskRequestTaskDetailRelatedSkills extends $dara.Model {
  /**
   * @remarks
   * 技能展示名称
   * 
   * @example
   * string_value
   */
  displayName?: string;
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
   * 技能代码
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * sourceIds
   * 
   * @example
   * string_value
   */
  sourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      name: 'name',
      skillCode: 'skillCode',
      sourceIds: 'sourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      name: 'string',
      skillCode: 'string',
      sourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceIds)) {
      $dara.Model.validateArray(this.sourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledTaskRequestTaskDetail extends $dara.Model {
  relatedObjects?: UpdateScheduledTaskRequestTaskDetailRelatedObjects[];
  relatedSemantics?: UpdateScheduledTaskRequestTaskDetailRelatedSemantics[];
  relatedSkills?: UpdateScheduledTaskRequestTaskDetailRelatedSkills[];
  /**
   * @remarks
   * LLM 润色后的任务理解描述
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  taskUnderstand?: string;
  static names(): { [key: string]: string } {
    return {
      relatedObjects: 'relatedObjects',
      relatedSemantics: 'relatedSemantics',
      relatedSkills: 'relatedSkills',
      taskUnderstand: 'taskUnderstand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedObjects: { 'type': 'array', 'itemType': UpdateScheduledTaskRequestTaskDetailRelatedObjects },
      relatedSemantics: { 'type': 'array', 'itemType': UpdateScheduledTaskRequestTaskDetailRelatedSemantics },
      relatedSkills: { 'type': 'array', 'itemType': UpdateScheduledTaskRequestTaskDetailRelatedSkills },
      taskUnderstand: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedObjects)) {
      $dara.Model.validateArray(this.relatedObjects);
    }
    if(Array.isArray(this.relatedSemantics)) {
      $dara.Model.validateArray(this.relatedSemantics);
    }
    if(Array.isArray(this.relatedSkills)) {
      $dara.Model.validateArray(this.relatedSkills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledTaskRequestTriggerConfigPushConfig extends $dara.Model {
  /**
   * @remarks
   * 推送渠道
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * 推送内容范围，默认 all_replies
   * 
   * @example
   * all_replies
   */
  contentScope?: string;
  /**
   * @remarks
   * 推送方式，默认 channel_bot
   * 
   * @example
   * channel_bot
   */
  deliveryMethod?: string;
  /**
   * @remarks
   * 是否推送该频道，默认关闭
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 产出文件推送格式，默认 file
   * 
   * @example
   * file
   */
  fileFormat?: string;
  /**
   * @remarks
   * 发送机器人所属数字员工，必传且不可为空
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 接收人，当前仅支持 self
   * 
   * @example
   * string_value
   */
  receiverType?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      contentScope: 'contentScope',
      deliveryMethod: 'deliveryMethod',
      enabled: 'enabled',
      fileFormat: 'fileFormat',
      operatingObjectName: 'operatingObjectName',
      receiverType: 'receiverType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      contentScope: 'string',
      deliveryMethod: 'string',
      enabled: 'boolean',
      fileFormat: 'string',
      operatingObjectName: 'string',
      receiverType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledTaskRequestTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * Cron 表达式，trigger_mode=scheduled 时必填，如 \"00 09 * * *\"
   * 
   * @example
   * string_value
   */
  cron?: string;
  /**
   * @remarks
   * 语言如 zh-CN|en-US，由服务端自动注入
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * 任务推送频道列表；为空或无启用频道时不推送
   */
  pushConfig?: UpdateScheduledTaskRequestTriggerConfigPushConfig[];
  /**
   * @remarks
   * 时区如 Asia/Shanghai，由服务端自动注入
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * 触发模式：manual|scheduled
   * 
   * This parameter is required.
   * 
   * @example
   * manual
   */
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      language: 'language',
      pushConfig: 'pushConfig',
      timezone: 'timezone',
      triggerMode: 'triggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      language: 'string',
      pushConfig: { 'type': 'array', 'itemType': UpdateScheduledTaskRequestTriggerConfigPushConfig },
      timezone: 'string',
      triggerMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pushConfig)) {
      $dara.Model.validateArray(this.pushConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScheduledTaskRequest extends $dara.Model {
  description?: UpdateScheduledTaskRequestDescription[];
  /**
   * @remarks
   * 数字员工名称列表
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * 是否公开访问
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * 执行模型档位；不传则不更新
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  segments?: UpdateScheduledTaskRequestSegments[];
  taskDetail?: UpdateScheduledTaskRequestTaskDetail;
  /**
   * @remarks
   * 任务 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  triggerConfig?: UpdateScheduledTaskRequestTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      digitalEmployeeName: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      segments: 'segments',
      taskDetail: 'taskDetail',
      taskId: 'taskId',
      tenantId: 'tenantId',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: { 'type': 'array', 'itemType': UpdateScheduledTaskRequestDescription },
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      segments: { 'type': 'array', 'itemType': UpdateScheduledTaskRequestSegments },
      taskDetail: UpdateScheduledTaskRequestTaskDetail,
      taskId: 'string',
      tenantId: 'string',
      triggerConfig: UpdateScheduledTaskRequestTriggerConfig,
    };
  }

  validate() {
    if(Array.isArray(this.description)) {
      $dara.Model.validateArray(this.description);
    }
    if(Array.isArray(this.digitalEmployeeName)) {
      $dara.Model.validateArray(this.digitalEmployeeName);
    }
    if(Array.isArray(this.segments)) {
      $dara.Model.validateArray(this.segments);
    }
    if(this.taskDetail && typeof (this.taskDetail as any).validate === 'function') {
      (this.taskDetail as any).validate();
    }
    if(this.triggerConfig && typeof (this.triggerConfig as any).validate === 'function') {
      (this.triggerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

