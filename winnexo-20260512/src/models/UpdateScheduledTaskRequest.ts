// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledTaskRequestDescription extends $dara.Model {
  /**
   * @remarks
   * The text content. Required when type is set to text.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The feature switch. Optional when type is set to web_search.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. This parameter has a value when type is set to mention.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * The skill code. This parameter has a value when type is set to skill.
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * The element type. Valid values: text, web_search, mention, and skill.
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
   * The text content. Required when type is set to text.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The feature switch. Optional when type is set to web_search.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. This parameter has a value when type is set to mention.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  /**
   * @remarks
   * The skill code. This parameter has a value when type is set to skill.
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * The element type. Valid values: text, web_search, mention, and skill.
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
   * The mention type, such as objects.
   * 
   * @example
   * string_value
   */
  mentionType?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. This parameter has a value when an object is mentioned using @.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type, such as customer or company.
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
   * The semantic attributes (JSON string) used for filtering during semantic retrieval.
   * 
   * @example
   * {"level": "VIP"}
   */
  attributes?: string;
  /**
   * @remarks
   * The semantic entity name, such as customer or opportunity.
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
   * The display name of the skill.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The skill code.
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
  /**
   * @remarks
   * The related objects.
   */
  relatedObjects?: UpdateScheduledTaskRequestTaskDetailRelatedObjects[];
  /**
   * @remarks
   * The related semantics.
   */
  relatedSemantics?: UpdateScheduledTaskRequestTaskDetailRelatedSemantics[];
  /**
   * @remarks
   * The related skills.
   */
  relatedSkills?: UpdateScheduledTaskRequestTaskDetailRelatedSkills[];
  /**
   * @remarks
   * The task understanding description polished by the LLM.
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
   * The push channel type.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The scope of push content. Default value: all_replies.
   * 
   * @example
   * all_replies
   */
  contentScope?: string;
  /**
   * @remarks
   * The push method. Default value: channel_bot.
   * 
   * @example
   * channel_bot
   */
  deliveryMethod?: string;
  /**
   * @remarks
   * Specifies whether to push to this channel. Default value: false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The format for pushing output files. Default value: file.
   * 
   * @example
   * file
   */
  fileFormat?: string;
  /**
   * @remarks
   * The digital human to which the sending bot belongs. This parameter is required and cannot be empty.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The receiver type. Currently only self is supported.
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
   * The cron expression. Required when trigger_mode is set to scheduled. Example: \\"00 09 * * *\\".
   * 
   * @example
   * string_value
   */
  cron?: string;
  /**
   * @remarks
   * The language, such as zh-CN or en-US. Automatically injected by the server.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The list of push channels for the task. No push notifications are sent if the list is empty or no channel is enabled.
   */
  pushConfig?: UpdateScheduledTaskRequestTriggerConfigPushConfig[];
  /**
   * @remarks
   * The time zone, such as Asia/Shanghai. Automatically injected by the server.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The trigger mode. Valid values: manual and scheduled.
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
  /**
   * @remarks
   * The description information.
   */
  description?: UpdateScheduledTaskRequestDescription[];
  /**
   * @remarks
   * The list of digital human names.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether the task is publicly accessible.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The execution model tier. If not specified, the model tier is not updated.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The segments.
   */
  segments?: UpdateScheduledTaskRequestSegments[];
  /**
   * @remarks
   * The task details.
   */
  taskDetail?: UpdateScheduledTaskRequestTaskDetail;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The trigger configuration. The configuration varies depending on the trigger type.
   */
  triggerConfig?: UpdateScheduledTaskRequestTriggerConfig;
  /**
   * @remarks
   * The visibility scope for group tasks. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaborators), and PUBLIC (visible to all group members). If not specified, the visibility is not updated. This parameter is ignored for personal tasks.
   * 
   * @example
   * COLLABORATIVE
   */
  visibility?: string;
  /**
   * @remarks
   * The full replacement list of collaborator member user IDs. This parameter takes effect only when visibility is set to COLLABORATIVE. The list is cleared when switching away from the COLLABORATIVE tier. A maximum of 1000 members are supported. If not specified, the member list is not updated. The task creator and group creator do not need to be included because they are covered by the authentication layer. This parameter is ignored for personal tasks.
   * 
   * @example
   * string_value
   */
  visibleMemberUserIds?: string[];
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
      visibility: 'visibility',
      visibleMemberUserIds: 'visibleMemberUserIds',
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
      visibility: 'string',
      visibleMemberUserIds: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.visibleMemberUserIds)) {
      $dara.Model.validateArray(this.visibleMemberUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

