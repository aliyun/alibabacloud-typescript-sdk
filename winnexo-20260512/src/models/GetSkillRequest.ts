// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
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
   * Specifies whether to return the complete file tree. Default value: false. This prevents large response payloads.
   * 
   * @example
   * false
   */
  includeSkillFiles?: boolean;
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
   * The skill code. This parameter has a value when type is set to skill.
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * string_value
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the tenant to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The view mode. Valid values: draft (draft or edit view) and published (published view, default).
   * 
   * @example
   * draft
   */
  viewMode?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      includeSkillFiles: 'includeSkillFiles',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      skillCode: 'skillCode',
      skillName: 'skillName',
      tenantId: 'tenantId',
      viewMode: 'viewMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      includeSkillFiles: 'boolean',
      opsUserCode: 'string',
      opsUserId: 'string',
      skillCode: 'string',
      skillName: 'string',
      tenantId: 'string',
      viewMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

