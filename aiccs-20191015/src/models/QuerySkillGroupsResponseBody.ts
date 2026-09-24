// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySkillGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The channel type of the skill group.
   * 
   * @example
   * 2
   */
  channelType?: number;
  /**
   * @remarks
   * The description of the skill group.
   * 
   * @example
   * Automation skill group
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill group.
   * 
   * @example
   * Automation skill group
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * 123456
   */
  skillGroupId?: number;
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * Automation skill group
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
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data.
   */
  data?: QuerySkillGroupsResponseBodyData[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  onePageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @remarks
   * The total number of records.
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

