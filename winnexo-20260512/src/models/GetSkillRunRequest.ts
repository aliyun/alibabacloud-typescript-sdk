// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRunRequest extends $dara.Model {
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
   * Specifies whether to include execution logs. Default value: false. Enable this only when troubleshooting issues.
   * 
   * @example
   * false
   */
  includeLogs?: boolean;
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
   * The evaluation run ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleRunId
   */
  runId?: string;
  /**
   * @remarks
   * The ID of the tenant to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      includeLogs: 'includeLogs',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      runId: 'runId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      includeLogs: 'boolean',
      opsUserCode: 'string',
      opsUserId: 'string',
      runId: 'string',
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

