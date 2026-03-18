// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet extends $dara.Model {
  /**
   * @example
   * Alex
   */
  assistant?: string;
  /**
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
   * @example
   * Why might some people think dog walking is a great job?
   */
  assistant?: string;
  /**
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
   * @example
   * In a career counseling session, we are going to discuss our dream jobs and the responsibilities associated with them. Alex, who dreams of becoming a professional travel blogger, will share the tasks and skills required for this role, while Jamie, aspiring to be a wildlife photographer, will outline the responsibilities and challenges of capturing nature\\"s moments. Both will explore how their interests align with the practical aspects of their chosen careers, discussing the potential for travel, creativity, and the impact of their work on society and the environment.
   */
  backgroundDescription?: string;
  roleSet?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataRoleSet;
  /**
   * @example
   * Hey Jamie, do you know what a travel blogger does?
   */
  startSentence?: string;
  taskContent?: AITeacherExpansionPracticeTaskGenerateResponseBodyDataTaskContent[];
  /**
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
  data?: AITeacherExpansionPracticeTaskGenerateResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
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

