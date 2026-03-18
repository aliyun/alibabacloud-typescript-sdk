// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent extends $dara.Model {
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

export class AITeacherSyncPracticeTaskGenerateResponseBodyData extends $dara.Model {
  taskContent?: AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent[];
  /**
   * @example
   * textbook_question_answering
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskContent: 'taskContent',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskContent: { 'type': 'array', 'itemType': AITeacherSyncPracticeTaskGenerateResponseBodyDataTaskContent },
      taskType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.taskContent)) {
      $dara.Model.validateArray(this.taskContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AITeacherSyncPracticeTaskGenerateResponseBody extends $dara.Model {
  data?: AITeacherSyncPracticeTaskGenerateResponseBodyData;
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
      data: AITeacherSyncPracticeTaskGenerateResponseBodyData,
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

