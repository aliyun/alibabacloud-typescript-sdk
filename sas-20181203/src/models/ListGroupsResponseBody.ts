// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The type of the server group. Valid values:
   * - **0**: default group
   * - **1**: other group.
   * 
   * @example
   * 1
   */
  groupFlag?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * 11028542
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * cn-shenzhen+dir-1440978***
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupFlag: 'GroupFlag',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupFlag: 'number',
      groupId: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The NextToken value returned when the NextToken method is used.
   * 
   * @example
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 202
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned by the API request.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of server groups.
   */
  list?: ListGroupsResponseBodyList[];
  /**
   * @remarks
   * The detailed information of the error code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination information of the query results.
   */
  pageInfo?: ListGroupsResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request, which can be used for troubleshooting and diagnostics.
   * 
   * @example
   * CB414DB5-F692-5DAB-9F0F-975C060AF***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the exception event was processed. Valid values:
   * 
   * - **true**: Processed.
   * - **false**: Not processed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': ListGroupsResponseBodyList },
      message: 'string',
      pageInfo: ListGroupsResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

