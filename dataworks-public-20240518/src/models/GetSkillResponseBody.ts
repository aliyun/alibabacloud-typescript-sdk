// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBodySkillVisibilityScope extends $dara.Model {
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

export class GetSkillResponseBodySkill extends $dara.Model {
  body?: string;
  /**
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/xxx.zip?Expires=...&Signature=...
   */
  bundleUrl?: string;
  /**
   * @example
   * 123456
   */
  creatorId?: string;
  description?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @example
   * TENANT
   */
  visibility?: string;
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
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
   */
  requestId?: string;
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

