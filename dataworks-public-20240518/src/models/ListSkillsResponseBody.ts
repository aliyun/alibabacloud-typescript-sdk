// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsResponseBodyPagingInfoSkills extends $dara.Model {
  /**
   * @example
   * 123456
   */
  creatorId?: string;
  description?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @example
   * my-skill
   */
  name?: string;
  /**
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
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 5
   */
  nextToken?: string;
  skills?: ListSkillsResponseBodyPagingInfoSkills[];
  /**
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
  pagingInfo?: ListSkillsResponseBodyPagingInfo;
  /**
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

