// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicSkillsResponseBodySkills extends $dara.Model {
  /**
   * @example
   * 2025-09-11T02:18:42Z
   */
  createTime?: string;
  /**
   * @example
   * https://testts-1.oss-cn-beijing.aliyuncs.com/app/yyb_9.1.1.zip
   */
  downloadUrl?: string;
  /**
   * @example
   * 11111
   */
  skillDescription?: string;
  /**
   * @remarks
   * Skill ID
   * 
   * @example
   * af7e49d9-277f-454a-afc5-1513d41cac31
   */
  skillId?: string;
  skillLabels?: string[];
  /**
   * @example
   * ziptest
   */
  skillName?: string;
  /**
   * @example
   * ss-1111111
   */
  skillSpaceId?: string;
  /**
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
   * @example
   * 10
   */
  maxResults?: number;
  /**
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
  skills?: ListPublicSkillsResponseBodySkills[];
  /**
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

