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
   * The creation time.
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
   * The set of connection types required by the Skill.
   */
  requiredConnections?: string[];
  /**
   * @remarks
   * The security scan status of the source file.
   */
  securityScanStatus?: string;
  /**
   * @remarks
   * The Skill description.
   * 
   * @example
   * Create new skills, modify and improve existing skills, and measure skill performance.
   */
  skillDescription?: string;
  /**
   * @remarks
   * The Skill display name.
   */
  skillDisplayName?: string;
  /**
   * @remarks
   * Skill ID
   * 
   * @example
   * s-xxxxx
   */
  skillId?: string;
  /**
   * @remarks
   * The set of Skill labels.
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The Skill name.
   * 
   * @example
   * skill-creator
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the SkillSpace to which the Skill belongs.
   * 
   * @example
   * ss-xxxxx
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The update time.
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
      requiredConnections: 'RequiredConnections',
      securityScanStatus: 'SecurityScanStatus',
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
      requiredConnections: { 'type': 'array', 'itemType': 'string' },
      securityScanStatus: 'string',
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
    if(Array.isArray(this.requiredConnections)) {
      $dara.Model.validateArray(this.requiredConnections);
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

