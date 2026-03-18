// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherExpansionDialogueRequestDialogueTasks extends $dara.Model {
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

export class ExecuteAITeacherExpansionDialogueRequestRecords extends $dara.Model {
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

export class ExecuteAITeacherExpansionDialogueRequestRoleInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alex
   */
  assistant?: string;
  /**
   * @remarks
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

export class ExecuteAITeacherExpansionDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  background?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherExpansionDialogueRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  records?: ExecuteAITeacherExpansionDialogueRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  roleInfo?: ExecuteAITeacherExpansionDialogueRequestRoleInfo;
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
   * Let\\"s talk about traffic rules.
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
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueRequestRecords },
      roleInfo: ExecuteAITeacherExpansionDialogueRequestRoleInfo,
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

