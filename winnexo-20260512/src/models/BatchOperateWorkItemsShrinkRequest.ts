// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchOperateWorkItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The batch action.
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE
   */
  action?: string;
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
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The idempotency key.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  idempotencyKey?: string;
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
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The IDs of the target work items. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  workItemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      idempotencyKey: 'idempotencyKey',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
      workItemIdsShrink: 'workItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      appToken: 'string',
      collaborationGroupId: 'string',
      idempotencyKey: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      tenantId: 'string',
      workItemIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

