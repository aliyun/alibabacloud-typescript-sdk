// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillResponseBodySkillVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The list of visible project IDs.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The list of visible user IDs.
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

export class UpdateSkillResponseBodySkill extends $dara.Model {
  /**
   * @remarks
   * The SKILL.md body content.
   * 
   * @example
   * Putting an elephant in a refrigerator takes three steps: open the refrigerator door, put the elephant in, and close the refrigerator door
   */
  body?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 123456
   */
  creatorId?: string;
  /**
   * @remarks
   * The Skill description.
   * 
   * @example
   * Data analytics skill
   */
  description?: string;
  /**
   * @remarks
   * The creation time (millisecond timestamp).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time (millisecond timestamp).
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The last modifier ID.
   * 
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @remarks
   * The Skill name.
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * The visibility level.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope.
   */
  visibilityScope?: UpdateSkillResponseBodySkillVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
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
      creatorId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      visibility: 'string',
      visibilityScope: UpdateSkillResponseBodySkillVisibilityScope,
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

export class UpdateSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
   */
  requestId?: string;
  /**
   * @remarks
   * The Skill details.
   */
  skill?: UpdateSkillResponseBodySkill;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      skill: 'Skill',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skill: UpdateSkillResponseBodySkill,
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

