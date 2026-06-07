// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentsResponseBodyPagingInfoAgents extends $dara.Model {
  /**
   * @example
   * 123456
   */
  creatorId?: string;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @example
   * my-agent
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
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
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

export class ListCustomAgentsResponseBodyPagingInfo extends $dara.Model {
  agents?: ListCustomAgentsResponseBodyPagingInfoAgents[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 5
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': ListCustomAgentsResponseBodyPagingInfoAgents },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAgentsResponseBody extends $dara.Model {
  pagingInfo?: ListCustomAgentsResponseBodyPagingInfo;
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
      pagingInfo: ListCustomAgentsResponseBodyPagingInfo,
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

