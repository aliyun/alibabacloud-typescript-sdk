// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTodoRequest extends $dara.Model {
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
   * The handover note.
   * 
   * @example
   * Please continue processing
   */
  comment?: string;
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
   * The list of target user IDs for the transfer (1 to 100).
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  targetUserIds?: string[];
  /**
   * @remarks
   * The to-do item ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of target user IDs for the transfer (1 to 100).
   * 
   * This parameter is required.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      comment: 'comment',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      targetUserIds: 'targetUserIds',
      tenantId: 'tenantId',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      comment: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      targetUserIds: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetUserIds)) {
      $dara.Model.validateArray(this.targetUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

