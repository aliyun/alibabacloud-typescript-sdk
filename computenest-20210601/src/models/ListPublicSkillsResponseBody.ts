// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicSkillsResponseBodySkillsLocales extends $dara.Model {
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

export class ListPublicSkillsResponseBodySkills extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-09-11T02:18:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL for the skill package.
   * 
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/skill-creator.zip
   */
  downloadUrl?: string;
  /**
   * **if can be null:**
   * true
   */
  locales?: ListPublicSkillsResponseBodySkillsLocales[];
  /**
   * @remarks
   * The set of connection types that the skill depends on.
   */
  requiredConnections?: string[];
  /**
   * @remarks
   * The security scan status of the source file.
   */
  securityScanStatus?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * Create new skills, modify and improve existing skills, and measure skill performance.
   */
  skillDescription?: string;
  /**
   * @remarks
   * The skill display name.
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
   * The skill label set.
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * skill-creator
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the SkillSpace to which the skill belongs.
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
      locales: { 'type': 'array', 'itemType': ListPublicSkillsResponseBodySkillsLocales },
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

export class ListPublicSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * AAAAAZ9FmxgN6wKfeK/GOKRnnjU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of skills.
   */
  skills?: ListPublicSkillsResponseBodySkills[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
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
      skills: { 'type': 'array', 'itemType': ListPublicSkillsResponseBodySkills },
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

