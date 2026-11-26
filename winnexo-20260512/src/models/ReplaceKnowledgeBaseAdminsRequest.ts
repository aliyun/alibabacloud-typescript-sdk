// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceKnowledgeBaseAdminsRequest extends $dara.Model {
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
   * 企业知识库或内置帮助知识库根目录业务 ID
   * 
   * This parameter is required.
   * 
   * @example
   * kb_001
   */
  directoryId?: string;
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
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 管理员用户组 ID 列表；默认空列表表示清空用户组管理员
   * 
   * @example
   * ["group-1"]
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * 直接管理员的平台用户 ID 列表；默认空列表表示清空可变用户管理员，普通库创建者保留
   * 
   * @example
   * [10001]
   */
  userIds?: number[];
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      directoryId: 'directoryId',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
      userGroupIds: 'userGroupIds',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      directoryId: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      tenantId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

