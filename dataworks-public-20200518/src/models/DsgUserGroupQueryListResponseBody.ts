// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupQueryListResponseBodyPageDataData extends $dara.Model {
  /**
   * @remarks
   * A list of usernames in the user group.
   */
  accounts?: string[];
  /**
   * @remarks
   * The time when the user group was created.
   * 
   * @example
   * 2024-05-10 17:14:44
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the user group was last modified.
   * 
   * @example
   * 2024-05-10 17:14:44
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * test_group
   */
  name?: string;
  /**
   * @remarks
   * The owner of the user group.
   * 
   * @example
   * user1
   */
  owner?: string;
  mcAggregationInfo?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      mcAggregationInfo: 'mcAggregationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      mcAggregationInfo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgUserGroupQueryListResponseBodyPageData extends $dara.Model {
  /**
   * @remarks
   * A list of user groups.
   * 
   * @example
   * {     "accounts": [         "role_project_scheduler"     ],     "gmtCreate": "2024-05-10 15:22:18",     "gmtModified": "2024-05-10 15:22:18",     "id": 1955,     "name": "dsg_fin_test-copy",     "owner": "UAT" }
   */
  data?: DsgUserGroupQueryListResponseBodyPageDataData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of user groups.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DsgUserGroupQueryListResponseBodyPageDataData },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class DsgUserGroupQueryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1029030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The paginated query results.
   */
  pageData?: DsgUserGroupQueryListResponseBodyPageData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      pageData: 'PageData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      pageData: DsgUserGroupQueryListResponseBodyPageData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageData && typeof (this.pageData as any).validate === 'function') {
      (this.pageData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

