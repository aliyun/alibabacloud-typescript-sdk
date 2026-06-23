// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequestVisibilityScope extends $dara.Model {
  projectIds?: string[];
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
  extra?: { [key: string]: any };
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

