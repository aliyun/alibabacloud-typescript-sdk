// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The downloadable URL (HTTP/HTTPS) of the bundle.zip file. Mutually exclusive with SkillMdOverride. If specified, the bundle is replaced.
   * 
   * @example
   * https://example.com/skill.zip
   */
  bundleUrl?: string;
  /**
   * @remarks
   * The Skill description.
   * 
   * @example
   * 数据分析技能
   */
  description?: string;
  /**
   * @remarks
   * The expected version number for optimistic locking. If not specified, the update is based on the current highest version.
   * 
   * @example
   * -
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The extended metadata (key-value pairs).
   * 
   * @example
   * {\\"appId\\":\\"APP_Q2SDWKIGFWNZTR68K1GQ\\"}
   */
  extraShrink?: string;
  /**
   * @remarks
   * The name of the Skill to update.
   * 
   * This parameter is required.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * The SKILL.md body content. Mutually exclusive with BundleUrl.
   * 
   * @example
   * 把大象放冰箱分为三步，把冰箱门打开，把大象放进去，把冰箱门关上。
   */
  skillMdOverride?: string;
  /**
   * @remarks
   * The version note.
   * 
   * @example
   * 修订说明
   */
  versionNote?: string;
  /**
   * @remarks
   * The visibility scope. The corresponding field is used based on the visibility level.
   */
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bundleUrl: 'BundleUrl',
      description: 'Description',
      expectedVersion: 'ExpectedVersion',
      extraShrink: 'Extra',
      name: 'Name',
      skillMdOverride: 'SkillMdOverride',
      versionNote: 'VersionNote',
      visibilityScopeShrink: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleUrl: 'string',
      description: 'string',
      expectedVersion: 'number',
      extraShrink: 'string',
      name: 'string',
      skillMdOverride: 'string',
      versionNote: 'string',
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

