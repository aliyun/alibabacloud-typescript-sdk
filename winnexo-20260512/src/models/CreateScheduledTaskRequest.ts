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
   * Specifies whether the throttling rule is enabled. A value of true indicates enabled, and a value of false indicates disabled.
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
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. Pass the project task ID.
   * 
   * - For internal enterprise applications, use the taskId obtained by calling the [Create a project task](https://open.dingtalk.com/document/orgapp-server/create-a-project-task) operation.
   * 
   * - For third-party enterprise applications, use the taskId obtained by calling the [Create a project task](https://open.dingtalk.com/document/isvapp-server/create-a-project-task) operation.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type. Fixed value: task, indicating a project task.
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
   * The HTTP API type. Valid values: Http (standard HTTP API), Rest (RESTful API), WebSocket (WebSocket API), HttpIngress (HTTP API accessed through Ingress), LLM (large language model API), and Agent (Agent proxy API).
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
   * Specifies whether to enable this feature.
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
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The ID of the recommended item, which can be a **feedId** or a micro-application ID.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The customer type to save.
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
   * The billing type. Only fixed is supported.
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
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The object ID. Pass the project task ID.
   * 
   * - For internal enterprise applications, use the taskId obtained by calling the [Create a project task](https://open.dingtalk.com/document/orgapp-server/create-a-project-task) operation.
   * 
   * - For third-party enterprise applications, use the taskId obtained by calling the [Create a project task](https://open.dingtalk.com/document/isvapp-server/create-a-project-task) operation.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The relationship type. Valid values:
   * - crm_customer: enterprise customer.
   * - crm_customer_personal: individual customer.
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

export class CreateScheduledTaskRequestTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The related objects.
   */
  relatedObjects?: CreateScheduledTaskRequestTaskDetailRelatedObjects[];
  /**
   * @remarks
   * The related semantics.
   */
  relatedSemantics?: CreateScheduledTaskRequestTaskDetailRelatedSemantics[];
  /**
   * @remarks
   * The related skills.
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
   * - **hdm_alarm_sms**: SMS.
   * - **dingtalk**: DingTalk chatbot.
   * - **hdm_alarm_sms_and_email**: SMS and email.
   * - **hdm_alarm_sms,dingtalk**: SMS and DingTalk chatbot.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The push content scope. Default value: all_replies.
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
   * The file format. Valid values: Excel and CSV.
   * 
   * @example
   * file
   */
  fileFormat?: string;
  /**
   * @remarks
   * The digital employee name (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The file receiver type. Valid values:
   * 
   * - 0: One-on-one chat.
   * 
   * - 1: Group chat.
   * 
   * - 2: DingTalk Drive.
   * 
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
   * The periodic training information in cron syntax (Minutes Hours DayofMonth Month DayofWeek). An empty value indicates that periodic training is not performed (default). In DayofWeek, 0 indicates Sunday.
   * 
   * @example
   * string_value
   */
  cron?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - zh_CN: Chinese (default)
   * - en_US: English
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The list of task push channels. No push is performed if the list is empty or no channel is enabled.
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
   * The trigger mode.
   *  
   *   1: Manual trigger
   *    
   *   2: Scheduled trigger 
   * 
   *   3: Code commit trigger
   *  
   *   5: Pipeline trigger
   * 
   *   6: WEBHOOK trigger
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
   * The ID of the collaboration group (such as cg_101). If specified, a group space task is created (the caller must be a valid group member). If empty, a personal task is created.
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
   * The name of the current effective digital employee. This parameter is empty if not configured.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether public access is enabled.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The large model used by the assistant. An empty value indicates that DingTalk automatically selects the model.
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
   * SampleName.pdf
   */
  name?: string;
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
   * The trigger configuration. The configuration varies depending on the trigger type. For the specific format, refer to the following data structures:
   * 
   *   - OSS trigger: See [OSSTriggerConfig](https://help.aliyun.com/document_detail/415697.html).
   *   - Simple Log Service trigger: See [LogTriggerConfig](https://help.aliyun.com/document_detail/415694.html).
   *   - Time trigger: See [TimeTriggerConfig](https://help.aliyun.com/document_detail/415712.html).
   *   - HTTP trigger: See [HTTPTriggerConfig](https://help.aliyun.com/document_detail/415685.html).
   *   - Tablestore trigger: You only need to specify the complete **SourceArn** parameter. No additional configuration is required. Set the value to an empty object {}.
   *   - CDN event trigger: See [CDNEventsTriggerConfig](https://help.aliyun.com/document_detail/415674.html).
   *   - MNS topic trigger: See [MnsTopicTriggerConfig](https://help.aliyun.com/document_detail/415695.html).
   *   - EventBridge trigger: See [EventBridgeTriggerConfig](https://help.aliyun.com/document_detail/2508622.html).
   */
  triggerConfig?: CreateScheduledTaskRequestTriggerConfig;
  /**
   * @remarks
   * The visibility scope of the group task. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaborators), and PUBLIC (visible to all group members). Default value for group tasks: PRIVATE. This parameter is ignored for personal tasks.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  /**
   * @remarks
   * The list of collaborator user IDs. This parameter takes effect only when visibility is set to COLLABORATIVE. It is ignored for other visibility levels. A maximum of 1000 IDs are supported. The task creator and group creator do not need to be included (covered by the authentication layer). This parameter is ignored for personal tasks.
   * 
   * @example
   * string_value
   */
  visibleMemberUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      description: 'description',
      digitalEmployeeName: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
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
      collaborationGroupId: 'string',
      description: { 'type': 'array', 'itemType': CreateScheduledTaskRequestDescription },
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
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

