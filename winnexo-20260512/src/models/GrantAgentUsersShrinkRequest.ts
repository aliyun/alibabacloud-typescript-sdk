// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantAgentUsersShrinkRequest extends $dara.Model {
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
   * The authorization expiration timestamp in milliseconds. If this parameter is not specified, the authorization never expires.
   * 
   * @example
   * 1
   */
  expireDate?: number;
  /**
   * @remarks
   * The name of the digital human.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
   * The permission items.
   * 
   * @example
   * string_value
   */
  permissionsShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 676577544219585
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of user group IDs.
   * 
   * @example
   * string_value
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * The list of user IDs to be authorized.
   * 
   * @example
   * 1
   */
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      expireDate: 'expireDate',
      operatingObjectName: 'operatingObjectName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      permissionsShrink: 'permissions',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      userIdsShrink: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      expireDate: 'number',
      operatingObjectName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      permissionsShrink: 'string',
      tenantId: 'string',
      userGroupIdsShrink: 'string',
      userIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

