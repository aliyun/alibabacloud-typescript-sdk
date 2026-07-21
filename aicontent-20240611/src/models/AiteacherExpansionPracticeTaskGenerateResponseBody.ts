// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet extends $dara.Model {
  /**
   * @remarks
   * The name of the AI teacher.
   * 
   * @example
   * Alex
   */
  assistant?: string;
  /**
   * @remarks
   * The name of the student.
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

export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent extends $dara.Model {
  /**
   * @remarks
   * The AI teacher\\"s question.
   * 
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
   * @remarks
   * The student\\"s answer.
   * 
   * @example
   * They think it\\"s great because they won\\"t be stuck in an office.
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

export class AITeacherExpansionPracticeTaskGenerateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The background of the conversation.
   * 
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  backgroundDescription?: string;
  /**
   * @remarks
   * The role settings.
   */
  roleSet?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet;
  /**
   * @remarks
   * The opening sentence of the conversation.
   * 
   * @example
   * Hey Jamie, do you know what a travel blogger does?
   */
  startSentence?: string;
  /**
   * @remarks
   * A list of Q\\&A pairs.
   */
  taskContent?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent[];
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * textbook_dialogue
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundDescription: 'backgroundDescription',
      roleSet: 'roleSet',
      startSentence: 'startSentence',
      taskContent: 'taskContent',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundDescription: 'string',
      roleSet: AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet,
      startSentence: 'string',
      taskContent: { 'type': 'array', 'itemType': AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent },
      taskType: 'string',
    };
  }

  validate() {
    if(this.roleSet && typeof (this.roleSet as any).validate === 'function') {
      (this.roleSet as any).validate();
    }
    if(Array.isArray(this.taskContent)) {
      $dara.Model.validateArray(this.taskContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherExpansionPracticeTaskGenerateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   */
  data?: AITeacherExpansionPracticeTaskGenerateResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AITeacherExpansionPracticeTaskGenerateResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

