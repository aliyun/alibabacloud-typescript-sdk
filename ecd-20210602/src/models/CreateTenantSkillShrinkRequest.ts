// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantSkillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The API key of the skill.
   * 
   * @example
   * akm-98f66829***
   */
  apiKey?: string;
  /**
   * @remarks
   * The description of the skill. Maximum length: 500 characters.
   * 
   * @example
   * This skill is used for****
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * name****
   */
  displayName?: string;
  /**
   * @remarks
   * The environment variables.
   */
  envVarsShrink?: string;
  /**
   * @remarks
   * The icon parsing tag. This parameter is required when SkillIcon is specified.
   * 
   * @example
   * 21E9A5B273CB8EC0675*********
   */
  iconETag?: string;
  /**
   * @remarks
   * The skill channel. Valid values:
   * - ENTERPRISE: Enterprise Edition.
   * - BUSINESS: Business Edition.
   * 
   * @example
   * BUSINESS
   */
  skillChannel?: string;
  /**
   * @remarks
   * The skill icon.
   */
  skillIcon?: string;
  /**
   * @remarks
   * The skill version.
   * 
   * @example
   * 0.0.1
   */
  skillVersion?: string;
  /**
   * @remarks
   * The slug identifier of the skill. This parameter is user-defined and must be unique within the tenant.
   * 
   * @example
   * find-skills****
   */
  slug?: string;
  /**
   * @remarks
   * The file parsing task key.
   * 
   * @example
   * E1CF3D69-529D-****
   */
  taskKey?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      description: 'Description',
      displayName: 'DisplayName',
      envVarsShrink: 'EnvVars',
      iconETag: 'IconETag',
      skillChannel: 'SkillChannel',
      skillIcon: 'SkillIcon',
      skillVersion: 'SkillVersion',
      slug: 'Slug',
      taskKey: 'TaskKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      description: 'string',
      displayName: 'string',
      envVarsShrink: 'string',
      iconETag: 'string',
      skillChannel: 'string',
      skillIcon: 'string',
      skillVersion: 'string',
      slug: 'string',
      taskKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

