// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBodySkillVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * **A list of project IDs that can access the Skill.**
   */
  projectIds?: string[];
  /**
   * @remarks
   * A list of user IDs that can access the Skill.
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

export class GetSkillResponseBodySkill extends $dara.Model {
  /**
   * @remarks
   * **The content of the SKILL.md file.**
   * 
   * @example
   * 把大象装冰箱需要3步，把冰箱门打开，把大象放进去，把冰箱门关上。
   */
  body?: string;
  /**
   * @remarks
   * A temporary download link for `bundle.zip`, which does not require authentication and will expire.
   * 
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/xxx.zip?Expires=...&Signature=...
   */
  bundleUrl?: string;
  /**
   * @remarks
   * The ID of the user who created the Skill.
   * 
   * @example
   * 123456
   */
  creatorId?: string;
  /**
   * @remarks
   * **The Skill description.**
   * 
   * @example
   * 数据分析技能
   */
  description?: string;
  /**
   * @remarks
   * The time the Skill was created, provided as a UNIX timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the Skill was last modified, provided as a UNIX timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the user who last modified the Skill.
   * 
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @remarks
   * **The name of the Skill.**
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * **The visibility level.**
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * **The visibility scope.**
   */
  visibilityScope?: GetSkillResponseBodySkillVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      bundleUrl: 'BundleUrl',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      visibility: 'Visibility',
      visibilityScope: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bundleUrl: 'string',
      creatorId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      visibility: 'string',
      visibilityScope: GetSkillResponseBodySkillVisibilityScope,
    };
  }

  validate() {
    if(this.visibilityScope && typeof (this.visibilityScope as any).validate === 'function') {
      (this.visibilityScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID for the request.
   * 
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
   */
  requestId?: string;
  /**
   * @remarks
   * The returned Skill object.
   */
  skill?: GetSkillResponseBodySkill;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skill: 'Skill',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skill: GetSkillResponseBodySkill,
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

