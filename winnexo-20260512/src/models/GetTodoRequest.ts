// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoRequest extends $dara.Model {
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
   * The ID of the assistant message. This parameter is used to query multiple to-do items by message.
   * 
   * @example
   * msg-1
   */
  messageId?: string;
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
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the to-do item (get).
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  /**
   * @remarks
   * The ID of the work item. This parameter is used to query multiple to-do items by source.
   * 
   * @example
   * wi_1
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      messageId: 'messageId',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
      todoId: 'todoId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      messageId: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      tenantId: 'string',
      todoId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

