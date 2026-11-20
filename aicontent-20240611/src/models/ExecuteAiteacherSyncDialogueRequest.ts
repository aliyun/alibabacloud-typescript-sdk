// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherSyncDialogueRequestDialogueTasks extends $dara.Model {
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

export class ExecuteAITeacherSyncDialogueRequestRecords extends $dara.Model {
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
   * Specifies whether the response is off topic, which also serves as a flow control mechanism. This parameter reflects whether the student\\"s response meets the settings of the conversation task. The value of this parameter is derived from the return results of previous conversation turns. In addition, this parameter serves as a flow control mechanism. If the response is off topic more than twice, the value is forcibly set to true to force a task switch. Valid values:
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
   * The role identity.
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

export class ExecuteAITeacherSyncDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of conversation task content.
   * 
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherSyncDialogueRequestDialogueTasks[];
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
   * The collection of conversation records.
   */
  records?: ExecuteAITeacherSyncDialogueRequestRecords[];
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
      dialogueTasks: 'dialogueTasks',
      languageCode: 'languageCode',
      records: 'records',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueRequestRecords },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

