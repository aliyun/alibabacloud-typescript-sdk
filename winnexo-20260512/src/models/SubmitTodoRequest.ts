// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTodoRequestAnswers extends $dara.Model {
  /**
   * @remarks
   * The array of answer values.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  answer?: string[];
  /**
   * @remarks
   * The original text corresponding to questions[].question.
   * 
   * This parameter is required.
   * 
   * @example
   * Whether to approve
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
   * The answer array. The original text of the question must align with the to-do question.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  answers?: SubmitTodoRequestAnswers[];
  /**
   * @remarks
   * The to-do task ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The answer array. The original text of the question must align with the to-do question.
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

