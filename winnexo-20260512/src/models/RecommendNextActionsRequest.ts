// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecommendNextActionsRequest extends $dara.Model {
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
   * The extraction instruction.
   * 
   * @example
   * Only recommend next steps related to data analysis
   */
  customPrompt?: string;
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
   * The output type: `conversation/skill/task`.
   * 
   * @example
   * followUpOnly
   */
  outputType?: string;
  /**
   * @remarks
   * The number of recent messages used to assemble the contextual information.
   * 
   * @example
   * 10
   */
  recentMessageCount?: number;
  /**
   * @remarks
   * The session ID to filter by. If specified, returns all Active/Expired status information associated with this session.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this value explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      customPrompt: 'customPrompt',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      outputType: 'outputType',
      recentMessageCount: 'recentMessageCount',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      customPrompt: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      outputType: 'string',
      recentMessageCount: 'number',
      sessionId: 'string',
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

