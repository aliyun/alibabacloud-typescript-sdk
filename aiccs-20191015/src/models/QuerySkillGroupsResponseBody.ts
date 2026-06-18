// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySkillGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Skill group channel type.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * Skill group description.
   * 
   * @example
   * 自动化技能组
   */
  description?: string;
  /**
   * @remarks
   * Skill group display name.
   * 
   * @example
   * 自动化技能组
   */
  displayName?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * 123456
   */
  skillGroupId?: number;
  /**
   * @remarks
   * Skill group name.
   * 
   * @example
   * 自动化技能组
   */
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkillGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Data.
   */
  data?: QuerySkillGroupsResponseBodyData[];
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 20
   */
  onePageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 76
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QuerySkillGroupsResponseBodyData },
      onePageSize: 'number',
      requestId: 'string',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

