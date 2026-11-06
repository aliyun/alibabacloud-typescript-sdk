// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTodoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The answer array. The original text of the question must align with the to-do question.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  answersShrink?: string;
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
      answersShrink: 'answers',
      tenantId: 'tenantId',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answersShrink: 'string',
      tenantId: 'string',
      todoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

