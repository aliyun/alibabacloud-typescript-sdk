// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The **downloadable URL (HTTP/HTTPS) of the bundle.zip file**. This parameter is mutually exclusive with SkillMdOverride.
   * 
   * @example
   * https://example.com/skill.zip
   */
  bundleUrl?: string;
  /**
   * @remarks
   * The **Skill description**.
   * 
   * @example
   * Data analytics skill.
   */
  description?: string;
  /**
   * @remarks
   * The extension metadata in key-value pairs.
   * 
   * @example
   * {"appId":"APP_CWJMV36CT9SAFW1QEHX7"}
   */
  extraShrink?: string;
  /**
   * @remarks
   * The **Skill name**, which must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * The SKILL.md body content. This parameter is mutually exclusive with BundleUrl. If no bundle is provided, use this field to create a lightweight Skill that contains only a SKILL.md file.
   * 
   * @example
   * -
   */
  skillMdOverride?: string;
  /**
   * @remarks
   * The **version note**.
   * 
   * @example
   * Initial version.
   */
  versionNote?: string;
  /**
   * @remarks
   * The **visibility level**. Valid values:
   * - TENANT: Visible within the account.
   * - PROJECT: Visible to specified projects.
   * - USER: Visible to specified users.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. The corresponding field is determined by the Visibility parameter.
   */
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bundleUrl: 'BundleUrl',
      description: 'Description',
      extraShrink: 'Extra',
      name: 'Name',
      skillMdOverride: 'SkillMdOverride',
      versionNote: 'VersionNote',
      visibility: 'Visibility',
      visibilityScopeShrink: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleUrl: 'string',
      description: 'string',
      extraShrink: 'string',
      name: 'string',
      skillMdOverride: 'string',
      versionNote: 'string',
      visibility: 'string',
      visibilityScopeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

