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
   * The time when the skill was created.
   * 
   * @example
   * 2025-09-11T02:18:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL of the skill package.
   * 
   * @example
   * https://testts-1.oss-cn-beijing.aliyuncs.com/app/yyb_9.1.1.zip
   */
  downloadUrl?: string;
  /**
   * **if can be null:**
   * true
   */
  locales?: ListPublicSkillsResponseBodySkillsLocales[];
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * 11111
   */
  skillDescription?: string;
  skillDisplayName?: string;
  /**
   * @remarks
   * Skill ID
   * 
   * @example
   * af7e49d9-277f-454a-afc5-1513d41cac31
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
   * ziptest
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the SkillSpace to which the skill belongs.
   * 
   * @example
   * ss-1111111
   */
  skillSpaceId?: string;
  /**
   * @remarks
   * The time when the skill was last updated.
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

