// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherExpansionDialogueRefineRequestDialogueTasks extends $dara.Model {
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

export class ExecuteAITeacherExpansionDialogueRefineRequestRecords extends $dara.Model {
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
   * Specifies whether the response is off topic and controls the conversation flow. This parameter indicates whether the student\\"s response meets the requirements of the conversation task. The value of this parameter is derived from the return results of previous conversation turns. Additionally, this parameter controls the conversation flow. If the response is off topic more than twice, the value is forcibly set to true to switch the task. Valid values:
   * - true: Off topic.
   * - false: On topic.
   * 
   * @example
   * true
   */
  isOffTopicControl?: boolean;
  /**
   * @remarks
   * Specifies whether the response is on topic. Valid values:
   * - true: On topic.
   * - false: Off topic.
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

export class ExecuteAITeacherExpansionDialogueRefineRequestRoleInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the AI.
   * 
   * This parameter is required.
   * 
   * @example
   * Jane, a caring mother
   */
  assistant?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * Lily, a friendly student
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

export class ExecuteAITeacherExpansionDialogueRefineRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation background description.
   * 
   * This parameter is required.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  background?: string;
  /**
   * @remarks
   * The conversation task content collection.
   * 
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherExpansionDialogueRefineRequestDialogueTasks[];
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
  records?: ExecuteAITeacherExpansionDialogueRefineRequestRecords[];
  /**
   * @remarks
   * The role settings.
   * 
   * This parameter is required.
   */
  roleInfo?: ExecuteAITeacherExpansionDialogueRefineRequestRoleInfo;
  /**
   * @remarks
   * The opening sentence.
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
   * talk about your dream job.
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
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRefineRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRefineRequestRecords },
      roleInfo: ExecuteAITeacherExpansionDialogueRefineRequestRoleInfo,
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

