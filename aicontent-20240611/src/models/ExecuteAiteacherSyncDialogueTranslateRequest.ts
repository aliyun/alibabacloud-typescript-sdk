// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks extends $dara.Model {
  /**
   * @remarks
   * The content of the assistant\\"s message.
   * 
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @remarks
   * The translated content of the assistant\\"s message.
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
   * The content of the user\\"s message.
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

export class ExecuteAITeacherSyncDialogueTranslateRequestRecords extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the message is off-topic. This parameter is used for flow control.
   * 
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @remarks
   * Indicates whether the message is on-topic.
   * 
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * The sequence number of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The message author\\"s role.
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

export class ExecuteAITeacherSyncDialogueTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * An array of dialogue task objects.
   * 
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks[];
  /**
   * @remarks
   * An array of dialogue record objects.
   */
  records?: ExecuteAITeacherSyncDialogueTranslateRequestRecords[];
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
      records: 'records',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks },
      records: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueTranslateRequestRecords },
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

