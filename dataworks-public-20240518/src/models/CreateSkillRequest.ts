// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequestVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The list of visible project IDs. This parameter takes effect only when Visibility is set to `PROJECT`.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The list of visible user IDs. This parameter takes effect only when Visibility is set to `USER`.
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
  extra?: { [key: string]: any };
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

