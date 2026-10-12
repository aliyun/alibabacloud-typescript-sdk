// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentsResponseBodyPagingInfoAgents extends $dara.Model {
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
   * **The description.**
   * 
   * @example
   * Data analytics assistant
   */
  description?: string;
  /**
   * @remarks
   * **The display name.**
   * 
   * @example
   * My Assistant
   */
  displayName?: string;
  /**
   * @remarks
   * **The creation time (UNIX timestamp in milliseconds).**
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * **The last modification time (UNIX timestamp in milliseconds).**
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1780555634000
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * **The last modifier ID.**
   * 
   * @example
   * 123456
   */
  modifierId?: string;
  /**
   * @remarks
   * **The agent name.**
   * 
   * @example
   * my-agent
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
  /**
   * @remarks
   * The list of custom agents.
   */
  agents?: ListCustomAgentsResponseBodyPagingInfoAgents[];
  /**
   * @remarks
   * The maximum number of entries returned in this response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that the last page is reached.
   * 
   * @example
   * 5
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
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
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListCustomAgentsResponseBodyPagingInfo;
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

