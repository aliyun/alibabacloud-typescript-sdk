// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @example
   * 为什么有些人认为遛狗是份好差事?
   */
  assistantTranslate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
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

export class ExecuteAITeacherExpansionDialogueTranslateRequestRecords extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Ask Mark if he has thought about what his dream job might be.
   */
  content?: string;
  /**
   * @example
   * 跑题：true, 不跑题：false
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * 扣题：true, 不扣题：false
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 老师：assistant；学生：user
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

export class ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Jane, a caring mother
   */
  assistant?: string;
  /**
   * @remarks
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

export class ExecuteAITeacherExpansionDialogueTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * In this dialogue, you will be playing the role of Lily, a young girl. I will be Jane, Lily\\"s mother. We are in the kitchen, where I am preparing dinner. I am asking you about your food preferences, specifically if you like meat, fish, and milk. You like meat and milk, but you don\\"t like fish because of its smell. I explain to you the nutritional benefits of these foods and suggest alternatives for the ones you don\\"t like. Finally, I invite you to start eating.
   */
  background?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks[];
  records?: ExecuteAITeacherExpansionDialogueTranslateRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  roleInfo?: ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo;
  /**
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * talk about food.
   */
  topic?: string;
  /**
   * @remarks
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
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks },
      records: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueTranslateRequestRecords },
      roleInfo: ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo,
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

