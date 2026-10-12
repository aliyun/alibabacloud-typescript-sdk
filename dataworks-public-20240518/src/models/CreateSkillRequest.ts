// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequestVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The IDs of the visible projects. This parameter takes effect only when Visibility is set to PROJECT.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The IDs of the visible users. This parameter takes effect only when Visibility is set to USER.
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
  extra?: { [key: string]: any };
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

