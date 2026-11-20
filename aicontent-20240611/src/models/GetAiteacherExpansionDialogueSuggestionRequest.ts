// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks extends $dara.Model {
  /**
   * @remarks
   * The AI conversation content.
   * 
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @remarks
   * The translation of the AI conversation content.
   * 
   * @example
   * Why do some people think walking dogs is a good job?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * The sequence number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The user conversation content.
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
   * The conversation content.
   * 
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether the response is off-topic and applies flow control. This parameter indicates whether the student\\"s response aligns with the conversation task settings. The value is derived from the return results of previous conversation turns. Additionally, this parameter serves a flow control purpose. If the response goes off-topic more than twice, the value is forcibly set to true to force a task switch. Valid values:
   * - true: Off-topic.
   * - false: On-topic.
   * 
   * @example
   * true
   */
  isOffTopicControl?: boolean;
  /**
   * @remarks
   * Specifies whether the response is on-topic. Valid values:
   * - true: On-topic.
   * - false: Off-topic.
   * 
   * @example
   * true
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * The sequence number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The role.
   * 
   * This parameter is required.
   * 
   * @example
   * AI: assistant; User: user
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
   * The name of the AI.
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
   * The description of the conversation background.
   * 
   * This parameter is required.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  background?: string;
  /**
   * @remarks
   * The collection of conversation task content.
   * 
   * This parameter is required.
   */
  dialogueTasks?: GetAITeacherExpansionDialogueSuggestionRequestDialogueTasks[];
  /**
   * @remarks
   * The language code.
   * 
   * @example
   * en-gb
   */
  languageCode?: string;
  /**
   * @remarks
   * The conversation records.
   * 
   * This parameter is required.
   */
  records?: GetAITeacherExpansionDialogueSuggestionRequestRecords[];
  /**
   * @remarks
   * The role settings.
   * 
   * This parameter is required.
   */
  roleInfo?: GetAITeacherExpansionDialogueSuggestionRequestRoleInfo;
  /**
   * @remarks
   * The opening statement.
   * 
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * The topic.
   * 
   * This parameter is required.
   * 
   * @example
   * Let\\"s talk about traffic rules.
   */
  topic?: string;
  /**
   * @remarks
   * The user ID.
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

