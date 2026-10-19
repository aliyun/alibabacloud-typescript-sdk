// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTodoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 作答数组（question 原文须与待办问题对齐）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  answersShrink?: string;
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

