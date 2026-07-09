// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluatorSkillResponseBodySkillFiles extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * # Trace Context Loader
   */
  content?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SKILL.md
   */
  name?: string;
  /**
   * @remarks
   * The file remarks.
   * 
   * @example
   * 主技能说明
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluatorSkillResponseBodySkillVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1782816000000
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 首次发布版本
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluatorSkillResponseBodySkill extends $dara.Model {
  /**
   * @remarks
   * The time when the skill was created. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * 1782816000000
   */
  currentVersion?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * 读取链路上下文辅助评估
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Trace 上下文读取
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the skill is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of skill files.
   * 
   * @example
   * [{"name":"SKILL.md","content":"# Trace Context Loader","remark":"主技能说明"}]
   */
  files?: GetEvaluatorSkillResponseBodySkillFiles[];
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 1782816000000
   */
  latestVersion?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * trace_context_loader
   */
  skillName?: string;
  /**
   * @remarks
   * The time when the skill was last updated. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782816600
   */
  updatedAt?: number;
  /**
   * @remarks
   * The list of skill versions.
   * 
   * @example
   * [{"version":"1782816000000","versionDescription":"首次发布版本"}]
   */
  versions?: GetEvaluatorSkillResponseBodySkillVersions[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      currentVersion: 'currentVersion',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      files: 'files',
      latestVersion: 'latestVersion',
      skillName: 'skillName',
      updatedAt: 'updatedAt',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      currentVersion: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      files: { 'type': 'array', 'itemType': GetEvaluatorSkillResponseBodySkillFiles },
      latestVersion: 'string',
      skillName: 'string',
      updatedAt: 'number',
      versions: { 'type': 'array', 'itemType': GetEvaluatorSkillResponseBodySkillVersions },
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluatorSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The skill details.
   * 
   * @example
   * {"skillName":"trace_context_loader","enable":true,"currentVersion":"1782816000000"}
   */
  skill?: GetEvaluatorSkillResponseBodySkill;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      skill: 'skill',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skill: GetEvaluatorSkillResponseBodySkill,
    };
  }

  validate() {
    if(this.skill && typeof (this.skill as any).validate === 'function') {
      (this.skill as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

