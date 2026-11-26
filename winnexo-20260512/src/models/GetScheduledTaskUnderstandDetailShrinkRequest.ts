// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskUnderstandDetailShrinkRequest extends $dara.Model {
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
   * The ID of the collaboration group to which the task belongs, such as cg_101. If this parameter is specified, a group space task is created and the caller must be a valid group member. If this parameter is left empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The name of the current effective digital employee. This parameter is empty if not configured.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  digitalEmployeeNameShrink?: string;
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
   * The segments.
   */
  segmentsShrink?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The natural language task description.
   * 
   * @example
   * string_value
   */
  userInput?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      collaborationGroupId: 'collaborationGroupId',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      segmentsShrink: 'segments',
      tenantId: 'tenantId',
      userInput: 'userInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      collaborationGroupId: 'string',
      digitalEmployeeNameShrink: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      segmentsShrink: 'string',
      tenantId: 'string',
      userInput: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

