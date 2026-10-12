// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodyPagingInfoSkills extends $dara.Model {
  /**
   * @remarks
   * **The creator ID.**
   * 
   * @example
   * 123456
   */
  creatorId?: string;
  /**
   * @remarks
   * **The skill description.**
   * 
   * @example
   * Data analytics skill
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The format is a 13-digit number, such as `1780555634000`.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * **The ID of the last modifier.**
   * 
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @remarks
   * **The skill name.**
   * 
   * @example
   * my-skill
   */
  name?: string;
  /**
   * @remarks
   * **The visibility level.**
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      modifierId: 'ModifierId',
      name: 'Name',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      modifierId: 'string',
      name: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that the last page has been reached.
   * 
   * @example
   * 5
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of skills.
   */
  skills?: ListSkillsResponseBodyPagingInfoSkills[];
  /**
   * @remarks
   * The total number of matching entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skills: 'Skills',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      skills: { 'type': 'array', 'itemType': ListSkillsResponseBodyPagingInfoSkills },
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

export class ListSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListSkillsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 824F80BA-1778-5D8A-BAFF-668A4D9C4CC7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListSkillsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

