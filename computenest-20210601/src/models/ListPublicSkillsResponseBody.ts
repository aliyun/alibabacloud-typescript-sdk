// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The download link for the skill package.
   * 
   * @example
   * https://testts-1.oss-cn-beijing.aliyuncs.com/app/yyb_9.1.1.zip
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The description of the skill.
   * 
   * @example
   * 11111
   */
  skillDescription?: string;
  /**
   * @remarks
   * The ID of the skill.
   * 
   * @example
   * af7e49d9-277f-454a-afc5-1513d41cac31
   */
  skillId?: string;
  /**
   * @remarks
   * The labels attached to the skill.
   */
  skillLabels?: string[];
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * ziptest
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the skill space.
   * 
   * @example
   * ss-1111111
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
      skillDescription: 'SkillDescription',
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
      skillDescription: 'string',
      skillId: 'string',
      skillLabels: { 'type': 'array', 'itemType': 'string' },
      skillName: 'string',
      skillSpaceId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
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
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * AAAAAZ9FmxgN6wKfeK/GOKRnnjU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of public skills.
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

