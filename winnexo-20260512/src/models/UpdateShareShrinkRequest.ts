// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateShareShrinkRequest extends $dara.Model {
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
   * The output item ID.
   * 
   * @example
   * exampleOutputItemId
   */
  outputItemId?: string;
  /**
   * @remarks
   * The name of the output item. This parameter must be used together with sessionId.
   * 
   * @example
   * Quarterly Review.pptx
   */
  outputItemName?: string;
  /**
   * @remarks
   * Specifies whether to refresh the sharing link. This is supported only for output items that have sharing enabled or are being enabled in the current request.
   * 
   * @example
   * false
   */
  refreshShareLink?: boolean;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The sharing scope. Valid values:
   * - PUBLIC: Accessible to all users.
   * - SPECIFIED: Accessible to specified users or user groups.
   * 
   * @example
   * SPECIFIED
   */
  shareAccessType?: string;
  /**
   * @remarks
   * Specifies whether sharing is enabled.
   * 
   * @example
   * true
   */
  shareEnabled?: boolean;
  /**
   * @remarks
   * The list of user group IDs within the specified scope. Pass an empty array to clear the list.
   * 
   * @example
   * ["group-1"]
   */
  shareUserGroupIdsShrink?: string;
  /**
   * @remarks
   * The list of platform user IDs within the specified scope. Pass an empty array to clear the list.
   * 
   * @example
   * [10001]
   */
  shareUserIdsShrink?: string;
  /**
   * @remarks
   * The type of the current permission. Valid values:
   * - period: Period type.
   * - objective: Objective type.
   * - kr: Key result type.
   * 
   * This parameter is required.
   * 
   * @example
   * outputItem
   */
  targetType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      outputItemId: 'outputItemId',
      outputItemName: 'outputItemName',
      refreshShareLink: 'refreshShareLink',
      sessionId: 'sessionId',
      shareAccessType: 'shareAccessType',
      shareEnabled: 'shareEnabled',
      shareUserGroupIdsShrink: 'shareUserGroupIds',
      shareUserIdsShrink: 'shareUserIds',
      targetType: 'targetType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      outputItemId: 'string',
      outputItemName: 'string',
      refreshShareLink: 'boolean',
      sessionId: 'string',
      shareAccessType: 'string',
      shareEnabled: 'boolean',
      shareUserGroupIdsShrink: 'string',
      shareUserIdsShrink: 'string',
      targetType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

