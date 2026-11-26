// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoShrinkRequest extends $dara.Model {
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
   * The list of platform user IDs of the assignees. You can specify 1 to 100 IDs. Duplicate IDs are automatically removed.
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  assigneeUserIdsShrink?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace. This parameter is optional.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
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
   * The priority.
   * 
   * @example
   * MEDIUM
   */
  priority?: string;
  /**
   * @remarks
   * The list of questions.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  questionsShrink?: string;
  /**
   * @remarks
   * The source context. The value is passed through and stored in the database as-is without validation.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceContextShrink?: string;
  /**
   * @remarks
   * The source of the to-do item. Only OPEN_API is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_API
   */
  sourceType?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The title of the to-do item. The maximum length is 200 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Governance approval
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      assigneeUserIdsShrink: 'assigneeUserIds',
      collaborationGroupId: 'collaborationGroupId',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      priority: 'priority',
      questionsShrink: 'questions',
      sourceContextShrink: 'sourceContext',
      sourceType: 'sourceType',
      tenantId: 'tenantId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      assigneeUserIdsShrink: 'string',
      collaborationGroupId: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      priority: 'string',
      questionsShrink: 'string',
      sourceContextShrink: 'string',
      sourceType: 'string',
      tenantId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

