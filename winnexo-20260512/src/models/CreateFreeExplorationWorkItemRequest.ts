// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFreeExplorationWorkItemRequest extends $dara.Model {
  /**
   * @remarks
   * The technical names of the selected digital workers.
   * 
   * This parameter is required.
   * 
   * @example
   * ["sales-agent"]
   */
  agentNames?: string[];
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
   * The ID of the collaboration workspace to which the work item belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The actual members of the topic, including the creator. For public topics, members of the entire workspace are not enumerated.
   * 
   * @example
   * [43]
   */
  memberUserIds?: number[];
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
   * The title of the work item.
   * 
   * This parameter is required.
   * 
   * @example
   * Investigate sales opportunities
   */
  title?: string;
  /**
   * @remarks
   * The actual visibility scope. Valid values: PRIVATE, COLLABORATIVE, and PUBLIC.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      agentNames: 'agentNames',
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      memberUserIds: 'memberUserIds',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
      title: 'title',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentNames: { 'type': 'array', 'itemType': 'string' },
      appToken: 'string',
      collaborationGroupId: 'string',
      memberUserIds: { 'type': 'array', 'itemType': 'number' },
      opsUserCode: 'string',
      opsUserId: 'string',
      tenantId: 'string',
      title: 'string',
      visibility: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentNames)) {
      $dara.Model.validateArray(this.agentNames);
    }
    if(Array.isArray(this.memberUserIds)) {
      $dara.Model.validateArray(this.memberUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

