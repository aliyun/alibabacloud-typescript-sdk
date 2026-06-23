// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillShrinkRequest extends $dara.Model {
  /**
   * @example
   * https://example.com/skill.zip
   */
  bundleUrl?: string;
  /**
   * @example
   * 数据分析技能
   */
  description?: string;
  /**
   * @example
   * {"appId":"APP_CWJMV36CT9SAFW1QEHX7"}
   */
  extraShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @example
   * -
   */
  skillMdOverride?: string;
  /**
   * @example
   * 初版
   */
  versionNote?: string;
  /**
   * @example
   * TENANT
   */
  visibility?: string;
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

