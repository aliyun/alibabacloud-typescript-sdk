// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskRequestDescription extends $dara.Model {
  /**
   * @remarks
   * The streaming output message.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether the throttling rule is enabled. A value of true indicates that the rule is enabled, and a value of false indicates that the rule is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Sample name.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. Pass the project task ID.
   * 
   * - For internal enterprise applications, call the [Create a project task](https://open.dingtalk.com/document/orgapp-server/create-a-project-task) API to obtain the taskId.
   * - For third-party enterprise applications, call the [Create a project task](https://open.dingtalk.com/document/isvapp-server/create-a-project-task) API to obtain the taskId.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type. Set the value to task, which indicates a project task.
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
   * The HTTP API type. Valid values: Http (common HTTP API), Rest (RESTful API), WebSocket (WebSocket API), HttpIngress (HTTP API accessed through Ingress), LLM (large language model API), and Agent (agent API).
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

export class CreateScheduledTaskRequestSegments extends $dara.Model {
  /**
   * @remarks
   * The card callback content.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Sample name.pdf
   */
  name?: string;
  /**
   * @remarks
   * The ID of the recommended item. The value can be a **feedId** or a mini-app ID.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The saved customer type.
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
   * The billing type. Currently, only fixed is supported.
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

export class CreateScheduledTaskRequestTaskDetailRelatedObjects extends $dara.Model {
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
   * The name.
   * 
   * @example
   * Sample name.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. Pass the project task ID.
   * 
   * - For internal enterprise applications, call the [Create a project task](https://open.dingtalk.com/document/orgapp-server/create-a-project-task) API to obtain the taskId.
   * - For third-party enterprise applications, call the [Create a project task](https://open.dingtalk.com/document/isvapp-server/create-a-project-task) API to obtain the taskId.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The relationship type. Valid values:
   * - crm_customer: Enterprise customer.
   * - crm_customer_personal: Individual customer.
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

export class CreateScheduledTaskRequestTaskDetailRelatedSemantics extends $dara.Model {
  /**
   * @remarks
   * The file extension information.
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

export class CreateScheduledTaskRequestTaskDetailRelatedSkills extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Sample name.pdf
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
   * ["113424"]
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

export class CreateScheduledTaskRequestTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The associated objects.
   */
  relatedObjects?: CreateScheduledTaskRequestTaskDetailRelatedObjects[];
  /**
   * @remarks
   * The associated semantics.
   */
  relatedSemantics?: CreateScheduledTaskRequestTaskDetailRelatedSemantics[];
  /**
   * @remarks
   * The associated skills.
   */
  relatedSkills?: CreateScheduledTaskRequestTaskDetailRelatedSkills[];
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
      relatedObjects: { 'type': 'array', 'itemType': CreateScheduledTaskRequestTaskDetailRelatedObjects },
      relatedSemantics: { 'type': 'array', 'itemType': CreateScheduledTaskRequestTaskDetailRelatedSemantics },
      relatedSkills: { 'type': 'array', 'itemType': CreateScheduledTaskRequestTaskDetailRelatedSkills },
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

export class CreateScheduledTaskRequestTriggerConfigPushConfig extends $dara.Model {
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * - **hdm_alarm_sms**: Text message.
   * - **dingtalk**: DingTalk chatbot.
   * - **hdm_alarm_sms_and_email**: Text message and email.
   * - **hdm_alarm_sms,dingtalk**: Text message and DingTalk chatbot.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The scope of the push content. Default value: all_replies.
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
   * Specifies whether the credential is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The file format, such as Excel or CSV.
   * 
   * @example
   * file
   */
  fileFormat?: string;
  /**
   * @remarks
   * The name of the digital employee (the name of the operating object, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The type of the file receiver. Valid values:
   * 
   * - 0: Private chat.
   * - 1: Group chat.
   * - 2: DingTalk Drive.
   * - 3: Document.
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

export class CreateScheduledTaskRequestTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The periodic training information. The cron syntax is used (Minutes Hours DayofMonth Month DayofWeek). If this parameter is empty, periodic training is not performed, which is the default value. In DayofWeek, 0 indicates Sunday.
   * 
   * @example
   * string_value
   */
  cron?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - zh_CN: Chinese. This is the default value.
   * - en_US: English.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The list of task push channels. If this parameter is empty or no channel is enabled, no push is performed.
   */
  pushConfig?: CreateScheduledTaskRequestTriggerConfigPushConfig[];
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The trigger mode. Valid values:
   * 
   * - 1: Manual trigger.
   * - 2: Scheduled trigger.
   * - 3: Code commit trigger.
   * - 5: Pipeline trigger.
   * - 6: WEBHOOK trigger.
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
      pushConfig: { 'type': 'array', 'itemType': CreateScheduledTaskRequestTriggerConfigPushConfig },
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

export class CreateScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * AUTO 偏好：none=默认、performance=效果优先、credit=成本优先；创建缺省为 none，固定模型可保存但不生效
   * 
   * @example
   * performance
   */
  autoPreference?: string;
  /**
   * @remarks
   * The ID of the associated collaboration group (such as cg_101). If this parameter is passed, a group space task is created, and the caller must be a valid group member. If this parameter is empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   */
  description?: CreateScheduledTaskRequestDescription[];
  /**
   * @remarks
   * The name of the currently effective digital employee. This parameter is empty if it is not configured.
   * 
   * @example
   * ["pcitc-magent"]
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether public access is allowed.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The large model used by the assistant. The default value is empty, which indicates that DingTalk automatically selects the model.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample name.pdf
   */
  name?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The output conversation mode. Default value: NEW_CONVERSATION.
   * 
   * @example
   * NEW_CONVERSATION
   */
  outputMode?: string;
  /**
   * @remarks
   * The site ID.
   */
  segments?: CreateScheduledTaskRequestSegments[];
  /**
   * @remarks
   * The task details.
   */
  taskDetail?: CreateScheduledTaskRequestTaskDetail;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The trigger configuration of the scheduled task. triggerMode supports manual (manual trigger) and scheduled (scheduled trigger). If scheduled is used, cron must be specified. timezone and language are injected by the server, and the client does not need to pass them. pushConfig is the list of task push channels. If it is empty or no channel is enabled, no push is performed.
   */
  triggerConfig?: CreateScheduledTaskRequestTriggerConfig;
  /**
   * @remarks
   * The visibility scope of the group task. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaboration members), and PUBLIC (visible to all group members). If this parameter is not passed for a group task, the default value is PRIVATE. This field is ignored for personal tasks.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  /**
   * @remarks
   * The list of user IDs of collaboration members. This parameter takes effect only when visibility is set to COLLABORATIVE and is ignored for other values. A maximum of 1,000 user IDs can be specified. You do not need to pass the IDs of the task creator and group creator because they are covered by the authentication layer. This field is ignored for personal tasks.
   * 
   * @example
   * ["1002"]
   */
  visibleMemberUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      autoPreference: 'autoPreference',
      collaborationGroupId: 'collaborationGroupId',
      description: 'description',
      digitalEmployeeName: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      outputMode: 'outputMode',
      segments: 'segments',
      taskDetail: 'taskDetail',
      tenantId: 'tenantId',
      triggerConfig: 'triggerConfig',
      visibility: 'visibility',
      visibleMemberUserIds: 'visibleMemberUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      autoPreference: 'string',
      collaborationGroupId: 'string',
      description: { 'type': 'array', 'itemType': CreateScheduledTaskRequestDescription },
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      outputMode: 'string',
      segments: { 'type': 'array', 'itemType': CreateScheduledTaskRequestSegments },
      taskDetail: CreateScheduledTaskRequestTaskDetail,
      tenantId: 'string',
      triggerConfig: CreateScheduledTaskRequestTriggerConfig,
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

