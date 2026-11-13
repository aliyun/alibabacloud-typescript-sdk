// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequestVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The IDs of the projects in which the skill is visible. This field takes effect when Visibility is set to PROJECT.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The IDs of the users who can see the skill. This field takes effect when Visibility is set to USER.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The downloadable URL (HTTP or HTTPS) of the bundle.zip file. This parameter and SkillMdOverride are mutually exclusive.
   * 
   * @example
   * https://example.com/skill.zip
   */
  bundleUrl?: string;
  /**
   * @remarks
   * The description of the skill.
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
  extra?: { [key: string]: any };
  /**
   * @remarks
   * The name of the skill. The name must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * The body of the SKILL.md file. This parameter and BundleUrl are mutually exclusive. If you do not provide a bundle, use this field to create a lightweight skill that contains only the SKILL.md file.
   * 
   * @example
   * ---
   * name: example-skill
   * description: Sample skill.
   * ---
   * 
   * # Sample skill
   * 
   * Summarize the text provided by the user
   */
  skillMdOverride?: string;
  /**
   * @remarks
   * The release notes of the version.
   * 
   * @example
   * Initial version
   */
  versionNote?: string;
  /**
   * @remarks
   * The visibility level. Valid values: TENANT: visible within the account. PROJECT: visible to specified projects. USER: visible to specified users.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. Specify the corresponding field based on the value of Visibility.
   */
  visibilityScope?: CreateSkillRequestVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      bundleUrl: 'BundleUrl',
      description: 'Description',
      extra: 'Extra',
      name: 'Name',
      skillMdOverride: 'SkillMdOverride',
      versionNote: 'VersionNote',
      visibility: 'Visibility',
      visibilityScope: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleUrl: 'string',
      description: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      skillMdOverride: 'string',
      versionNote: 'string',
      visibility: 'string',
      visibilityScope: CreateSkillRequestVisibilityScope,
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(this.visibilityScope && typeof (this.visibilityScope as any).validate === 'function') {
      (this.visibilityScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

