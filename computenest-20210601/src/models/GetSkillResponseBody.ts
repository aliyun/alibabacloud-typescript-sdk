// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBodyLocales extends $dara.Model {
  enValue?: string;
  originalValue?: string;
  zhValue?: string;
  static names(): { [key: string]: string } {
    return {
      enValue: 'EnValue',
      originalValue: 'OriginalValue',
      zhValue: 'ZhValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enValue: 'string',
      originalValue: 'string',
      zhValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the Skill was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * **if can be null:**
   * true
   */
  locales?: GetSkillResponseBodyLocales[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  /**
   * @remarks
   * The Skill description.
   * 
   * @example
   * 11111111
   */
  skillDescription?: string;
  skillDisplayName?: string;
  /**
   * @remarks
   * Skill ID
   * 
   * @example
   * s-04zzrgosj6xd11yah
   */
  skillId?: string;
  /**
   * @remarks
   * The Skill labels.
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The Skill name.
   * 
   * @example
   * skill-hello
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the SkillSpace to which the Skill belongs.
   * 
   * @example
   * ss-111111111
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The time when the Skill was last updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      locales: 'Locales',
      requestId: 'RequestId',
      skillDescription: 'SkillDescription',
      skillDisplayName: 'SkillDisplayName',
      skillId: 'SkillId',
      skillLabels: 'SkillLabels',
      skillName: 'SkillName',
      skillSpaceId: 'SkillSpaceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      locales: { 'type': 'array', 'itemType': GetSkillResponseBodyLocales },
      requestId: 'string',
      skillDescription: 'string',
      skillDisplayName: 'string',
      skillId: 'string',
      skillLabels: { 'type': 'array', 'itemType': 'string' },
      skillName: 'string',
      skillSpaceId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.locales)) {
      $dara.Model.validateArray(this.locales);
    }
    if(Array.isArray(this.skillLabels)) {
      $dara.Model.validateArray(this.skillLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

