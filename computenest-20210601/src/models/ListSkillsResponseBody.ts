// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodySkillsLocales extends $dara.Model {
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

export class ListSkillsResponseBodySkills extends $dara.Model {
  /**
   * @remarks
   * The time when the Skill was created.
   * 
   * @example
   * 2026-05-10T02:22:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL for the Skill package.
   * 
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/skill-creator.zip
   */
  downloadUrl?: string;
  /**
   * **if can be null:**
   * true
   */
  locales?: ListSkillsResponseBodySkillsLocales[];
  /**
   * @remarks
   * The set of connection types that the Skill depends on.
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
   * The time when the Skill was last updated.
   * 
   * @example
   * 2025-11-03T22:58:52Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      locales: 'Locales',
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
      downloadUrl: 'string',
      locales: { 'type': 'array', 'itemType': ListSkillsResponseBodySkillsLocales },
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

export class ListSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  /**
   * @remarks
   * The list of Skills.
   */
  skills?: ListSkillsResponseBodySkills[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      skills: 'Skills',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      skills: { 'type': 'array', 'itemType': ListSkillsResponseBodySkills },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

