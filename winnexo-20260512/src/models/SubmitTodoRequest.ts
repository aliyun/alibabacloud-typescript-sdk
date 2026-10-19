// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTodoRequestAnswers extends $dara.Model {
  /**
   * @remarks
   * 作答值数组
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  answer?: string[];
  /**
   * @remarks
   * 对应 questions[].question 原文
   * 
   * This parameter is required.
   * 
   * @example
   * 是否通过审批
   */
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      question: 'question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: { 'type': 'array', 'itemType': 'string' },
      question: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answer)) {
      $dara.Model.validateArray(this.answer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTodoRequest extends $dara.Model {
  /**
   * @remarks
   * 作答数组（question 原文须与待办问题对齐）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  answers?: SubmitTodoRequestAnswers[];
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 待办ID
   * 
   * This parameter is required.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'answers',
      tenantId: 'tenantId',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': SubmitTodoRequestAnswers },
      tenantId: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answers)) {
      $dara.Model.validateArray(this.answers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

