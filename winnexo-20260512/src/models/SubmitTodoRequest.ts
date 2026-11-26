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
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
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
      appToken: 'appToken',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': SubmitTodoRequestAnswers },
      appToken: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

