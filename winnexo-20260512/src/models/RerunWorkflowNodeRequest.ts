// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowNodeRequest extends $dara.Model {
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
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The key of the starting node for the rerun, which includes fixed planning nodes and business execution nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * query.amount
   */
  nodeKey?: string;
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
   * The current physical plan ID after the rerun. Rerunning a fixed planning node may generate a new plan. Use this value for subsequent queries.
   * 
   * This parameter is required.
   * 
   * @example
   * plan_v3
   */
  planId?: string;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      nodeKey: 'nodeKey',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      planId: 'planId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      collaborationGroupId: 'string',
      nodeKey: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      planId: 'string',
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

