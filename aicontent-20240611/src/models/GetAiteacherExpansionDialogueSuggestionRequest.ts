// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks extends $dara.Model {
  /**
   * @remarks
   * The content of the assistant\\"s dialogue.
   * 
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @remarks
   * The translated content of the assistant\\"s dialogue.
   * 
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * The sequence number of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The content of the user\\"s dialogue.
   * 
   * This parameter is required.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      assistantTranslate: 'assistantTranslate',
      order: 'order',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      assistantTranslate: 'string',
      order: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestRecords extends $dara.Model {
  /**
   * @remarks
   * The content of the dialogue message.
   * 
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @remarks
   * Indicates if the user\\"s response has gone off-topic. This parameter controls the conversation flow based on dialogue history. The system sets this parameter to `true` to switch tasks if the user goes off-topic more than twice.
   * 
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @remarks
   * Indicates if the response is on topic.
   * 
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * The sequence number of the message in the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The role of the message author. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * AI：assistant；用户：user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      order: 'order',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      order: 'number',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequestRoleInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the AI assistant.
   * 
   * This parameter is required.
   * 
   * @example
   * Alex
   */
  assistant?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * Jamie
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAITeacherExpansionDialogueSuggestionRequest extends $dara.Model {
  /**
   * @remarks
   * The background of the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  background?: string;
  /**
   * @remarks
   * An array of objects that define the dialogue tasks.
   * 
   * This parameter is required.
   */
  dialogueTasks?: GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks[];
  /**
   * @remarks
   * The language code, specified as a BCP 47 language tag. Valid values:
   * 
   * @example
   * en-gb
   */
  languageCode?: string;
  /**
   * @remarks
   * An array of dialogue records.
   * 
   * This parameter is required.
   */
  records?: GetAITeacherExpansionDialogueSuggestionRequestRecords[];
  /**
   * @remarks
   * Contains information about the roles in the conversation.
   * 
   * This parameter is required.
   */
  roleInfo?: GetAITeacherExpansionDialogueSuggestionRequestRoleInfo;
  /**
   * @remarks
   * The opening sentence of the conversation.
   * 
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * The main topic of the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * Let\\"s talk about traffic rules.
   */
  topic?: string;
  /**
   * @remarks
   * A unique identifier for the end user, used for monitoring and abuse detection.
   * 
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      background: 'background',
      dialogueTasks: 'dialogueTasks',
      languageCode: 'languageCode',
      records: 'records',
      roleInfo: 'roleInfo',
      startSentence: 'startSentence',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: 'string',
      dialogueTasks: { 'type': 'array', 'itemType': GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': GetAITeacherExpansionDialogueSuggestionRequestRecords },
      roleInfo: GetAITeacherExpansionDialogueSuggestionRequestRoleInfo,
      startSentence: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    if(this.roleInfo && typeof (this.roleInfo as any).validate === 'function') {
      (this.roleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

