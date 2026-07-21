// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITeacherSyncDialogueSuggestionRequestDialogueTasks extends $dara.Model {
  /**
   * @remarks
   * The assistant\\"s message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @remarks
   * The translation of the assistant\\"s message.
   * 
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * The sequence number of the dialogue task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The user\\"s message content.
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

export class GetAITeacherSyncDialogueSuggestionRequestRecords extends $dara.Model {
  /**
   * @remarks
   * The message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @remarks
   * A control flag that indicates if a student\\"s response is off-topic. The value is based on the previous turn. If the conversation goes off-topic more than twice, the system sets this value to `true` to force a task switch.
   * 
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @remarks
   * Specifies if the message is on topic. `true` indicates the message is on topic; `false` indicates it is off topic.
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
   * The role of the message author. Valid values: `assistant` (for AI-generated messages) and `user` (for user-provided messages).
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

export class GetAITeacherSyncDialogueSuggestionRequest extends $dara.Model {
  /**
   * @remarks
   * A list of dialogue tasks.
   * 
   * This parameter is required.
   */
  dialogueTasks?: GetAITeacherSyncDialogueSuggestionRequestDialogueTasks[];
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
   * A list of dialogue records.
   * 
   * This parameter is required.
   */
  records?: GetAITeacherSyncDialogueSuggestionRequestRecords[];
  /**
   * @remarks
   * The unique identifier for the end-user.
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
      dialogueTasks: { 'type': 'array', 'itemType': GetAITeacherSyncDialogueSuggestionRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': GetAITeacherSyncDialogueSuggestionRequestRecords },
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

