// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The **download URL of the bundle.zip file** (HTTP or HTTPS). This parameter and SkillMdOverride are mutually exclusive.
   * 
   * @example
   * https://example.com/skill.zip
   */
  bundleUrl?: string;
  /**
   * @remarks
   * The **skill description**.
   * 
   * @example
   * Data analytics skill
   */
  description?: string;
  /**
   * @remarks
   * The extended metadata in key-value pairs.
   * 
   * @example
   * {"appId":"APP_CWJMV36CT9SAFW1QEHX7"}
   */
  extraShrink?: string;
  /**
   * @remarks
   * The **skill name**. The name must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * The content of the SKILL.md file. This parameter and BundleUrl are mutually exclusive. If you do not provide a bundle, use this parameter to create a lightweight skill that contains only the SKILL.md file.
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
   * Initial version
   */
  versionNote?: string;
  /**
   * @remarks
   * The **visibility level**. Valid values: TENANT (visible to the entire tenant), PROJECT (visible to specific projects), and USER (visible to specific users).
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. Specify the corresponding field based on the value of Visibility.
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

