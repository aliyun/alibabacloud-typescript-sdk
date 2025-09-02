// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords extends $dara.Model {
  /**
   * @remarks
   * The time when the access permissions on the API were granted to other users.
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the API owner.
   * 
   * @example
   * 12345
   */
  creatorId?: string;
  /**
   * @remarks
   * The end time of the validity period of the authorization.
   * 
   * @example
   * 2020-06-24T00:21:01+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the workspace to which the access permissions on the API are granted.
   * 
   * @example
   * 10004
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      endTime: 'EndTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      creatorId: 'string',
      endTime: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 10002
   */
  apiId?: number;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * My API name
   */
  apiName?: string;
  /**
   * @remarks
   * The path of the API.
   * 
   * @example
   * /test/1
   */
  apiPath?: string;
  /**
   * @remarks
   * The status of the API. Valid values: 0 and 1. The value 0 indicates that the API is not published. The value 1 indicates that the API is published.
   * 
   * @example
   * 0
   */
  apiStatus?: number;
  /**
   * @remarks
   * The authorization records.
   */
  authorizationRecords?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords[];
  /**
   * @remarks
   * The time when the API was created.
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the API owner.
   * 
   * @example
   * 12345
   */
  creatorId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * ab123
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the API was last modified.
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      apiStatus: 'ApiStatus',
      authorizationRecords: 'AuthorizationRecords',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      apiPath: 'string',
      apiStatus: 'number',
      authorizationRecords: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationListAuthorizationRecords },
      createdTime: 'string',
      creatorId: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationRecords)) {
      $dara.Model.validateArray(this.authorizationRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The APIs on which other users are granted the access permissions.
   */
  apiAuthorizationList?: ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList[];
  /**
   * @remarks
   * The page number. The value of this parameter is the same as that of the PageNumber parameter in the request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
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
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiAuthorizationList: 'ApiAuthorizationList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAuthorizationList: { 'type': 'array', 'itemType': ListDataServiceApiAuthoritiesResponseBodyDataApiAuthorizationList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiAuthorizationList)) {
      $dara.Model.validateArray(this.apiAuthorizationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiAuthoritiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The APIs on which other users are granted the access permissions.
   */
  data?: ListDataServiceApiAuthoritiesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Normal
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServiceApiAuthoritiesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

